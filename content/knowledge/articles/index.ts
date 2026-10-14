import { assetsArticles } from "@/content/knowledge/articles/assets";
import { casesArticles } from "@/content/knowledge/articles/cases";
import { fundamentalsArticles } from "@/content/knowledge/articles/fundamentals";
import { fundamentalsBatch3Articles } from "@/content/knowledge/articles/fundamentalsBatch3";
import { propertiesArticles } from "@/content/knowledge/articles/properties";
import { resourcesArticles } from "@/content/knowledge/articles/resources";
import { studiesArticles } from "@/content/knowledge/articles/studies";
import { taxLawArticles } from "@/content/knowledge/articles/taxLaw";
import type { KnowledgeArticle } from "@/lib/schemas/knowledge";

/**
 * Full Phase 4 Knowledge Hub article set (Groups B–H draft demos).
 * Index routes (/court-cases, /asset-library, etc.) remain separate pages.
 */
export const allKnowledgeArticles: KnowledgeArticle[] = [
  ...fundamentalsArticles,
  ...fundamentalsBatch3Articles,
  ...taxLawArticles,
  ...casesArticles,
  ...propertiesArticles,
  ...assetsArticles,
  ...studiesArticles,
  ...resourcesArticles,
];
