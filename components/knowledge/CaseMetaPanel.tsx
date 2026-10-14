import type { KnowledgeArticle } from "@/lib/schemas/knowledge";

type CaseField = {
  key: keyof KnowledgeArticle;
  label: string;
};

const fields: CaseField[] = [
  { key: "court", label: "Court" },
  { key: "citation", label: "Citation" },
  { key: "decisionDate", label: "Decision date" },
  { key: "facts", label: "Facts" },
  { key: "issue", label: "Issue" },
  { key: "holding", label: "Holding" },
  { key: "reasoning", label: "Reasoning" },
  { key: "relevance", label: "Relevance to cost segregation" },
];

export function CaseMetaPanel({ article }: { article: KnowledgeArticle }) {
  const present = fields.filter((field) => {
    const value = article[field.key];
    return typeof value === "string" && value.trim().length > 0;
  });

  if (present.length === 0) {
    return null;
  }

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-ink">Case record</h2>
      <dl className="grid gap-3 rounded-[13px] border border-line bg-soft p-4 text-sm sm:grid-cols-2">
        {present.map((field) => (
          <div
            key={field.key}
            className={
              field.key === "facts" ||
              field.key === "issue" ||
              field.key === "holding" ||
              field.key === "reasoning" ||
              field.key === "relevance"
                ? "sm:col-span-2"
                : undefined
            }
          >
            <dt className="font-semibold text-ink">{field.label}</dt>
            <dd className="mt-1 text-muted">{String(article[field.key])}</dd>
          </div>
        ))}
      </dl>
      <p className="text-xs text-muted">
        Court-case pages require verified citation, holding, and relevance before
        publication as authority.
      </p>
    </section>
  );
}
