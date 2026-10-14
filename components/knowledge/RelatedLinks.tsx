import Link from "next/link";
import { getArticlePath } from "@/lib/content/knowledge";
import type { KnowledgeArticle } from "@/lib/schemas/knowledge";

export function RelatedLinks({ articles }: { articles: KnowledgeArticle[] }) {
  if (!articles.length) return null;

  return (
    <div className="rounded-[13px] border border-line bg-paper p-5">
      <h2 className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-muted">
        Related research
      </h2>
      <ul className="mt-4 divide-y divide-line">
        {articles.map((article) => (
          <li key={article.slug} className="py-3 first:pt-0 last:pb-0">
            <Link
              href={getArticlePath(article)}
              className="text-sm font-semibold text-ink underline-offset-2 hover:underline"
            >
              {article.title}
            </Link>
            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
              {article.summary}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
