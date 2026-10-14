import type { KnowledgeGroup } from "@/lib/schemas/knowledge";

/** Proposed canonical URL roots (Default A / docs/SITEMAP.md). */
export const groupRootPath: Record<KnowledgeGroup, string> = {
  fundamentals: "/learn",
  "tax-law": "/tax-law",
  cases: "/court-cases",
  properties: "/property-types",
  assets: "/asset-library",
  studies: "/case-studies",
  resources: "/resources",
};

export function getGroupRootPath(group: KnowledgeGroup): string {
  return groupRootPath[group];
}
