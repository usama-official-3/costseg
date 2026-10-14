# CostSeg SI — Evidence-Based Audit and Approval-Gated Roadmap

**Date:** 2026-10-14  
**Mode:** Planning only — **no application code changes in this document’s creation mandate beyond docs**  
**Sources:** Repo inspection · `docs/SITEMAP.md` (187-URL inventory) · briefs · prior phase docs  
**Owner confirmation (2026-10-14):** Defaults **A** and **B** locked (see §12)

---

## 0. Executive summary

| Verdict | Detail |
|---|---|
| Keep foundation | Next.js 16 App Router + TypeScript + Tailwind v4 site is real and should **not** be rebuilt |
| Main gap | Proposed **187 URLs** in `docs/SITEMAP.md` ≠ live `app/` route tree |
| SEO risk | Root layout sets global `canonical: "/"` — high impact |
| Content risk | Knowledge samples are **draft**; must not all be indexed as authority |
| Out of scope | Operational Super Intelligence backend / live tax engine |
| Next step | Phase 4 content fill in progress — see `PHASE_TRACKER.md` (Group B batches) |

---

## 1. Repository and architecture findings

| Finding | Evidence | Impact | Action | Status |
|---|---|---|---|---|
| Next.js 16.4 App Router | `package.json` → `next@16.4.0` | Solid base | Preserve | Verified |
| Stack: React 19, TS, Tailwind 4, RHF, Zod, Lucide | `package.json` | Fits forms + UI | Preserve; add libs only with need | Verified |
| Netlify Next plugin present | `@netlify/plugin-nextjs`, `netlify.toml` | Deploy path prepared | Keep; prod host still OQ-13 | Verified |
| Shell: header, footer, bottom nav, loaders | `components/layout/*`, `app/loading.tsx` | Working UX chrome | Preserve | Verified |
| Marketing Group A–style pages exist | `app/how-it-works`, `services`, `technology`, `about`, etc. | Lead-gen core works | Align URLs to proposed map | Verified |
| Knowledge hub = templates + **8** sample articles | `content/knowledge/samples.ts` (8 slugs) | Not 187 pages | Expand via templates after approval | Verified |
| Tools: questionnaire + workflow explorer; calculator gated | `app/tools/*`, `robots.ts` disallow calculator | Matches “defer SI ops” | Keep gated calculator | Verified |
| Lead forms mock | `lib/leads/submitLead.ts` | No live CRM | Wire after OQ-08 | Verified |
| No unit/e2e suite | No `*.test.*` / Playwright in package | Regressions risk | Add in QA phase | Verified |
| Design tokens + Inter | `app/globals.css`, `layout.tsx` | Brand-aligned | Preserve; polish in design phase | Verified |

**Assumption:** Boss review of 187-page hub (OQ-01) still required for full content publish — hybrid already recommended historically.

---

## 2. Requirements traceability (summary)

| Requirement area | Source | Implemented? | Notes |
|---|---|---|---|
| Lead-gen marketing site | DOCX brief | Partial → mostly yes | Routes exist; some path names differ from XML |
| Super Intelligence messaging (non-operational) | DOCX + client SI copy | Partial | Technology + workflow explorer explanatory |
| Contact / Get Started forms | DOCX | UI yes; delivery no | Mock until OQ-08 |
| Privacy / Terms | DOCX | Yes as `/privacy`, `/terms` | Proposed URL is single `/legal` |
| Knowledge hub ~187 | HTML + XML + `SITEMAP.md` | Partial | Templates + 8 drafts; paths differ |
| Search / filters | HTML concept | Partial | Client-side over samples |
| Calculator | Optional | Gated placeholder | Correctly deferred |
| HTTPS / VPS launch | DOCX | Blocked | OQ-13 |
| Index only review-ready content | Owner default B | Not yet enforced | Sitemap currently includes drafts |

Full historical matrix: `docs/REQUIREMENTS_TRACEABILITY.md` (update in Phase 1 to point at proposed URLs).

---

## 3. Complete 187-URL inventory

**Canonical inventory (titles + paths):** `docs/SITEMAP.md`  
**Machine list:** client XML (187 `<loc>` entries) reflected in that file.

