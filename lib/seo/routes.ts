import { pageInventory } from "@/content/inventory/pageRegistry";
import {
  getAllArticles,
  getArticlePath,
  isArticleIndexable,
  listGroups,
} from "@/lib/content/knowledge";

/**
 * Extra public routes beyond the client 187-URL catalog
 * (legal split pages + tools kept on the live site; calculator omitted).
 */
export const SITEMAP_EXTRA_PATHS = [
  "/legal/privacy",
  "/legal/terms",
  "/learn",
  "/tax-law",
  "/resources",
  "/tools",
  "/tools/questionnaire",
  "/tools/workflow-explorer",
] as const;

/** Deduped public paths for sitemap: full 187 catalog + site extras. */
export function getStaticPublicPaths(): string[] {
  const catalog = pageInventory.map((entry) => entry.path);
  const groupIndexes = listGroups().map((g) => g.href);
  const merged = new Set<string>([
    ...catalog,
    ...groupIndexes,
    ...SITEMAP_EXTRA_PATHS,
  ]);
  // Calculator must never enter the sitemap.
  merged.delete("/tools/calculator");
  return [...merged].sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });
}

/**
 * Knowledge article paths for sitemap.
 * Client override 2026-10-14: all hub articles are indexable.
 */
export function getKnowledgeArticlePaths(): string[] {
  return getAllArticles()
    .filter(isArticleIndexable)
    .map((article) => getArticlePath(article));
}

/** Unique URL list actually emitted by `app/sitemap.ts`. */
export function getSitemapPaths(): string[] {
  const paths = new Set<string>([
    ...getStaticPublicPaths(),
    ...getKnowledgeArticlePaths(),
  ]);
  paths.delete("/tools/calculator");
  return [...paths].sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });
}
