import type {
  ContentKind,
  KnowledgeArticle,
  KnowledgeGroup,
} from "@/lib/schemas/knowledge";

type DraftArticleInput = {
  slug: string;
  title: string;
  summary: string;
  group: KnowledgeGroup;
  category: string;
  kind?: ContentKind;
  body: string[];
  keyTakeaways?: string[];
  sections?: KnowledgeArticle["sections"];
  sources?: KnowledgeArticle["sources"];
  relatedSlugs?: string[];
  assumptions?: string[];
  court?: string;
  citation?: string;
  decisionDate?: string;
  facts?: string;
  issue?: string;
  holding?: string;
  reasoning?: string;
  relevance?: string;
  verificationNote?: string;
  reviewStatus?: KnowledgeArticle["reviewStatus"];
};

const DEMO_DATE = "2026-10-14";

/**
 * Knowledge Hub articles.
 * Client override 2026-10-14: default `reviewed` so pages are indexable for production.
 */
export function draftArticle(input: DraftArticleInput): KnowledgeArticle {
  return {
    kind: "company-education",
    publishedAt: DEMO_DATE,
    updatedAt: DEMO_DATE,
    reviewStatus: "reviewed",
    sources: [],
    relatedSlugs: [],
    ...input,
  };
}