| Group | Theme | Count | Live status (2026-10-14) |
|---|---|---|---|
| A | Main website | 12 | Mostly present under **different** paths |
| B | Fundamentals | 25 | ~2 sample articles under `/knowledge/fundamentals/...` |
| C | Tax law | 30 | ~1 sample under `/knowledge/tax-law/...` |
| D | Court cases | 30 | ~1 shortlist sample under `/knowledge/cases/...` |
| E | Property guides | 25 | Index-ish `/property-types` + ~1 sample |
| F | Asset library | 25 | ~1 sample under `/knowledge/assets/...` |
| G | Case studies | 25 | ~1 sample under `/knowledge/studies/...` |
| H | Resources | 15 | Hub + ~1 sample under `/knowledge/resources/...` |
| **Total** | | **187** | **Proposed paths largely unimplemented** |

Per-URL migration table: `docs/URL_RECONCILIATION.md`.

---

## 4. Existing vs missing functionality

| Area | Existing | Missing / partial |
|---|---|---|
| Marketing pages | Home, How It Works, Services, Technology, Workflow, Who We Help, Property Types, About, FAQs, Contact, Request Study, Privacy, Terms | Proposed slug aliases (`/how-cost-segregation-works`, `/request-a-study`, `/legal`, `/technology/ai-agent-workflow`) |
| Knowledge | Templates, search UI, 8 drafts | ~179 proposed article URLs; counsel-ready content; `/learn`, `/tax-law`, `/court-cases`, etc. |
| Nav | 7 desktop items including Tools | Proposed 6-item nav (Tools not in client top nav) |
| SEO | `sitemap.ts`, `robots.ts`, metadata | Correct canonicals; noindex drafts; structured data; OG image 1200×630 |
| A11y / responsive | Bottom nav, focus, skeletons | Formal a11y audit automation |
| Tests | Lint + build | Vitest / Playwright |
| Forms | Validation + honeypot + mock | Live destination |

---

## 5. Sitemap and URL reconciliation

**Conflict (verified):**

| Proposed (`docs/SITEMAP.md`) | Current (`lib/seo/routes.ts` / `app/`) |
|---|---|
| `/how-cost-segregation-works` | `/how-it-works` |
| `/technology/ai-agent-workflow` | `/workflow` |
| `/request-a-study` | `/request-study` |
| `/legal` | `/privacy` + `/terms` |
| `/knowledge-hub` | `/knowledge` |
| `/learn/...` | `/knowledge/fundamentals/...` |
| `/tax-law/...` | `/knowledge/tax-law/...` |
| `/court-cases/...` | `/knowledge/cases/...` |
| `/asset-library/...` | `/knowledge/assets/...` |
| `/case-studies/...` | `/knowledge/studies/...` |
| `/resources/...` | `/knowledge/resources/...` |

**Owner default A (CONFIRMED):** Adopt proposed 187 URLs as canonical + 301 redirects from current paths.

---

## 6. Technical SEO audit

| Issue | Evidence | Impact | Recommended action | Status |
|---|---|---|---|---|
| Global canonical `/` | `app/layout.tsx` `alternates.canonical: "/"` | All pages may claim home canonical | Remove root canonical; per-route canonicals | **P0** |
| Sitemap lists draft articles | `sitemap.ts` + `getKnowledgeArticlePaths()` | Draft/shortlist may be indexed | Filter by `reviewStatus` / allowlist | **P0** under default B |
| Path mismatch vs proposed | routes vs `SITEMAP.md` | Split equity / confusion | Redirect phase | **P1** |
| OG image not 1200×630 art | Lockup PNG used as OG | Weak social cards | Dedicated asset later | P2 |
| No JSON-LD | No structured data components | Missed rich results | Organization + Article later | P2 |
| Calculator disallow | `robots.ts` | Correct | Keep | OK |
| `metadataBase` costseg.si | `layout.tsx` | Good | Keep | OK |

---

## 7. Responsive design and accessibility audit

| Topic | Finding | Action |
|---|---|---|
| Breakpoints | Tailwind screens 480→1920; design from 320 | Keep; visual QA on device |
| Mobile bottom nav | Fixed; clearance fixes (B-01) applied | Preserve |
| Skeletons | Full-page + route loaders | Preserve |
| Focus / skip link | Present; Logo focus fixed | Continue manual QA |
| Formal axe/Playwright | Missing | Phase QA |
| Design distinctiveness | Brand tokens + SI mesh; still improve photography / density | Design phase — no full redesign |

---

## 8. Recommended Next.js rendering and content architecture

| Layer | Recommendation | Why |
|---|---|---|
| Default | RSC + App Router | Already in place |
| Marketing | Static / SSG pages | SEO + speed |
| Knowledge articles | Typed content modules or MDX later; shared templates | Reuse; no 187 hand pages |
| Review gate | `reviewStatus`: draft \| internal_review \| approved | Default B indexing |
| Search | Client filter now; Algolia/Meilisearch only if scale needs | Avoid premature paid stack |
| Redirects | `next.config` redirects **or** Netlify `_redirects` | After URL cutover approval |

