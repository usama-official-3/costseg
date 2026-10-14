import type { NextConfig } from "next";

/**
 * Default A — proposed URLs are canonical; current paths 301.
 * Phase 1: Group A + knowledge-hub + legal
 * Phase 2: Knowledge group trees + sample slug renames
 */
const permanentRedirects = [
  // Group A / legal / hub (Phase 1)
  { source: "/how-it-works", destination: "/how-cost-segregation-works" },
  { source: "/workflow", destination: "/technology/ai-agent-workflow" },
  { source: "/request-study", destination: "/request-a-study" },
  { source: "/knowledge", destination: "/knowledge-hub" },
  { source: "/privacy", destination: "/legal/privacy" },
  { source: "/terms", destination: "/legal/terms" },

  // Knowledge group indexes (Phase 2)
  { source: "/knowledge/fundamentals", destination: "/learn" },
  { source: "/knowledge/tax-law", destination: "/tax-law" },
  { source: "/knowledge/cases", destination: "/court-cases" },
  { source: "/knowledge/properties", destination: "/property-types" },
  { source: "/knowledge/assets", destination: "/asset-library" },
  { source: "/knowledge/studies", destination: "/case-studies" },
  { source: "/knowledge/resources", destination: "/resources" },

  // Sample articles — renamed slugs
  {
    source: "/knowledge/fundamentals/what-is-cost-segregation",
    destination: "/learn/what-is-cost-segregation",
  },
  {
    source: "/knowledge/fundamentals/macrs-explained",
    destination: "/learn/macrs-explained",
  },
  {
    source: "/knowledge/tax-law/irc-168-macrs-overview",
    destination: "/tax-law/section-168-macrs",
  },
  {
    source: "/knowledge/cases/hospital-corporation-of-america-shortlist",
    destination: "/court-cases/hospital-corporation-of-america-v-commissioner",
  },
  {
    source: "/knowledge/properties/multifamily-apartment-buildings",
    destination: "/property-types/multifamily-apartment-buildings",
  },
  {
    source: "/knowledge/assets/specialized-electrical-systems",
    destination: "/asset-library/specialized-electrical-systems",
  },
  {
    source: "/knowledge/studies/illustrative-multifamily-acquisition",
    destination: "/case-studies/multifamily-acquisition",
  },
  {
    source: "/knowledge/resources/research-library-disclaimer",
    destination: "/resources/research-library-disclaimer",
  },

  // Catch-all for remaining old group article URLs (same slug)
  {
    source: "/knowledge/fundamentals/:slug",
    destination: "/learn/:slug",
  },
  { source: "/knowledge/tax-law/:slug", destination: "/tax-law/:slug" },
  { source: "/knowledge/cases/:slug", destination: "/court-cases/:slug" },
  {
    source: "/knowledge/properties/:slug",
    destination: "/property-types/:slug",
  },
  { source: "/knowledge/assets/:slug", destination: "/asset-library/:slug" },
  { source: "/knowledge/studies/:slug", destination: "/case-studies/:slug" },
  { source: "/knowledge/resources/:slug", destination: "/resources/:slug" },
] as const;

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return permanentRedirects.map((rule) => ({
      source: rule.source,
      destination: rule.destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
