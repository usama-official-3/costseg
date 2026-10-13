import { knowledgeSamples } from "@/content/knowledge/samples";
import type { KnowledgeArticle, KnowledgeGroup } from "@/lib/schemas/knowledge";

const groupMeta: Record<
  KnowledgeGroup,
  { label: string; href: string; description: string }
> = {
  fundamentals: {
    label: "Fundamentals",
    href: "/knowledge/fundamentals",
    description: "Core cost segregation and depreciation concepts.",
  },
  "tax-law": {
    label: "Tax law & IRS",
    href: "/knowledge/tax-law",
    description: "Code, regulations, and IRS resource overviews.",
  },
  cases: {
    label: "Court cases",
    href: "/knowledge/cases",
    description: "Research shortlist and verified case templates.",
  },
  properties: {
    label: "Property guides",
    href: "/knowledge/properties",
    description: "Property-type educational guides.",
  },
  assets: {
    label: "Asset library",
    href: "/knowledge/assets",
    description: "Asset classification education notes.",
  },
  studies: {
    label: "Case studies",
    href: "/knowledge/studies",
    description: "Illustrative worked examples.",
  },
  resources: {
    label: "Resources",
    href: "/knowledge/resources",
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
  return knowledgeSamples;
}

export function getArticleBySlug(slug: string): KnowledgeArticle | undefined {
  return knowledgeSamples.find((article) => article.slug === slug);
}

export function getArticlesByGroup(group: KnowledgeGroup): KnowledgeArticle[] {
  return knowledgeSamples.filter((article) => article.group === group);
}

export function getRelatedArticles(article: KnowledgeArticle): KnowledgeArticle[] {
  return article.relatedSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((item): item is KnowledgeArticle => Boolean(item));
}

export function getArticlePath(article: KnowledgeArticle): string {
  return `/knowledge/${article.group}/${article.slug}`;
}
