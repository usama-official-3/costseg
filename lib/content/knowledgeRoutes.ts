import { notFound } from "next/navigation";
import {
  getArticleBySlug,
  getArticlesByGroup,
} from "@/lib/content/knowledge";
import type { KnowledgeGroup } from "@/lib/schemas/knowledge";

export function getStaticSlugParams(group: KnowledgeGroup) {
  return getArticlesByGroup(group).map((article) => ({ slug: article.slug }));
}

export function getArticleForGroupOr404(group: KnowledgeGroup, slug: string) {
  const article = getArticleBySlug(slug);
  if (!article || article.group !== group) notFound();
  return article;
}
