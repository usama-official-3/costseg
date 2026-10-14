import { buildPageMetadata } from "@/lib/seo/pageMetadata";
import { CtaBand } from "@/components/marketing/CtaBand";
import { Hero } from "@/components/marketing/Hero";
import { ProcessSteps } from "@/components/marketing/ProcessSteps";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/LinkButton";
import { homeCopy } from "@/content/marketing/home";

export const metadata = buildPageMetadata({
  title: "Super Intelligence Technology",
  description:
    "How CostSeg SI uses Super Intelligence workflows to support cost segregation study preparation.",
  path: "/technology",
});

export default function TechnologyPage() {
  return (
    <main id="main-content">
      <Hero
        eyebrow="Technology · Super Intelligence"
        title="Super Intelligence for cost segregation preparation"
        support="A multi-stage workflow designed to help extract, classify, estimate, and review property cost data — with professional sign-off remaining essential."
        secondaryHref="/technology/ai-agent-workflow"
        secondaryLabel="Agent workflow"
      />

      <ProcessSteps
        eyebrow="How it works"
        title="The 4-Stage SI Process"
        lead="Based on the client’s multi-agent description. This page explains the proposed pipeline; it does not claim every agent capability is live in production unless confirmed."
        steps={homeCopy.siSteps}
        surface="soft"
        numbered={false}
        align="center"
      />

      <Section surface="soft" className="py-14">
        <Container className="max-w-3xl space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Why this matters for study quality
          </h2>
          <p className="text-muted">
            Cost segregation depends on documentation, classification judgment,
            and engineering-based estimation when costs are incomplete. Super
            Intelligence positioning emphasizes speed and structure without
            replacing professional review.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <LinkButton href="/technology/ai-agent-workflow">See agent workflow</LinkButton>
            <LinkButton href="/tools" variant="secondaryLight">
              Tools preview
            </LinkButton>
          </div>
        </Container>
      </Section>

      <CtaBand title="Talk through a technology-led study" tone="ink" />
    </main>
  );
}
