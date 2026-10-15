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
        "grid gap-3.5 sm:gap-4",
        multi ? "lg:grid-cols-2" : "grid-cols-1",
      )}
    >
      {articles.map((article) => (
        <li key={article.slug}>
          <Link
            href={getArticlePath(article)}
            className={cn(
              "group relative flex h-full flex-col overflow-hidden rounded-[13px]",
              "border border-line bg-paper p-5 sm:p-6",
              "shadow-[0_1px_0_rgba(23,25,27,0.04)]",
              "transition-[border-color,box-shadow,transform,background-color] duration-300 ease-out",
              "hover:-translate-y-0.5 hover:border-ink/15 hover:bg-soft",
              "hover:shadow-[0_12px_28px_rgba(23,25,27,0.08)]",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime",
            )}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-12 size-32 rounded-full bg-[radial-gradient(circle,rgba(214,255,67,0.14)_0%,transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />

            <div className="relative flex items-start justify-between gap-3">
              <div className="flex min-w-0 flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-[#f0f4df] px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink">
                  {getGroupMeta(article.group).label}
                </span>
                <ReviewStatusBadge status={article.reviewStatus} />
              </div>
              <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-muted transition-[border-color,background-color,color,transform] duration-300 group-hover:border-ink/20 group-hover:bg-ink group-hover:text-lime group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="size-3.5" aria-hidden />
              </span>
            </div>

            <div className="relative mt-3">
              <ContentKindBadge kind={article.kind} />
            </div>

            <h3 className="relative mt-4 text-lg font-bold tracking-tight text-ink sm:text-[1.125rem]">
              {article.title}
            </h3>
            <p className="relative mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
              {article.summary}
            </p>

            <div className="relative mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
              <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-ink transition-colors duration-300 group-hover:text-ink">
                Read article
              </span>
              <span className="text-xs font-semibold text-muted transition-colors duration-300 group-hover:text-ink">
                Open
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
