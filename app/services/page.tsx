import { buildPageMetadata } from "@/lib/seo/pageMetadata";
import { CtaBand } from "@/components/marketing/CtaBand";
import { Hero } from "@/components/marketing/Hero";
import { ServicesGrid } from "@/components/marketing/ServicesGrid";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { homeCopy } from "@/content/marketing/home";
import { siteImages } from "@/lib/images";

export const metadata = buildPageMetadata({
  title: "Our Services",
  description:
    "Overview of CostSeg SI cost segregation study services and related support themes.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main id="main-content">
      {/* Photo hero — matches design-board services page */}
      <Hero
        eyebrow="Services"
        title="Our Services"
        support="Proposed study and support offerings for property stakeholders. Publish only categories the client confirms are actively offered."
        primaryHref="/request-a-study"
        primaryLabel="Get Started"
        secondaryHref="/how-cost-segregation-works"
        secondaryLabel="How it works"
        media={siteImages.hero}
        compact
      />

      {/* Card grid only — intro lives in the hero above */}
      <ServicesGrid
        items={homeCopy.services}
        layout="page"
        title={homeCopy.servicesSection.title}
        lead={homeCopy.servicesSection.lead}
      />

      <Section surface="paper" className="py-12">
        <Container className="max-w-3xl">
          <h2 className="text-xl font-bold tracking-tight">Important note</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            CostSeg SI provides technology-supported study preparation and
            related educational resources. We do not present website content as
            individualized tax advice. Engage your CPA or tax counsel for advice
            specific to your facts.
          </p>
        </Container>
      </Section>
      <CtaBand tone="ink" />
    </main>
  );
}
