import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";
import { ContactForm } from "@/components/marketing/ContactForm";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact CostSeg SI to discuss a potential cost segregation study for your property.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <Hero
        eyebrow="Contact"
        title="Get started with CostSeg SI"
        support="Share your contact details and a short note about your property. We’ll follow up on next steps."
        primaryHref="#lead-form"
        primaryLabel="Jump to form"
        secondaryHref="/request-study"
        secondaryLabel="Request a study"
      />
      <Section surface="paper" className="py-14" id="lead-form">
        <Container className="max-w-2xl">
          <ContactForm title="Contact / Get Started" />
        </Container>
      </Section>
    </main>
  );
}
