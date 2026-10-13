/**
 * Marketing imagery registry.
 * Replace hero.jpg with client-licensed photography when available.
 */
export const siteImages = {
  hero: {
    src: "/images/hero.jpg",
    alt: "Modern commercial glass building at dusk",
    isPlaceholder: false,
    width: 1536,
    height: 2048,
    sizes: "(max-width: 1023px) 100vw, 50vw",
  },
  audienceAccent: {
    src: null as string | null,
    alt: "Property atmosphere",
    width: 1600,
    height: 1200,
    sizes: "(max-width: 768px) 100vw, 40vw",
  },
  ogDefault: {
    src: "/brand/costseg-si-lockup-on-dark.png" as string,
    alt: "CostSeg SI",
    width: 1200,
    height: 630,
  },
} as const;
