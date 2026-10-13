import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy notice placeholder for CostSeg SI form and site data handling.",
};

export default function PrivacyPage() {
  return (
    <main id="main-content">
      <Hero
        eyebrow="Legal"
        title="Privacy Policy"
        support="Placeholder notice for development. Final privacy language requires client/legal review before launch."
        primaryHref="/contact"
        primaryLabel="Contact"
      />
      <Section surface="paper" className="py-14">
        <Container className="prose-muted max-w-3xl space-y-4 text-sm text-muted">
          <p>
            CostSeg SI may collect information you submit through contact and
            study-request forms, such as name, email, phone, property details,
            and message content.
          </p>
          <p>
            During the frontend-only phase, submissions are validated in the
            browser and mock-accepted. They are not yet transmitted to a live
            CRM or email destination until the client approves delivery
            configuration.
          </p>
          <p>
            Replace this page with counsel-approved privacy terms covering
            retention, processors, cookies/analytics (if enabled), and user
            rights before production launch.
          </p>
        </Container>
      </Section>
    </main>
  );
}
