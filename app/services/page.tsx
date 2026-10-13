import type { Metadata } from "next";
import { CtaBand } from "@/components/marketing/CtaBand";
import { Hero } from "@/components/marketing/Hero";
import { ServicesGrid } from "@/components/marketing/ServicesGrid";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { homeCopy } from "@/content/marketing/home";

export const metadata: Metadata = {
  title: "Cost Segregation Services",
  description:
    "Overview of CostSeg SI cost segregation study services and related support themes.",
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <Hero
        eyebrow="Services"
        title="Cost segregation services"
        support="Overview of proposed study and support offerings. Publish only categories the client confirms are actively offered."
        secondaryHref="/property-types"
        secondaryLabel="Property types"
      />
      <ServicesGrid
        items={homeCopy.services}
        title="What we focus on"
        lead="Cost segregation studies, classification support, reporting, and coordination-ready outputs for your professional advisers."
      />
      <Section surface="soft" className="py-12">
        <Container className="max-w-3xl">
          <h2 className="text-xl font-bold">Important note</h2>
          <p className="mt-2 text-sm text-muted">
            CostSeg SI provides technology-supported study preparation and
            related educational resources. We do not present website content as
            individualized tax advice. Engage your CPA or tax counsel for advice
            specific to your facts.
          </p>
        </Container>
      </Section>
      <CtaBand />
    </main>
  );
}
