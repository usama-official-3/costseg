import type { Metadata } from "next";
import { CtaBand } from "@/components/marketing/CtaBand";
import { Hero } from "@/components/marketing/Hero";
import { ProcessSteps } from "@/components/marketing/ProcessSteps";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { homeCopy } from "@/content/marketing/home";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How CostSeg SI approaches cost segregation studies — from property intake through technology-assisted analysis and professional review.",
};

const intakeSteps = [
  {
    title: "Share property information",
    body: "Provide acquisition or construction details and available documentation such as drawings, invoices, and closing statements.",
  },
  {
    title: "Technology-assisted analysis",
    body: "Super Intelligence–led workflow helps organize documents, classify components, and prepare estimation inputs.",
  },
  {
    title: "Professional review",
    body: "A qualified reviewer evaluates classifications, documentation, and study outputs before delivery.",
  },
  {
    title: "Delivery to your team",
    body: "Receive study materials prepared for coordination with your CPA or tax counsel.",
  },
] as const;

export default function HowItWorksPage() {
  return (
    <main id="main-content">
      <Hero
        eyebrow="Process"
        title="How a CostSeg SI study moves from intake to delivery"
        support="Exact steps and delivery expectations will be confirmed with the client. The outline below reflects the proposed workflow in the concept brief."
        primaryLabel="Discuss your property"
        secondaryHref="/technology"
        secondaryLabel="View technology"
      />

      <ProcessSteps
        title="Proposed service workflow"
        lead="Simple four-step path designed for clarity. Timelines vary by property complexity and documentation quality — no fixed turnaround claims."
        steps={intakeSteps}
        surface="paper"
      />

      <Section surface="soft" className="py-14">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight">
            What typically helps the process
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            <li>Property address and type</li>
            <li>Placed-in-service or acquisition context</li>
            <li>Available blueprints, ledgers, invoices, and closing documents</li>
            <li>Your CPA or adviser contact for coordination</li>
          </ul>
          <p className="mt-4 text-sm text-muted">
            Under the SI presentation model, document extraction and
            classification stages map to:{" "}
            {homeCopy.siSteps.map((s) => s.title).join(" → ")}.
          </p>
        </Container>
      </Section>

      <CtaBand title="Ready to talk through a property?" />
    </main>
  );
}
