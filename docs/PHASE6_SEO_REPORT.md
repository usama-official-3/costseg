# Phase 6 Report — SEO check

**Date:** 2026-10-14  
**Status:** Complete (continued into Phase 7–8 per owner)

## Checks performed / fixes

| Item | Result |
|---|---|
| Root `metadataBase` = `https://costseg.si` | OK |
| No global canonical forced to `/` | OK (Phase 1) |
| Marketing pages have unique title + description + **canonical** | Fixed gaps via `buildPageMetadata` |
| Article metadata: OG + Twitter + canonical; drafts `noindex` | OK / extended |
| Sitemap: static public paths only; drafts excluded (Default B) | **Superseded 2026-10-14** — client override indexes all hub articles (see `PHASE_TRACKER.md`) |
| Robots: allow `/`, disallow calculator; staging noindex via `COSTSEG_NOINDEX=1` or Vercel preview | Added |
| Organization + WebSite JSON-LD | Added in root layout |
| Article JSON-LD | Only when `reviewed` \| `verified` (none yet) |
| Redirect map Default A | Retained in `next.config.ts` |

## Known limitations (non-blocking)

- OG image still uses lockup PNG (not dedicated 1200×630 art) — client asset pending  
- Full Lighthouse scores deferred to live staging host (OQ-13)

## Files

- `lib/seo/pageMetadata.ts`, `lib/seo/structuredData.ts`
- `components/seo/JsonLd.tsx`
- `app/robots.ts` (env-aware)
- Canonicals on about, contact, services, technology, who-we-help, faqs, tools*, knowledge-hub
