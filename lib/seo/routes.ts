import { getAllArticles, getArticlePath } from "@/lib/content/knowledge";

/** Public marketing + tools + knowledge index routes for sitemap. */
export function getStaticPublicPaths(): string[] {
  return [
    "/",
    "/how-it-works",
    "/services",
    "/technology",
    "/workflow",
    "/who-we-help",
    "/property-types",
    "/about",
    "/faqs",
    "/contact",
    "/request-study",
    "/privacy",
    "/terms",
    "/knowledge",
    "/knowledge/fundamentals",
    "/knowledge/tax-law",
    "/knowledge/cases",
    "/knowledge/properties",
    "/knowledge/assets",
    "/knowledge/studies",
    "/knowledge/resources",
    "/tools",
    "/tools/questionnaire",
    "/tools/workflow-explorer",
    // calculator intentionally omitted (gated / noindex)
  ];
}

export function getKnowledgeArticlePaths(): string[] {
  return getAllArticles().map((article) => getArticlePath(article));
}
