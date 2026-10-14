import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Terms / Disclaimers",
  description:
    "Terms and professional/tax disclaimers placeholder for CostSeg SI.",
  alternates: { canonical: "/legal/terms" },
};

export default function LegalTermsPage() {
  return (
    <main id="main-content">
      <Hero
        eyebrow="Legal"
        title="Terms / Disclaimers"
        support="Placeholder terms for development. Final terms and tax/professional disclaimers require authorized adviser review."
        primaryHref="/contact"
        primaryLabel="Contact"
      />
      <Section surface="paper" className="py-14">
        <Container className="max-w-3xl space-y-4 text-sm text-muted">
          <p>
            Content on this website is for general educational and marketing
            purposes only. It is not legal, tax, accounting, or other
            professional advice and should not be relied upon as a substitute
            for consultation with qualified advisers.
          </p>
          <p>
            CostSeg SI does not guarantee tax savings, audit outcomes, accuracy
            rates, or fixed turnaround times on this website unless and until
            such claims are expressly approved with supporting evidence.
          </p>
          <p>
            References to Super Intelligence describe a technology-led workflow
            concept. Do not interpret marketing explanations as a warranty of
            autonomous or unsupervised results.
          </p>
        </Container>
      </Section>
    </main>
  );
}
