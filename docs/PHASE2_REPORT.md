# Phase 2 Report — Route tree alignment

**Date:** 2026-10-14  
**Status:** Implemented — awaiting **Approve Phase 3**

## Scope completed

Aligned Knowledge Hub URL trees to proposed paths (Default A) and migrated the 8 sample articles.

### New canonical hubs

| Group | Index | Sample article(s) |
|---|---|---|
| Fundamentals | `/learn` | `/learn/what-is-cost-segregation`, `/learn/macrs-explained` |
| Tax law | `/tax-law` | `/tax-law/section-168-macrs` |
| Court cases | `/court-cases` | `/court-cases/hospital-corporation-of-america-v-commissioner` |
| Property guides | `/property-types` (marketing + guides) | `/property-types/multifamily-apartment-buildings` |
| Asset library | `/asset-library` | `/asset-library/specialized-electrical-systems` |
| Case studies | `/case-studies` | `/case-studies/multifamily-acquisition` |
| Resources | `/resources` | `/resources/research-library-disclaimer` |

### Supporting work

- `getArticlePath` / `groupMeta` use proposed roots (`lib/content/groupRoots.ts`)
- Shared route factory: `lib/content/createGroupPages.tsx`
- Sample slug renames per `docs/URL_RECONCILIATION.md`
- 301 redirects from `/knowledge/...` trees + renamed sample URLs
- Removed legacy `app/knowledge/*` route tree
- Sitemap static paths updated; drafts remain excluded (Default B)
- `npm run build` — **pass**

### Explicitly deferred (Phase 3+)

- Full 187 inventory population
- Richer research templates (TOC, design polish)
- Inventing article bodies

## Next

**Approve Phase 3?** (Knowledge templates / content model refinements per audit roadmap)
