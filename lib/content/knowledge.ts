import { allKnowledgeArticles } from "@/content/knowledge/articles";
import { getGroupRootPath } from "@/lib/content/groupRoots";
import type { KnowledgeArticle, KnowledgeGroup } from "@/lib/schemas/knowledge";

const groupMeta: Record<
  KnowledgeGroup,
  { label: string; href: string; description: string }
> = {
  fundamentals: {
    label: "Fundamentals",
    href: "/learn",
    description: "Core cost segregation and depreciation concepts.",
  },
  "tax-law": {
    label: "Tax law & IRS",
    href: "/tax-law",
    description: "Code, regulations, and IRS resource overviews.",
  },
  cases: {
    label: "Court cases",
    href: "/court-cases",
    description: "Research shortlist and verified case templates.",
  },
  properties: {
    label: "Property guides",
    href: "/property-types",
    description: "Property-type educational guides.",
  },
  assets: {
    label: "Asset library",
    href: "/asset-library",
    description: "Asset classification education notes.",
  },
  studies: {
    label: "Case studies",
    href: "/case-studies",
    description: "Illustrative worked examples.",
  },
  resources: {
    label: "Resources",
    href: "/resources",
    description: "Indexes, glossaries, and disclaimers.",
  },
};

export function getGroupMeta(group: KnowledgeGroup) {
  return groupMeta[group];
}

export function listGroups() {
  return Object.entries(groupMeta).map(([group, meta]) => ({
    group: group as KnowledgeGroup,
    ...meta,
  }));
}

export function getAllArticles(): KnowledgeArticle[] {
  return allKnowledgeArticles;
}

export function getArticleBySlug(slug: string): KnowledgeArticle | undefined {
  return allKnowledgeArticles.find((article) => article.slug === slug);
}

export function getArticlesByGroup(group: KnowledgeGroup): KnowledgeArticle[] {
  return allKnowledgeArticles.filter((article) => article.group === group);
}

export function getRelatedArticles(article: KnowledgeArticle): KnowledgeArticle[] {
  return article.relatedSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((item): item is KnowledgeArticle => Boolean(item));
}

export function getArticlePath(article: KnowledgeArticle): string {
  return `${getGroupRootPath(article.group)}/${article.slug}`;
}

/**
 * Indexability gate for sitemap + article robots metadata.
 *
 * Original Default B: only `reviewed` | `verified`.
 * **Client override 2026-10-14:** index all Knowledge Hub articles for production.
 * Calculator remains excluded via routes / robots (not this helper).
 */
export function isArticleIndexable(_article: KnowledgeArticle): boolean {
  return true;
}
