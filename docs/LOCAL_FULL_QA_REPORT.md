# Local Full QA Report — CostSeg SI

**Date:** 2026-10-13  
**Environment:** Local (`D:\CostSeg_SI`), `npm run lint` → `npm run build` → `npm run dev`  
**Base URL:** http://localhost:3000  
**Deploy:** Not performed (per request)

---

## Verdict

**Overall: PASS with issues** — build/lint clean; all major routes load; core conversion/tools flows work. Two product bugs worth fixing before polish; hydration “errors” in the Cursor browser are tooling artifacts (see below).

---

## 1) Start / build

| Check | Result | Notes |
|---|---|---|
| `npm run lint` | **PASS** | Exit 0 |
| `npm run build` | **PASS** | Next.js 16.4, 45 routes generated |
| `npm run dev` | **PASS** | Server ready; http://localhost:3000 opens |
| Console (app) | **WARN** | Next.js recommends `data-scroll-behavior="smooth"` on `<html>` when using CSS `scroll-behavior: smooth` |

### Tooling note (not an app bug)

Cursor browser automation injects `data-cursor-ref="…"` attributes into the live DOM. Next.js Dev Tools then reports **React hydration mismatches** pointing at `Hero.tsx`, `SiteHeader.tsx`, `MobileBottomNav.tsx`, etc. Terminal diffs show server HTML vs client with those injected attrs. **Do not treat these as product hydration bugs** unless reproduced in a normal browser without the automation overlay.

---

## 2) Smoke routes

All HTTP checks against local dev:

| Route group | Paths | Result |
|---|---|---|
| Marketing | `/`, `/how-it-works`, `/services`, `/technology`, `/workflow`, `/who-we-help`, `/property-types`, `/about`, `/faqs` | **PASS** (200) |
| Lead | `/contact`, `/request-study` | **PASS** (200) |
| Legal | `/privacy`, `/terms` | **PASS** (200) |
| Knowledge indexes | `/knowledge` + 7 group indexes | **PASS** (200) |
| Sample articles | fundamentals ×2, tax-law, cases, properties, assets, studies, resources | **PASS** (200) |
| Tools | `/tools`, `/questionnaire`, `/workflow-explorer`, `/calculator` | **PASS** (200) |
| SEO | `/sitemap.xml`, `/robots.txt` | **PASS** (200) |
| 404 | `/this-page-does-not-exist-qa` | **PASS** (404 + branded not-found: Home / Knowledge Hub / Contact) |

---

## 3) Functional checks

| Check | Result | Notes |
|---|---|---|
| Desktop primary nav (≥1024) | **PASS** | Home, How It Works, Knowledge Hub, Property Types, About, Contact + Get Started |
| Get Started CTA | **PASS** | Resolves to `/contact` (direct nav confirmed; header CTA present) |
| Mobile bottom nav (<1024) | **PASS** | Home / Research / Tools / Contact; active states work |
| Bottom nav vs form submit | **FAIL (P1)** | On ~390px questionnaire, primary **Continue** can sit under fixed bottom nav; browser click intercepted by nav. Shell `pb-[56px]` helps end-of-page content but mid-viewport CTAs remain click-blocked until further scroll. Contact submit less severe with padding but same pattern. |
| Contact validation | **PASS** | Empty submit → name/email/message alerts |
| Contact honeypot | **PASS** | `#companyWebsite` present; parent `aria-hidden="true"` |
| Contact mock success | **PASS** | “Request received” / mock delivery copy |
| Request Study | **PASS** | Route 200; shares lead form pattern (same component family) |
| Questionnaire validation | **PASS** | Required field alerts on empty Continue |
| Questionnaire multi-step + mock success | **PASS** | Steps 1→2→3; “Questionnaire received” |
| Questionnaire honeypot | **PASS** | Company website field present each step |
| Knowledge search | **PASS** | Query `MACRS` → “Showing 3 of 8” |
| Draft / review badges | **PASS** | “Draft — not verified”; “Internal review” on disclaimer |
| Shortlist labeling | **PASS** | Via title/copy (“Research Shortlist”), not a separate badge enum |
| Workflow explorer stages | **PASS** | Stage 1→2 updates detail; agents/outputs swap |
| No fake savings % | **PASS** | Explicit “Percentages intentionally omitted”; “No dollar amounts or savings claims” |
| Calculator gated | **PASS** | Gate copy; no math UI/engine |
| `robots.txt` disallow calculator | **PASS** | `Disallow: /tools/calculator` |
| Official logos | **PASS** | `next/image` → `/brand/costseg-si-lockup-on-dark.png`; `alt="CostSeg SI"` |
| Tokens / Inter | **PASS** | `--ink: #17191b`, `--lime: #d6ff43`; `font-family` includes Inter |

