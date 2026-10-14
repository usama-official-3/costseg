# Phase 8 Report — Staging preparation

**Date:** 2026-10-14  
**Status:** Complete documentation + local verify  
**Not authorized:** Production deploy to `costseg.si` (Phase 9 — separate Approve + OQ-13)

## Deliverables

| Item | Location |
|---|---|
| Staging runbook (updated paths) | `docs/STAGING_DEPLOY_NOTES.md` |
| SEO / QA prior reports | `PHASE6_SEO_REPORT.md`, `PHASE7_QA_REPORT.md` |
| Phase tracker | `docs/PHASE_TRACKER.md` |

## Staging readiness summary

| Topic | Status |
|---|---|
| App buildable (Next.js 16.4) | **Verified** — `npm run lint` + `npm run build` pass (2026-10-14) |
| Mock leads only | Until OQ-08 |
| Draft knowledge (171) noindex / off sitemap | Default B |
| Staging crawl guard | `COSTSEG_NOINDEX=1` or Vercel preview → robots disallow all |
| Calculator gated | robots + metadata noindex |
| Host / DNS / TLS | **Blocked on OQ-13** |

## Client review checklist (staging URL)

- [ ] Home hero + brand lockup  
- [ ] Nav: How It Works, Knowledge Hub, Property Types, About, Contact / Get Started  
- [ ] Knowledge Hub search + one article per group shows draft badges  
- [ ] Contact + Request a Study mock success  
- [ ] Tools: questionnaire + workflow explorer; calculator gated  
- [ ] `/sitemap.xml` and `/robots.txt`  
- [ ] Mobile bottom nav + no content covered  

## Explicit stop

**Do not treat this report as production approval.**  
Reply **Approve Phase 9** (or explicit “Approve production deploy”) only when OQ-13 access exists and you want go-live work.
