# Phase 7 Report — QA

**Date:** 2026-10-14  
**Status:** Complete (continued into Phase 8 per owner)

## Hardening in this phase

| Area | Change |
|---|---|
| a11y | SiteHeader: close drawer on route change; backdrop delay without sync setState-in-effect |
| lint | `npm run lint` clean after SiteHeader fix |
| a11y | Skip link, focus-visible, bottom-nav labels + `aria-current` retained |
| UX | 404 primary recovery → `/request-a-study` |
| Motion | `cs-reveal` still gated by `prefers-reduced-motion` |
| Content integrity | Draft badges + review gate banners; cases remain shortlist stubs |
| Docs | QA phase mapping note: automated Playwright still optional (not installed) |

## Manual acceptance matrix (owner / staging)

| Check | Owner |
|---|---|
| 320–390px: no horizontal scroll Home / Hub / Contact / Request | Pending device |
| Bottom nav hidden ≥1024px; does not cover form submit | Implemented; confirm on device |
| Keyboard: skip link → main; tab header + bottom nav | Pending manual |
| Forms: validation + mock success Contact / Request / Questionnaire | Implemented |
| Draft articles show review gate + noindex | Implemented |
| Calculator remains gated + noindex + robots disallow | Implemented |

## Not in scope here

- Installing Playwright / CI e2e (optional follow-up)  
- Production deploy  
- Live lead destination (OQ-08)
