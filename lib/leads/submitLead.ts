import type { LeadFormValues } from "@/lib/schemas/lead";

export type SubmitLeadResult =
  | { ok: true; id: string }
  | { ok: false; error: string };

/**
 * Lead submission adapter.
 * Phase 5: mock success only. Swap for API/email/CRM when destination is approved.
 */
export async function submitLead(
  values: LeadFormValues,
): Promise<SubmitLeadResult> {
  // Honeypot filled => pretend success without processing
  if (values.companyWebsite && values.companyWebsite.trim().length > 0) {
    await delay(400);
    return { ok: true, id: "honeypot" };
  }

  await delay(600);

  if (process.env.LEAD_WEBHOOK_URL) {
    // Reserved for future backend wiring — not called in Phase 5 without approval.
  }

  return {
    ok: true,
    id: `mock_${Date.now()}`,
  };
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
