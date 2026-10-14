import type { MetadataRoute } from "next";

/**
 * Production robots allow public marketing routes.
 * Staging / preview: set COSTSEG_NOINDEX=1 (or rely on Vercel preview detection)
 * so draft hubs are not crawled before production approval.
 */
export default function robots(): MetadataRoute.Robots {
  const noindex =
    process.env.COSTSEG_NOINDEX === "1" ||
    process.env.VERCEL_ENV === "preview";

  if (noindex) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
      sitemap: "https://costseg.si/sitemap.xml",
      host: "https://costseg.si",
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/tools/calculator"],
      },
    ],
    sitemap: "https://costseg.si/sitemap.xml",
    host: "https://costseg.si",
  };
}
