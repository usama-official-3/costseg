import Link from "next/link";
import { getArticlePath } from "@/lib/content/knowledge";
import type { KnowledgeArticle } from "@/lib/schemas/knowledge";

export function RelatedLinks({ articles }: { articles: KnowledgeArticle[] }) {
  if (!articles.length) return null;

  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Related research</h2>
      <ul className="mt-3 space-y-2">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link
              href={getArticlePath(article)}
              className="text-sm font-semibold text-ink underline-offset-2 hover:underline"
            >
              {article.title}
            </Link>
            <p className="text-xs text-muted">{article.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
