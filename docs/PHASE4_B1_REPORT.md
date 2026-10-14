# Phase 4 — Group B batch 1 report

**Date:** 2026-10-14  
**Canonical phase:** Phase 4 Content fill (populate) — see `PHASE_TRACKER.md`  
**Status:** Batch complete — awaiting **Approve Group B batch 2** (pages 09–16)

## Batch scope

Group B fundamentals `/learn/` pages **01–08** — full educational demo articles, all `reviewStatus: "draft"` (noindex / excluded from sitemap).

| # | Path | Status |
|---|---|---|
| 01 | `/learn/what-is-cost-segregation` | Draft demo (expanded) |
| 02 | `/learn/how-a-cost-segregation-study-works` | Draft demo (new) |
| 03 | `/learn/why-depreciation-matters` | Draft demo (new) |
| 04 | `/learn/cost-segregation-vs-standard-depreciation` | Draft demo (new) |
| 05 | `/learn/personal-property-vs-real-property` | Draft demo (new) |
| 06 | `/learn/land-building-and-site-improvements` | Draft demo (new) |
| 07 | `/learn/macrs-explained` | Draft demo (expanded) |
| 08 | `/learn/5-year-property-explained` | Draft demo (new) |

## Implementation notes

- Articles module: `content/knowledge/articles/fundamentals.ts`
- Loader: `content/knowledge/articles/index.ts` → `getAllArticles()`
- Inventory statuses updated to `sample-draft` for these eight paths
- No invented savings %, credentials, case holdings, or guaranteed outcomes
- Source labels remain “verify current official text” placeholders

## Remaining Group B

| Batch | Pages | Gate |
|---|---|---|
| B2 | 09–16 | **Approve Group B batch 2** |
| B3 | 17–25 | After B2 |

## Verification

- [x] No empty pages in this batch
- [x] All batch articles `draft`
- [x] Static generation includes all eight `/learn/...` routes (confirmed under `.next/server/app/learn/`)
- [~] `npm run build` compiles + generates pages, then may exit `1` on Windows `kill EPERM` during finalize (known flake; pages still emitted)

## Phase numbering sync (this batch)

- Single tracker: `docs/PHASE_TRACKER.md` (Phases 0–9)
- `AUDIT_AND_ROADMAP.md` §11–13 and `IMPLEMENTATION_PLAN.md` realigned
- Chat **Phase 4** = content fill / populate (no parallel “audit Phase 4 vs plan Phase 7” wording in active trackers)

## Next

**Approve Group B batch 2?** (SITEMAP `/learn/` 09–16)
