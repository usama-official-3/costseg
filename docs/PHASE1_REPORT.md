# Phase 1 Report — URL + SEO foundation

**Date:** 2026-10-14  
**Status:** Implemented — awaiting owner review / Approve Phase 2

## Decisions locked in this phase

| Topic | Decision |
|---|---|
| Default A | Proposed URLs canonical; 301 from current paths |
| Default B | Sitemap + index only `reviewed` \| `verified` articles (samples remain `draft` → excluded + `noindex`) |
| Legal shape | `/legal` hub + `/legal/privacy` + `/legal/terms`; 301 `/privacy` and `/terms` |
| Tools nav | Removed from primary (6-item client tree); kept in footer + mobile bottom nav |
| Primary CTA | “Get Started” → `/request-a-study` |

## Changes

1. Removed global `alternates.canonical: "/"` from `app/layout.tsx` (home keeps self-canonical).
2. New Group A / hub routes: `/how-cost-segregation-works`, `/technology/ai-agent-workflow`, `/request-a-study`, `/legal/*`, `/knowledge-hub`.
3. Permanent redirects in `next.config.ts` for superseded paths.
4. Nav, footer, and key internal links updated to proposed paths.
5. Sitemap static paths updated; article entries filtered via `isArticleIndexable`.
6. Draft knowledge articles emit `robots: noindex` via `buildArticleMetadata`.
7. Obsolete page folders removed (`how-it-works`, `workflow`, `request-study`, `privacy`, `terms`, `knowledge/page.tsx`).

## Explicitly deferred (later phases)

- Full B–H trees (`/learn`, `/tax-law`, `/court-cases`, …) and sample slug 301s to those trees
- Inventing ~179 article bodies
- SI backend, live leads, production deploy

## Acceptance checklist

- [x] No global site-wide canonical forced to `/`
- [x] Old Group A URLs configured for 301 → proposed
- [x] Primary nav uses proposed paths (Tools not in top nav)
- [x] Draft knowledge excluded from sitemap (0 draft articles qualify)
- [x] Calculator still omitted from sitemap / disallowed in robots
- [x] `npm run build` — pass (2026-10-14)
- [~] `npm run lint` — fails on **pre-existing** `SiteHeader.tsx` setState-in-effect rules (not introduced by Phase 1); defer fix to QA unless you want it in Phase 2

## Next

Ask: **Approve Phase 2?** (route tree alignment / remaining hub URL trees per `docs/AUDIT_AND_ROADMAP.md`)
