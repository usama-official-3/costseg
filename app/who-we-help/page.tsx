import type { Metadata } from "next";
import { AudienceGrid } from "@/components/marketing/AudienceGrid";
import { CtaBand } from "@/components/marketing/CtaBand";
import { Hero } from "@/components/marketing/Hero";
import { homeCopy } from "@/content/marketing/home";

export const metadata: Metadata = {
  title: "Who We Help",
  description:
    "Proposed CostSeg SI audiences including investors, property owners, and portfolio operators.",
};

export default function WhoWeHelpPage() {
  return (
    <main id="main-content">
      <Hero
        eyebrow="Audiences"
        title="Who CostSeg SI is designed to help"
        support="Potential audiences listed for review. Confirm target segments with the client before final publishing."
        secondaryHref="/property-types"
        secondaryLabel="Property types"
      />
      <AudienceGrid items={homeCopy.audiences} />
      <CtaBand title="Tell us about your property portfolio" />
    </main>
  );
}
