import type { Metadata } from "next";
import { AudienceGrid } from "@/components/marketing/AudienceGrid";
import { CtaBand } from "@/components/marketing/CtaBand";
import { FaqPreview } from "@/components/marketing/FaqPreview";
import { Hero } from "@/components/marketing/Hero";
import { ServicesGrid } from "@/components/marketing/ServicesGrid";
import { SiWorkflowBand } from "@/components/marketing/SiWorkflowBand";
import { homeCopy } from "@/content/marketing/home";
import { siteImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Cost Segregation, Accelerated by Super Intelligence",
  description:
    "CostSeg SI helps prepare cost segregation studies with a Super Intelligence–led workflow and professional review. Educational information — not tax advice.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main id="main-content">
      <Hero
        eyebrow={homeCopy.hero.eyebrow}
        title={
          <>
            Cost Segregation,
            <br />
            Accelerated by{" "}
            <span className="text-lime">Super Intelligence</span>.
          </>
        }
        support={homeCopy.hero.support}
        primaryHref="/request-a-study"
        primaryLabel="Get Started"
        secondaryHref="/how-cost-segregation-works"
        secondaryLabel="Learn How It Works"
        media={siteImages.hero}
        trustItems={homeCopy.trust}
        compact={false}
      />
      <ServicesGrid
        items={homeCopy.services}
        title={homeCopy.servicesSection.title}
        lead={homeCopy.servicesSection.lead}
      />
      <SiWorkflowBand steps={homeCopy.siSteps} />
      <AudienceGrid items={homeCopy.audiences} />
      <FaqPreview items={homeCopy.faqs} />
      <CtaBand tone="ink" />
    </main>
  );
}
