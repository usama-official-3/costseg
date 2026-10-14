import type { Metadata } from "next";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  follow?: boolean;
};

/**
 * Shared page metadata: canonical + Open Graph url aligned to Default A paths.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  index = true,
  follow = true,
}: PageMetadataInput): Metadata {
  const canonical = path === "/" ? "/" : path;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "CostSeg SI",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index, follow },
  };
}
