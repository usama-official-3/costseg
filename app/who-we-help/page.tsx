import { buildPageMetadata } from "@/lib/seo/pageMetadata";
import { AudienceGrid } from "@/components/marketing/AudienceGrid";
import { CtaBand } from "@/components/marketing/CtaBand";
import { Hero } from "@/components/marketing/Hero";
import { homeCopy } from "@/content/marketing/home";

export const metadata = buildPageMetadata({
  title: "Who We Help",
  description:
    "Property owners, investors, and advisers exploring cost segregation studies with CostSeg SI.",
  path: "/who-we-help",
});

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
      <CtaBand title="Tell us about your property portfolio" tone="ink" />
    </main>
  );
}
