import { ProcessSteps } from "@/components/marketing/ProcessSteps";
import { SiMeshBackdrop } from "@/components/marketing/SiMeshBackdrop";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/ui/LinkButton";

type Step = { title: string; body: string };

export function SiWorkflowBand({ steps }: { steps: readonly Step[] }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <SiMeshBackdrop />
      <div className="relative z-10 pt-14 sm:pt-16">
        <Container>
          <div className="cs-reveal max-w-3xl">
            <Badge variant="lime">Proposed Super Intelligence workflow</Badge>
            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Technology designed to streamline study preparation
            </h2>
            <p className="mt-3 text-hero-muted">
              The website presents CostSeg SI&apos;s multi-agent workflow as a
              technology-led process. Capabilities shown here are for
              explanation — distinguish planned features from confirmed
              operational systems.
            </p>
            <div className="mt-6">
              <LinkButton href="/technology" variant="secondary">
                Explore the technology
              </LinkButton>
            </div>
          </div>
        </Container>
        <ProcessSteps
          title="Four stages of the SI-led workflow"
          lead="Document ingestion, classification, estimation, and human-in-the-loop review."
          steps={steps}
          surface="ink"
          connect
        />
      </div>
    </section>
  );
}
