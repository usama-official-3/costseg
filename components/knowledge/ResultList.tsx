import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContentKindBadge } from "@/components/knowledge/ContentKindBadge";
import { ReviewStatusBadge } from "@/components/knowledge/ReviewStatusBadge";
import { getArticlePath, getGroupMeta } from "@/lib/content/knowledge";
import type { KnowledgeArticle } from "@/lib/schemas/knowledge";
import { cn } from "@/lib/cn";

export function ResultList({
  articles,
  columns = "auto",
}: {
  articles: KnowledgeArticle[];
  /** auto = 1 col mobile, 2 from lg when many items */
  columns?: "auto" | 1 | 2;
}) {
  if (!articles.length) {
    return (
      <div className="rounded-[13px] border border-dashed border-line bg-soft px-5 py-8 text-center text-sm text-muted">
        No matching articles. Try another keyword or clear filters.
      </div>
    );
  }

  const multi =
    columns === 2 || (columns === "auto" && articles.length > 6);

  return (
    <ul
      className={cn(
        "grid gap-3 sm:gap-4",
        multi ? "lg:grid-cols-2" : "grid-cols-1",
      )}
    >
      {articles.map((article) => (
        <li key={article.slug}>
          <Link
            href={getArticlePath(article)}
            className="group flex h-full flex-col rounded-[13px] border border-line bg-paper p-5 transition-colors hover:border-ink/25 hover:bg-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-muted">
                {getGroupMeta(article.group).label}
              </span>
              <ReviewStatusBadge status={article.reviewStatus} />
              <ContentKindBadge kind={article.kind} />
            </div>
            <h3 className="mt-3 text-lg font-bold tracking-tight text-ink group-hover:underline">
              {article.title}
            </h3>
            <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
              {article.summary}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-[0.1em] text-ink">
              Read
              <ArrowUpRight
                className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
