import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { LinkButton } from "@/components/ui/LinkButton";

export const metadata: Metadata = {
  title: "Illustrative Depreciation Calculator",
  description:
    "Gated placeholder for an illustrative depreciation calculator pending tax methodology review.",
  robots: { index: false, follow: false },
};

export default function CalculatorPage() {
  return (
    <ToolLayout
      eyebrow="Calculator · gated"
      title="Illustrative depreciation calculator"
      description="This optional tool is intentionally unavailable until calculation methodology, assumptions, and qualified tax review are approved."
      notice="No calculator engine is implemented in this phase. Do not invent depreciation math for demo purposes."
    >
      <div className="rounded-[13px] border border-line bg-soft p-6">
        <h2 className="text-lg font-bold text-ink">Why it is gated</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
          <li>Requires documented assumptions and recovery-period logic</li>
          <li>Requires qualified tax/legal review before public release</li>
          <li>Must include clear limitations and non-advice disclaimers</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href="/tools/questionnaire">Use questionnaire instead</LinkButton>
          <LinkButton href="/contact" variant="secondaryLight">
            Contact CostSeg SI
          </LinkButton>
        </div>
      </div>
    </ToolLayout>
  );
}
