import type { Metadata } from "next";
import { CtaBand } from "@/components/marketing/CtaBand";
import { Hero } from "@/components/marketing/Hero";
import { ProcessSteps } from "@/components/marketing/ProcessSteps";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Our AI Agent Workflow",
  description:
    "Explanatory overview of CostSeg SI’s proposed multi-agent Super Intelligence workflow for cost segregation studies.",
};

const agents = [
  {
    title: "Extraction Agent",
    body: "Parses structural blueprints, contractor ledgers, closing statements, and invoices to surface line-item costs and asset details.",
  },
  {
    title: "Data Normalization Agent",
    body: "Organizes unstructured receipts and records into standardized construction asset categories.",
  },
  {
    title: "Tax Classification Agent",
    body: "Evaluates extracted assets against MACRS-oriented recovery concepts to separate longer-lived structure from shorter-lived components where appropriate.",
  },
  {
    title: "Bonus Depreciation Agent",
    body: "Considers which classified components may relate to bonus depreciation rules based on placed-in-service context.",
  },
  {
    title: "Estimation Agent",
    body: "When historical costs are missing or bundled, applies documented engineering-based estimation methods.",
  },
  {
    title: "Quality Assurance Agent",
    body: "Flags anomalies and high-risk classifications for human attention before professional sign-off.",
  },
] as const;

export default function WorkflowPage() {
  return (
    <main id="main-content">
      <Hero
        eyebrow="Workflow"
        title="Proposed multi-agent Super Intelligence pipeline"
        support="Educational explanation of specialized agents collaborating in a structured pipeline. Not a live operations dashboard."
        secondaryHref="/technology"
        secondaryLabel="Technology overview"
      />

      <Section surface="paper" className="py-14">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight">Agent roles</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Language below follows the client’s product description. Avoid
            treating these as guaranteed autonomous outcomes.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {agents.map((agent) => (
              <li key={agent.title}>
                <Card className="h-full">
                  <h3 className="font-bold">{agent.title}</h3>
                  <p className="mt-2 text-sm text-muted">{agent.body}</p>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <ProcessSteps
        title="Human-in-the-loop remains essential"
        lead="After automated assistance stages, a professional cost segregation engineer reviews and certifies the study."
        steps={[
          {
            title: "Compile asset schedule",
            body: "Assemble classifications, estimates, and supporting references into a coherent study package.",
          },
          {
            title: "Professional sign-off",
            body: "Qualified review verifies results before delivery to the client and their advisers.",
          },
        ]}
        surface="soft"
      />

      <CtaBand />
    </main>
  );
}
