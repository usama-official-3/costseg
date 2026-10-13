import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ReviewStatusBadge } from "@/components/knowledge/ReviewStatusBadge";
import { getArticlePath, getGroupMeta } from "@/lib/content/knowledge";
import type { KnowledgeArticle } from "@/lib/schemas/knowledge";

export function ResultList({ articles }: { articles: KnowledgeArticle[] }) {
  if (!articles.length) {
    return (
      <div className="rounded-[13px] border border-line bg-soft p-6 text-sm text-muted">
        No matching articles. Try another keyword or clear filters.
      </div>
    );
  }

  return (
    <ul className="grid gap-4">
      {articles.map((article) => (
        <li key={article.slug}>
          <Card>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-muted">
                {getGroupMeta(article.group).label}
              </span>
              <ReviewStatusBadge status={article.reviewStatus} />
            </div>
            <h3 className="mt-2 text-lg font-bold">
              <Link
                href={getArticlePath(article)}
                className="hover:underline"
              >
                {article.title}
              </Link>
            </h3>
            <p className="mt-2 text-sm text-muted">{article.summary}</p>
          </Card>
        </li>
      ))}
    </ul>
  );
}
