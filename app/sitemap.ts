import type { MetadataRoute } from "next";
import {
  getKnowledgeArticlePaths,
  getStaticPublicPaths,
} from "@/lib/seo/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://costseg.si";
  const now = new Date("2026-10-13T00:00:00.000Z");

  const staticEntries = getStaticPublicPaths().map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : path.startsWith("/knowledge") ? 0.7 : 0.8,
  }));

  const articleEntries = getKnowledgeArticlePaths().map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...articleEntries];
}
