import type { MetadataRoute } from "next";
import { getSitemapPaths } from "@/lib/seo/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://costseg.si";
  const now = new Date("2026-10-14T00:00:00.000Z");
  const paths = getSitemapPaths();

  return paths.map((path) => {
    const isHome = path === "/";
    const isKnowledge =
      path.startsWith("/learn") ||
      path.startsWith("/tax-law") ||
      path.startsWith("/court-cases") ||
      path.startsWith("/asset-library") ||
      path.startsWith("/case-studies") ||
      path.startsWith("/resources") ||
      path.startsWith("/property-types/") ||
      path === "/knowledge-hub" ||
      path === "/property-types";

    return {
      url: `${base}${isHome ? "" : path}`,
      lastModified: now,
      changeFrequency: isKnowledge ? ("monthly" as const) : ("weekly" as const),
      priority: isHome ? 1 : isKnowledge ? 0.7 : 0.8,
    };
  });
}
