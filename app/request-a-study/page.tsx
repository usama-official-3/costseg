import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";
import { ContactForm } from "@/components/marketing/ContactForm";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Request a Cost Segregation Study",
  description:
    "Request a CostSeg SI cost segregation study conversation. Frontend form with validation; delivery mocked until destination approved.",
  alternates: { canonical: "/request-a-study" },
};

export default function RequestAStudyPage() {
  return (
    <main id="main-content">
      <Hero
        eyebrow="Request a study"
        title="Request a cost segregation study"
        support="Tell us about the property and your timing. This form collects lead details for follow-up — it does not create an automatic engagement."
        primaryHref="#request-form"
        primaryLabel="Open form"
      />
      <Section surface="paper" className="py-14" id="request-form">
        <Container className="max-w-2xl">
          <ContactForm title="Study inquiry" includePropertyFields />
        </Container>
      </Section>
    </main>
  );
}