---

## 4) Responsive visual pass

Measured `documentElement.scrollWidth` vs `clientWidth` (overflow = fail).

| Viewport | Home | Knowledge | Tools | Contact |
|---|---|---|---|---|
| ~320 | PASS (no overflow); mobile nav shown | PASS | — | — |
| ~390 | PASS (screenshot: ink hero, lime CTA, bottom nav) | PASS | PASS | PASS (mobile nav) |
| ~768 | — | — | PASS; mobile nav still shown (`lg` = 1024) | — |
| ~1024 / 1440 | PASS; primary nav flex; mobile nav `display:none`; pad-bottom 0 | — | — | PASS |

Readable type and CTAs usable at checked widths. No horizontal scroll detected on sampled pages.

**Screenshot notes**

- Mobile home (~390): brand lockup, lime Get Started, ink hero, bottom nav — looks correct.
- Contact hydration overlay (Cursor tooling): ignore for product QA; see tooling note.

---

## 5) Accessibility quick pass

| Check | Result | Notes |
|---|---|---|
| Skip-to-content in DOM | **PASS** | `href="#main-content"`; `#main-content` on pages |
| Skip link keyboard reveal | **PARTIAL** | Implemented with `focus:translate-y-0`; off-screen until focus. Automated Tab/click did not reliably land on it in this harness — **manual Tab verify recommended** |
| `:focus-visible` global | **PASS** (code) | `globals.css` lime 2px outline |
| Logo focus ring | **FAIL (P2)** | `Logo` link uses `focus-visible:outline-none` — removes visible focus |
| Header / bottom nav keyboard | **PASS** (structure) | Links named; bottom nav has text labels |
| Form labels / errors | **PASS** | Labels associated; errors as alerts |
| Image alt | **PASS** | Header/footer logos `alt="CostSeg SI"` |
| Honeypot in a11y tree | **WARN (P3)** | Field still exposed as textbox in accessibility snapshot despite `aria-hidden` parent (focusable-in-hidden-subtree smell; `tabIndex={-1}` mitigates tab stop) |

---

## 6) Bugs found

| ID | Severity | Summary | Evidence | Recommended fix (ask before implementing) |
|---|---|---|---|---|
| B-01 | **P1** | Mobile bottom nav can intercept clicks on primary form CTAs (Continue / possibly Submit) when those controls land in the lower viewport band | Questionnaire @390: click intercepted by Home nav; `coveredByBottomNav: true` before extra scroll | Increase shell bottom padding and/or `scroll-padding-bottom` / `scroll-margin-bottom` on form actions; ensure sticky CTAs clear `nav` height (~56px + safe-area) |
| B-02 | **P2** | Logo link suppresses `:focus-visible` outline | `components/brand/Logo.tsx` `focus-visible:outline-none` | Remove outline-none; keep brand focus ring consistent with global lime outline |
| B-03 | **P3** | Next.js scroll-behavior warning | Dev console: missing `data-scroll-behavior="smooth"` on `<html>` | Add attribute on root `<html>` in `app/layout.tsx` per Next docs |
| B-04 | **P3** | Honeypot still appears in accessibility tree | Contact/questionnaire snapshots list “Company website” textbox | Prefer `hidden` + `tabIndex={-1}` + not `aria-hidden` on ancestors of focusable nodes; or `type="text"` in visually hidden with `aria-hidden` on input itself carefully |
| B-05 | **P3** | 404 document title uses default site title | Fake URL title was root metadata, not “Not found” | Optional `not-found` metadata title |

**Not bugs**

- DevTools hydration complaints during Cursor browser sessions → tooling `data-cursor-ref` injection.
- Calculator gated / no engine → intentional.
- Shortlist as copy rather than badge enum → intentional seed labeling.
- Lead forms mock-only → intentional until OQ-08.

---

## 7) Fixes applied (Approve fixes — 2026-10-13)

| ID | Change |
|---|---|
| B-01 | Shell padding `72px + safe-area`; footer moved inside padded region; `scroll-padding-bottom` on html &lt;1024; form action `scroll-mb` on Contact + Questionnaire |
| B-02 | Logo link: removed `focus-visible:outline-none`; added `aria-label` + rounded focus target |
| B-03 | `data-scroll-behavior="smooth"` on root `<html>` |
| B-04 | Honeypot as single `aria-hidden` input (no labeled accessible name) in Contact + Questionnaire |
| B-05 | `not-found.tsx` exports `metadata.title = "Page not found"` |

---

## Sign-off

| Item | Status |
|---|---|
| Local QA executed | Yes |
| Report written | `docs/LOCAL_FULL_QA_REPORT.md` |
| Code changes from this QA | B-01–B-05 applied after Approve fixes |
| Production deploy | Not started |
