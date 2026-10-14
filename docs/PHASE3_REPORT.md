# Phase 3 Report — Knowledge templates + content model

**Date:** 2026-10-14  
**Status:** Implemented — awaiting **Approve Phase 4**

## Scope completed

Strengthened the research content model and article templates without inventing ~179 article bodies.

### Content model

| Addition | Location |
|---|---|
| Optional `lastReviewedAt`, `keyTakeaways`, `sections` | `lib/schemas/knowledge.ts` |
| Case fields: `decisionDate`, `facts`, `issue`, `holding`, `reasoning`, `relevance` | same |
| `contentKindLabels` for UI | same |
| Canonical **187-URL** path registry with statuses | `content/inventory/pageRegistry.ts` |
| Regenerator | `scripts/generate-page-registry.mjs` |

**Inventory counts (from SITEMAP):** live-route **16** · sample-draft **8** · planned **163**

### Template upgrades

| Component | Role |
|---|---|
| `ReviewGateBanner` | Draft / internal-review notice; hidden when reviewed/verified |
| `ContentKindBadge` | Content-type distinction per research standards |
| `EducationalDisclaimer` | Shared advice disclaimer on article bodies |
| `CaseMetaPanel` | Court-case record fields for Group D |
| `KeyTakeaways` | Optional educational bullets |
| `ArticleTemplate` / `ArticleHeader` / `ArticleBody` | Wired to new fields |
| `GroupIndex` + Knowledge Hub | Inventory scaffolding copy (planned vs samples) |

### Samples

- Optional `keyTakeaways` / `sections` on educational samples only
- Case sample keeps **pending verification** placeholders (no invented holding)
- Fixed related slug: `multifamily-acquisition` (was broken alias)
- All samples remain `draft` or `internal-review` → **not indexed** (Default B)

### Explicitly deferred (Phase 4+)

- Filling planned inventory pages with sourced copy (blocked on **OQ-02**, **OQ-04**)
- Promoting any article to `reviewed` / `verified`
- Design polish (Phase 5), live forms, automated QA, production deploy

## Verification

- [x] `npm run build` — pass (2026-10-14)
- [x] No new invented tax conclusions, citations, or savings claims
- [x] Draft samples still excluded from sitemap via `isArticleIndexable`

## Next

**Approve Phase 4?** (Content fill for approved/sourced articles only — requires OQ-02 / OQ-04 direction; otherwise skip to Phase 5 design polish)
