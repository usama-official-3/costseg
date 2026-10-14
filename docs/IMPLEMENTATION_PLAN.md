# IMPLEMENTATION_PLAN — CostSeg SI

## Phase gates

Each phase ends with a concise report and waits for explicit **Approve** or **Changes**.  
**Canonical numbering:** `docs/PHASE_TRACKER.md` (Phases 0–9).

Production deploy is a **separate** approval after Phase 9 staging.

| Phase | Name | Status | Deliverables |
|---|---|---|---|
| 0 | Plan / intake | **Done** | Understanding of DOCX/HTML/logos; briefs |
| 1 | URL + SEO foundation | **Done** | Canonicals, redirects, Default A/B |
| 2 | Route hubs aligned | **Done** | Proposed Group A + hub roots |
| 3 | Inventory + templates | **Done** | 187 registry, knowledge model, ArticleTemplate |
| 4 | Content fill (populate) | **Done** | 171 draft demo articles Groups B–H — `PHASE4_REPORT.md` |
| 5 | Design polish | **Done** | `PHASE5_REPORT.md` |
| 6 | SEO check | **Done** | `PHASE6_SEO_REPORT.md` |
| 7 | QA | **Done** | `PHASE7_QA_REPORT.md` |
| 8 | Staging | **Done** | `PHASE8_STAGING_REPORT.md` |
| 9 | Production approve | **Pending** | Separate explicit approval (OQ-13) |

## Phase 4 exit criteria

- [x] Every planned SITEMAP knowledge **article** URL has a full draft demo (no empty pages)
- [x] Articles remain `draft` (or `internal-review`) → noindex / excluded from sitemap
- [x] Groups B–H complete — `PHASE4_REPORT.md`
- [x] `npm run build` pass (208 routes generated)
- [x] Owner approval → Phase 5 design polish

## Phase 5–8 exit criteria

- [x] Phase 5 — Design polish (`PHASE5_REPORT.md`)
- [x] Phase 6 — SEO check (`PHASE6_SEO_REPORT.md`)
- [x] Phase 7 — QA (`PHASE7_QA_REPORT.md`)
- [x] Phase 8 — Staging prep (`PHASE8_STAGING_REPORT.md`)
- [x] Final `npm run lint` + `npm run build` after Phase 8

## Phase 9 exit criteria

- [ ] Separate explicit production Approve
- [ ] OQ-13 VPS/DNS/SSL access
- [ ] Deploy + HTTPS verification on `costseg.si`
