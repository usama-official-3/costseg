import type { KnowledgeArticle, KnowledgeGroup } from "@/lib/schemas/knowledge";

export type KnowledgeSearchFilters = {
  query: string;
  group: KnowledgeGroup | "all";
  kind: KnowledgeArticle["kind"] | "all";
};

export function filterKnowledgeArticles(
  articles: KnowledgeArticle[],
  filters: KnowledgeSearchFilters,
): KnowledgeArticle[] {
  const q = filters.query.trim().toLowerCase();

  return articles.filter((article) => {
    if (filters.group !== "all" && article.group !== filters.group) return false;
    if (filters.kind !== "all" && article.kind !== filters.kind) return false;
    if (!q) return true;

    const haystack = [
      article.title,
      article.summary,
      article.category,
      article.kind,
      article.citation ?? "",
      article.court ?? "",
      ...article.body,
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(q);
  });
}
