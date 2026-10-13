# Phase 9 — Staging Preparation & Client Review Report

**Date:** 2026-10-13  
**Product:** CostSeg SI (`costseg.si`)  
**Scope:** Staging readiness + client handoff for review. **Production deploy is not included.**

---

## Executive summary

Phases 0–8 delivered a frontend-first Next.js site: marketing (Group A), knowledge-hub templates with sample articles, tools UI (questionnaire + SI workflow explorer + gated calculator), SEO basics, and QA hardening. Production build verifies cleanly (`npm run lint` + `npm run build`, `VERIFY_EXIT=0`).

**Staging can proceed** once host/DNS access is provided (OQ-13). **Live production** still needs a separate explicit approval plus resolution of lead destination, legal/content review, and deploy access.

---

## What was built (review inventory)

### Marketing — Group A

| Route | Purpose |
|---|---|
| `/` | Homepage (hero, trust, services, SI band, audiences, FAQs, CTA) |
| `/how-it-works` | Process overview |
| `/services` | Services |
| `/technology` | Super Intelligence positioning (soft / planned language) |
| `/workflow` | Workflow marketing page |
| `/who-we-help` | Audiences |
| `/property-types` | Property types |
| `/about` | About |
| `/faqs` | FAQs |
| `/contact` | Contact form (RHF + Zod, honeypot, **mock** submit) |
| `/request-study` | Study request form (**mock** submit) |
| `/privacy`, `/terms` | Placeholder legal pages with disclaimer framing |

### Knowledge hub (hybrid — templates + samples, not full ~187 pages)

| Area | Routes |
|---|---|
| Hub + indexes | `/knowledge`, `/knowledge/{fundamentals,tax-law,cases,properties,assets,studies,resources}` |
| Sample articles | Dynamic `/knowledge/{group}/[slug]` — **8 seed articles**, all labeled with review status |
| UX | Client search/filter, review badges, sources, related links, disclaimers |

### Tools

| Route | Status |
|---|---|
| `/tools` | Hub listing |
| `/tools/questionnaire` | Multi-step property questionnaire + mock submit |
| `/tools/workflow-explorer` | Interactive SI workflow stages + illustrative preview (no fake savings %) |
| `/tools/calculator` | **Gated** — no invented engine; disallowed in `robots.txt` |

### Shell & brand

- Site shell: skip link, header, footer, mobile bottom nav (Home / Research / Tools / Contact)
- Official PNG logo pack in `public/brand/`
- Tokens: ink `#17191B`, lime `#D6FF43`, Inter, Lucide
- Branded loaders / skeletons; branded 404

### SEO / ops hygiene (Phase 8)

- `app/sitemap.ts`, `app/robots.ts`
- Root OG/Twitter/canonical/viewport metadata
- Overflow-x guards; improved touch targets

---

## Verification status

| Check | Result |
|---|---|
| `npm run lint` | Passed (Phase 8) |
| `npm run build` | Passed — `VERIFY_EXIT=0` (re-run 2026-10-13); includes `/sitemap.xml`, `/robots.txt` |
| Local Node | v22.11.0 (meets Next.js 16 requirement ≥20.9) |
| Lockfile | `package-lock.json` present |
| Playwright / Lighthouse on live staging URL | **Pending** — requires staging host (see `STAGING_DEPLOY_NOTES.md`) |

Staging deploy procedure and post-deploy smoke list: **`docs/STAGING_DEPLOY_NOTES.md`**.

---

## Client review checklist

Use this while walking the staging (or local `npm run build && npm start`) site.

### Brand & first impression
- [ ] Logo lockups read correctly on dark/light sections
- [ ] “CostSeg SI” / Super Intelligence wording feels accurate (not over-claiming)
- [ ] No invented testimonials, savings percentages, or guaranteed outcomes

### Conversion paths
- [ ] Primary CTA → Contact works on desktop and mobile
- [ ] Request Study path is clear
- [ ] Form validation messages are clear; success state is acceptable as **mock** until OQ-08

### Knowledge hub
- [ ] Sample articles clearly show draft / review status
- [ ] Disclaimers present; educational tone OK for soft launch
- [ ] Search/filter usable on phone

### Tools
- [ ] Questionnaire completable
- [ ] Workflow explorer understandable for prospects
- [ ] Calculator gate acceptable until tax-reviewed math exists

### Legal / trust
- [ ] Privacy & Terms placeholders acceptable interim, or flag for counsel rewrite (OQ-09)
- [ ] Footer copyright / contact paths OK

### Mobile
- [ ] Bottom nav destinations correct (or request change — OQ-14)
- [ ] No horizontal scroll; forms not covered by bottom nav

---

## Open decisions (blocking vs soft)

| ID | Topic | Blocks |
|---|---|---|
| OQ-08 | Lead form destination / recipients | Live lead capture |
| OQ-13 | VPS access, DNS, SSL | Actual staging/prod host |
| OQ-04 / OQ-09 | Tax/legal reviewers for research + legal pages | Authoritative publish |
| OQ-01 / OQ-02 | Hub scale + content authorship | Full ~187-page expansion |
| OQ-07 | Proof points / testimonials | Trust section expansion |
| OQ-12 | Analytics + consent | Tracking |
| OQ-11 | SVG logo masters | Soft (PNGs in use) |
| OQ-15 | SI marketing wording finalize | Soft polish |

Full list: `docs/OPEN_QUESTIONS.md`.

---

## Known limitations (honest handoff)

1. **Lead submit is mocked** — no email/CRM until OQ-08.
2. **Knowledge content is sample/draft** — not the full HTML inventory.
3. **Calculator has no calculation engine** — intentionally gated.
4. **OG social card** uses logo PNG, not a dedicated 1200×630 asset.
5. **Playwright not installed** — viewport automation optional follow-up.
6. **Staging URL not live in this phase** — no VPS credentials yet (OQ-13).
7. **Production robots currently allow crawl** of public routes — fine for prod domain; protect staging with auth/noindex before sharing publicly.

---

## Recommended next steps (after this report)

1. Owner walks client review checklist (local or staging once OQ-13 resolved).
2. Resolve OQ-08 before treating forms as production-ready.
3. Content/legal review pass on any pages meant to be authoritative.
4. When ready: **separate explicit “Approve production deploy”** — do not treat Phase 9 approval as go-live.

---

## Phase 9 exit criteria

- [x] Staging deploy notes written (`STAGING_DEPLOY_NOTES.md`)
- [x] Client-review report written (this document)
- [x] Build verification referenced (Phase 8 + clean re-run)
- [x] Production deploy **not** performed
- [x] Owner acknowledgment — **Approve** for production deploy received (2026-10-13)

Production follow-up: `docs/PRODUCTION_DEPLOY_REPORT.md` (blocked on OQ-13 access).
