import { buildPageMetadata } from "@/lib/seo/pageMetadata";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { WorkflowExplorer } from "@/components/tools/WorkflowExplorer";
import { LinkButton } from "@/components/ui/LinkButton";

export const metadata = buildPageMetadata({
  title: "SI workflow explorer",
  description:
    "Interactive Super Intelligence workflow explorer — explanatory demo for CostSeg SI.",
  path: "/tools/workflow-explorer",
});

export default function WorkflowExplorerPage() {
  return (
    <ToolLayout
      eyebrow="Workflow explorer"
      title="Super Intelligence workflow explorer"
      description="Step through the proposed multi-agent pipeline: document ingestion, classification, estimation, and human-in-the-loop review."
      notice="Explanatory UI only. This is not a live agent operations console and does not perform tax calculations."
    >
      <WorkflowExplorer />
      <div className="mt-8 flex flex-wrap gap-3">
        <LinkButton href="/tools/questionnaire">Start questionnaire</LinkButton>
        <LinkButton href="/technology" variant="secondaryLight">
          Technology overview
        </LinkButton>
      </div>
    </ToolLayout>
  );
}
