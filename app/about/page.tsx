import { CtaBand } from "@/components/marketing/CtaBand";
import { Hero } from "@/components/marketing/Hero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { buildPageMetadata } from "@/lib/seo/pageMetadata";

export const metadata = buildPageMetadata({
  title: "About CostSeg SI",
  description:
    "About CostSeg SI — Super Intelligence–positioned cost segregation study preparation.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main-content">
      <Hero
        eyebrow="About"
        title="About CostSeg SI"
        support="CostSeg SI focuses on technology-led cost segregation study preparation for US real estate stakeholders — with professional review at the center of delivery."
      />
      <Section surface="paper" className="py-14">
        <Container className="max-w-3xl space-y-4 text-muted">
          <p>
            Our positioning emphasizes{" "}
            <strong className="text-ink">Super Intelligence</strong> workflows
            that help organize documents, classify components, and prepare study
            materials more efficiently — without inventing credentials or
            promising outcomes we cannot substantiate.
          </p>
          <p>
            Company biography, team credentials, testimonials, and partner logos
            will be added only when supplied or approved by the client.
          </p>
          <p>
            Educational resources on this site are general information and are
            not individualized tax advice.
          </p>
        </Container>
      </Section>
      <CtaBand title="Connect with CostSeg SI" tone="ink" />
    </main>
  );
}
