import { ReviewStatusBadge } from "@/components/knowledge/ReviewStatusBadge";
import type { KnowledgeArticle } from "@/lib/schemas/knowledge";

export function ArticleHeader({ article }: { article: KnowledgeArticle }) {
  return (
    <header className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-muted">
          {article.category}
        </span>
        <ReviewStatusBadge status={article.reviewStatus} />
      </div>
      <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold tracking-[-0.04em] text-ink">
        {article.title}
      </h1>
      <p className="max-w-3xl text-muted">{article.summary}</p>
      <p className="text-xs text-muted">
        Updated {article.updatedAt} · Kind:{" "}
        {article.kind.split("-").join(" ")}
      </p>
      {article.verificationNote ? (
        <p className="rounded-[8px] border border-[#d4ed57] bg-[#fafcef] px-3 py-2 text-sm text-ink">
          {article.verificationNote}
        </p>
      ) : null}
      {article.assumptions && article.assumptions.length > 0 ? (
        <div className="rounded-[13px] border border-line bg-soft p-4">
          <p className="text-sm font-bold text-ink">Assumptions</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
            {article.assumptions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
