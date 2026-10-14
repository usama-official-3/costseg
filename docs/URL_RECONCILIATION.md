# URL Reconciliation — Current vs Proposed (187)

**Policy (Default A — confirmed):** Proposed paths in `docs/SITEMAP.md` are canonical. Current paths receive **301** redirects.  
**Policy (Default B — confirmed):** Only `approved` content enters `sitemap.xml` / indexation.

Domain: `https://costseg.si`

---

## Group A — Main site (redirect map)

| # | Proposed (canonical) | Current (if different) | Action |
|---|---|---|---|
| 01 | `/` | `/` | Keep |
| 02 | `/how-cost-segregation-works` | `/how-it-works` | 301 → proposed |
| 03 | `/services` | `/services` | Keep |
| 04 | `/technology` | `/technology` | Keep |
| 05 | `/technology/ai-agent-workflow` | `/workflow` | 301 → proposed |
| 06 | `/who-we-help` | `/who-we-help` | Keep |
| 07 | `/property-types` | `/property-types` | Keep |
| 08 | `/about` | `/about` | Keep |
| 09 | `/faqs` | `/faqs` | Keep |
| 10 | `/contact` | `/contact` | Keep |
| 11 | `/request-a-study` | `/request-study` | 301 → proposed |
| 12 | `/legal` (+ `/legal/privacy`, `/legal/terms`) | `/privacy` + `/terms` | **Phase 1 done:** hub + split pages; 301 `/privacy` → `/legal/privacy`, `/terms` → `/legal/terms` |

**Phase 1 legal decision (2026-10-14):** `/legal` hub with `/legal/privacy` and `/legal/terms`.

---

## Knowledge hub roots

| Proposed | Current | Action |
|---|---|---|
| `/knowledge-hub` | `/knowledge` | 301 → proposed; rebuild landing |
| `/learn/` (B) | `/knowledge/fundamentals/` | New tree + 301 sample slugs |
| `/tax-law/` (C) | `/knowledge/tax-law/` | New tree + 301 |
| `/court-cases/` (D) | `/knowledge/cases/` | New tree + 301 |
| `/property-types/...` (E) | `/knowledge/properties/...` + marketing `/property-types` | Guides live under `/property-types/{slug}`; marketing index stays |
| `/asset-library/` (F) | `/knowledge/assets/` | New tree + 301 |
| `/case-studies/` (G) | `/knowledge/studies/` | New tree + 301 |
| `/resources/` (H) | `/knowledge/resources/` | New tree + 301 |

---

## Sample article migrations (existing 8 drafts)

| Current | Proposed (best match) | Notes |
|---|---|---|
| `/knowledge/fundamentals/what-is-cost-segregation` | `/learn/what-is-cost-segregation` | 301 |
| `/knowledge/fundamentals/macrs-explained` | `/learn/macrs-explained` | 301 |
| `/knowledge/tax-law/irc-168-macrs-overview` | `/tax-law/section-168-macrs` | 301 (slug normalize) |
| `/knowledge/cases/hospital-corporation-of-america-shortlist` | `/court-cases/hospital-corporation-of-america-v-commissioner` | 301; remains shortlist/noindex until verified |
| `/knowledge/properties/multifamily-apartment-buildings` | `/property-types/multifamily-apartment-buildings` | 301 |
| `/knowledge/assets/specialized-electrical-systems` | `/asset-library/specialized-electrical-systems` | 301 |
| `/knowledge/studies/illustrative-multifamily-acquisition` | `/case-studies/multifamily-acquisition` | 301 |
| `/knowledge/resources/research-library-disclaimer` | `/resources/research-library-disclaimer` | 301 |

All remain **non-indexed** until `reviewStatus === approved` (Default B).

---

## Tools (not in 187 marketing XML as primary nav)

| Path | Status |
|---|---|
| `/tools` | Keep (product UI); not required in client 6-item top nav — decide visibility |
| `/tools/questionnaire` | Keep |
| `/tools/workflow-explorer` | Keep (explanatory SI; not operational backend) |
| `/tools/calculator` | Keep gated; `robots` disallow |

---

## Nav reconciliation

| Client proposed top nav | Current `config/navigation.ts` | After Default A |
|---|---|---|
| Home `/` | `/` | Same |
| How It Works | `/how-it-works` | `/how-cost-segregation-works` |
| Knowledge Hub | `/knowledge` | `/knowledge-hub` |
| Property Types | `/property-types` | Same |
| About | `/about` | Same |
| Contact / Get Started | `/contact` (+ CTA) | `/contact` or CTA → `/request-a-study` |
| *(Tools)* | `/tools` | **Phase 1:** footer + mobile bottom nav; not in primary 6-item nav |

---

## Implementation notes (when Phase 1 approved)

1. Prefer Next.js `redirects()` in `next.config.ts` for App Router clarity.  
2. Mirror critical redirects on Netlify if used as host.  
3. Update `lib/seo/routes.ts`, `config/navigation.ts`, and internal `Link`/`href`s in the same PR.  
4. Rebuild sitemap from `docs/SITEMAP.md` data module + approval filter.  
5. Do **not** invent the remaining ~179 articles in Phase 1 — stubs or “coming for review” only if approved; prefer templates without indexing empty pages.