**Libraries (only if needed):**

| Lib | When | Justification |
|---|---|---|
| Keep RHF + Zod | Forms | Already used |
| Keep Lucide | Icons | Already used |
| Playwright | QA phase | E2E acceptance |
| Vitest + RTL | Component smoke | Optional early |
| Avoid CMS until | Content volume + editors | File-based OK for v1 |

---

## 9. Redirect and URL migration strategy

See **`docs/URL_RECONCILIATION.md`** for the full map.

**Rules:**

1. Proposed path = canonical.  
2. Current path → **301** to proposed.  
3. Do not delete old routes until redirects verified.  
4. Update internal links + nav in same phase.  
5. Rebuild `sitemap.ts` from proposed inventory; exclude non-approved content.

---

## 10. Content review and indexability policy

**Owner default B (CONFIRMED):** Index / include in sitemap **only** approved, sourced, review-ready content.

| Status | Sitemap | robots | UI label |
|---|---|---|---|
| `draft` | Exclude | `noindex` optional | Draft badge |
| `internal_review` | Exclude | `noindex` | Internal review |
| `approved` | Include | index | Clean |
| Court shortlist | Exclude until verified | noindex | Research shortlist |

**Hard rules:** No invented citations, cases, savings %, credentials, or operational AI claims.

---

## 11. Phased implementation plan (canonical — see `PHASE_TRACKER.md`)

| Phase | Name | Status | Changes |
|---|---|---|---|
| **0** | Plan / intake | **Done** | Briefs, docs, brand sources |
| **1** | URL + SEO foundation | **Done** | Canonicals, redirects, Default A/B — `PHASE1_REPORT.md` |
| **2** | Route hubs aligned | **Done** | Proposed Group A + hub roots — `PHASE2_REPORT.md` |
| **3** | Inventory + templates | **Done** | 187 registry + ArticleTemplate — `PHASE3_REPORT.md` |
| **4** | Content fill (populate) | **Done** | 171 draft demo articles B–H — `PHASE4_REPORT.md` |
| **5** | Design polish | **Done** | `PHASE5_REPORT.md` |
| **6** | SEO check | **Done** | `PHASE6_SEO_REPORT.md` |
| **7** | QA | **Done** | `PHASE7_QA_REPORT.md` |
| **8** | Staging | **Done** | `PHASE8_STAGING_REPORT.md` |
| **9** | Production approve | **Pending** | Separate explicit approval (OQ-13) |

**Do not skip phases after content fill.**  
**Out of scope until separate approval:** Operational multi-agent SI pipeline / backend tax engine.

---

## 12. Locked defaults and approval checkpoints

| ID | Decision | Status |
|---|---|---|
| **Default A** | Proposed 187 URLs canonical + redirects | **CONFIRMED** 2026-10-14 |
| **Default B** | Originally index only `reviewed` \| `verified` | **OVERRIDDEN 2026-10-14** — client approved indexing all Knowledge Hub pages; calculator stays noindex |
| Phase 0–3 | Plan, URL/SEO, hubs, inventory/templates | **Done** — see `PHASE_TRACKER.md` |
| Phase 4 | Content fill (frontend demo; draft + noindex) | **Done** — `PHASE4_REPORT.md` |
| Phase 5–8 | Design → SEO → QA → Staging | **Done** — waiting **Approve Phase 9** only for production |
| SI backend | Deferred | Locked out of scope |

### Explicit stop

Phases 5–8 complete. Production remains a **separate** Approve (Phase 9 / OQ-13).

---

## 13. QA / acceptance (Phases 1–3 — completed)

- [x] No page emits `rel=canonical` pointing incorrectly to `/` (except home)  
- [x] Each migrated route: old URL 301 → new URL  
- [x] Internal nav uses proposed paths  
- [x] `npm run build` pass  
- [x] Draft knowledge excluded from sitemap.xml  
- [x] Calculator still disallowed in robots  

---

## 14. Unresolved questions (still open)

See `docs/OPEN_QUESTIONS.md` — especially OQ-01 (hub scale publish), OQ-02 (content ownership), OQ-04 (legal reviewer), OQ-08 (leads), OQ-13 (hosting).

Phase 4 demo fill proceeds as **draft / noindex** until client content approval; Defaults A/B still gate public indexing.
