import { isArticleIndexable } from "@/lib/content/knowledge";
import { getArticlePath } from "@/lib/content/knowledge";
import type { KnowledgeArticle } from "@/lib/schemas/knowledge";

const SITE = "https://costseg.si";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CostSeg SI",
    url: SITE,
    logo: `${SITE}/brand/costseg-si-lockup-on-dark.png`,
    description:
      "Cost segregation studies accelerated by Super Intelligence. Technology-led property cost analysis supporting professional review.",
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CostSeg SI",
    url: SITE,
    publisher: {
      "@type": "Organization",
      name: "CostSeg SI",
    },
  };
}

/** Only emit Article schema when Default B indexability is met. */
export function articleJsonLd(article: KnowledgeArticle) {
  if (!isArticleIndexable(article)) {
    return null;
  }

  const path = getArticlePath(article);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Organization",
      name: "CostSeg SI",
    },
    publisher: {
      "@type": "Organization",
      name: "CostSeg SI",
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/brand/costseg-si-lockup-on-dark.png`,
      },
    },
    mainEntityOfPage: `${SITE}${path}`,
    isAccessibleForFree: true,
  };
}
