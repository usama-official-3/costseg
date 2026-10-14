# Phase 5 Report — Design polish

**Date:** 2026-10-14  
**Canonical phase:** Phase 5 — Design polish  
**Status:** Complete — awaiting **Approve Phase 6** (SEO check)

## Scope

Responsive / visual pass extending homepage polish into **Knowledge Hub chrome** and aligning secondary marketing closes — without inventing new brand claims or photography.

## What changed

| Area | Change |
|---|---|
| Article template | Soft header band, sticky sidebar CTA, ink CtaBand close, clearer source separator |
| Article header / body | Tighter display type, reading rhythm, stronger section headings |
| Key takeaways | Lime left-edge accent panel |
| Related links | Bordered panel, divided list, clamped summaries |
| Result lists | Full-card hover links, kind + review badges, 2-column grids for long groups |
| Group indexes | Updated post–Phase 4 copy, page counts, ink CTA |
| Knowledge Hub | Group cards with counts + arrows; search copy fixed; inventory noise removed |
| Search panel | Updated counts (full draft library, not “Phase 6 seed”) |
| CtaBand | Optional `tone="ink"`; default CTA → `/request-a-study` |
| Marketing closes | Home, services, how-it-works, technology, about, who-we-help, FAQs, property-types, workflow → ink CTA |
| Hero default CTA | `/request-a-study` |
| Breadcrumbs | Chevron separators, last-crumb clamp |

## Preserved

- Brand tokens, official logos, bottom-nav clearance  
- Draft / noindex policy (Default B)  
- `prefers-reduced-motion` for `cs-reveal`  
- No invented stats, testimonials, or savings claims  

## Verification

- [x] Knowledge lists readable with 20+ articles per group (2-col)  
- [x] Article sidebar usable on desktop; stacks on mobile  
- [x] Primary Get Started paths point to `/request-a-study`  
- [x] `npx tsc --noEmit` — pass  
- [x] `npm run build` — pass (208 routes)  

## Explicitly next (do not skip)

| Phase | Name |
|---|---|
| **6** | SEO check |
| **7** | QA |
| **8** | Staging |
| **9** | Production approve (separate) |

## Next gate

**Approve Phase 6?** (SEO check)
