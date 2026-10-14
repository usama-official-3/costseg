# Phase tracker — CostSeg SI (single numbering)

**Canonical chat + audit numbering.** Do not invent a second parallel sequence.

| Phase | Name | Status | Notes |
|---|---|---|---|
| **0** | Plan / intake | **Done** | Briefs, docs package, brand sources |
| **1** | URL + SEO foundation | **Done** | `PHASE1_REPORT.md` |
| **2** | Route hubs aligned | **Done** | `PHASE2_REPORT.md` |
| **3** | Inventory + templates | **Done** | `PHASE3_REPORT.md` |
| **4** | Content fill (populate) | **Done** | `PHASE4_REPORT.md` — 171 drafts |
| **5** | Design polish | **Done** | `PHASE5_REPORT.md` |
| **6** | SEO check | **Done** | `PHASE6_SEO_REPORT.md` |
| **7** | QA | **Done** | `PHASE7_QA_REPORT.md` |
| **8** | Staging | **Done** | `PHASE8_STAGING_REPORT.md` + `STAGING_DEPLOY_NOTES.md` |
| **9** | Production approve | **Pending** | **Separate** explicit approval; blocked on OQ-13 |

## Continuous run note (2026-10-14)

Owner approved Phases 6→7→8 without per-phase builds. Final `lint` + `build` after Phase 8 only. No production deploy in this run.

## Default B override (2026-10-14)

**Client approved:** index all Knowledge Hub pages for production.

| Policy | Now |
|---|---|
| Knowledge articles | Indexable (`isArticleIndexable` → true; `reviewStatus` default `reviewed`) |
| Sitemap | Client **187** catalog paths + legal/privacy, legal/terms, hub indexes extras, tools (not calculator) |
| Calculator | Still **noindex** + robots disallow |
| Robots | Allow `/` unless `COSTSEG_NOINDEX=1` (or Vercel preview) |
| Phase 9 | Still **separate** — no production deploy without explicit Approve |
