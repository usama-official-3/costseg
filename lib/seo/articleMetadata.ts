import type { Metadata } from "next";
import { getArticlePath, isArticleIndexable } from "@/lib/content/knowledge";
import type { KnowledgeArticle } from "@/lib/schemas/knowledge";

/**
 * Per-article metadata.
 * Client override 2026-10-14: Knowledge Hub pages are indexable for production
 * (`isArticleIndexable` always true). Calculator remains noindex separately.
 */
export function buildArticleMetadata(article: KnowledgeArticle): Metadata {
  const path = getArticlePath(article);
  const indexable = isArticleIndexable(article);

  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: path },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: path,
      type: "article",
      siteName: "CostSeg SI",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
    },
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}
