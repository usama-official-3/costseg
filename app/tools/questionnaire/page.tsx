import { buildPageMetadata } from "@/lib/seo/pageMetadata";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { QuestionnaireForm } from "@/components/tools/QuestionnaireForm";
import { LinkButton } from "@/components/ui/LinkButton";

export const metadata = buildPageMetadata({
  title: "Property questionnaire",
  description:
    "Property study questionnaire preview for CostSeg SI lead qualification.",
  path: "/tools/questionnaire",
});

export default function QuestionnairePage() {
  return (
    <ToolLayout
      eyebrow="Questionnaire"
      title="Property study questionnaire"
      description="Answer a few questions about the property and your documentation. This qualifies a conversation — it does not create an automatic engagement or tax filing."
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
        <QuestionnaireForm />
        <aside className="space-y-4">
          <div className="rounded-[13px] border border-line bg-soft p-4 text-sm text-muted">
            <p className="font-bold text-ink">What happens next?</p>
            <p className="mt-2">
              Submissions are validated and mock-accepted in this frontend phase.
              Live routing waits for an approved lead destination.
            </p>
          </div>
          <LinkButton href="/tools/workflow-explorer" variant="secondaryLight">
            See SI workflow
          </LinkButton>
        </aside>
      </div>
    </ToolLayout>
  );
}
