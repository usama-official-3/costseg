import { buildPageMetadata } from "@/lib/seo/pageMetadata";
import Link from "next/link";
import { ClipboardList, GitBranch, Calculator } from "lucide-react";
import { Hero } from "@/components/marketing/Hero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const metadata = buildPageMetadata({
  title: "Tools",
  description:
    "CostSeg SI frontend tools: property questionnaire and Super Intelligence workflow explorer. Calculator remains gated.",
  path: "/tools",
});

const tools = [
  {
    href: "/tools/questionnaire",
    title: "Property study questionnaire",
    body: "Collect property type, study context, documentation availability, and contact details for lead qualification.",
    icon: ClipboardList,
    status: "Available preview",
  },
  {
    href: "/tools/workflow-explorer",
    title: "Super Intelligence workflow explorer",
    body: "Interactive explanation of ingestion, classification, estimation, and human review stages.",
    icon: GitBranch,
    status: "Available preview",
  },
  {
    href: "/tools/calculator",
    title: "Illustrative depreciation calculator",
    body: "Optional tool reserved until tax methodology review and approved assumptions are complete.",
    icon: Calculator,
    status: "Gated",
  },
] as const;

export default function ToolsPage() {
  return (
    <main id="main-content">
      <Hero
        eyebrow="Tools"
        title="Interactive previews"
        support="Frontend tools for intake and education. These do not run live tax engines or guarantee study outcomes."
        primaryHref="/tools/questionnaire"
        primaryLabel="Start questionnaire"
        secondaryHref="/tools/workflow-explorer"
        secondaryLabel="Explore workflow"
      />
      <Section surface="paper" className="py-14">
        <Container>
          <ul className="grid gap-4 md:grid-cols-3">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <li key={tool.href}>
                  <Card className="h-full">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="grid size-10 place-items-center rounded-[9px] bg-soft">
                        <Icon className="size-5" aria-hidden />
                      </div>
                      <Badge variant={tool.status === "Gated" ? "warning" : "lime"}>
                        {tool.status}
                      </Badge>
                    </div>
                    <h2 className="text-lg font-bold">
                      <Link
                        href={tool.href}
                        className="transition-colors hover:text-muted"
                      >
                        {tool.title}
                      </Link>
                    </h2>
                    <p className="mt-2 text-sm text-muted">{tool.body}</p>
                  </Card>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>
    </main>
  );
}
