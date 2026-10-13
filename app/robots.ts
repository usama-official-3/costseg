import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
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
