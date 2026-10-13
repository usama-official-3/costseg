# IMPLEMENTATION_PLAN — CostSeg SI

## Phase gates

Each phase ends with a concise report and waits for explicit **Approve** or **Changes**.  
Never auto-advance. Production deploy is a separate approval after Phase 9.

| Phase | Name | Deliverables | Depends on | Tests |
|---|---|---|---|---|
| 0 | Source intake | Understanding of DOCX/HTML/logos | Sources available | Manual inventory |
| 1 | Planning docs | `/docs` + `briefs/` + brand copy | Phase 0 | File checklist |
| 2 | Design system | Visual direction, wireframes, component inventory | Phase 1 | Design review |
| 3 | Project scaffold | Next.js+TS+Tailwind, `.cursor/rules` | Phase 2 | `npm` scripts dry-run |
| 4 | Shell + UX chrome | Header, footer, bottom nav, loaders | Phase 3 | Viewport smoke |
| 5 | Marketing pages | Group A + homepage sections | Phase 4 | Route + form UI tests |
| 6 | Knowledge hub | Templates, search/filter UI, samples | Phase 5 | Slug/template tests |
| 7 | Tools UI | Questionnaire + workflow explorer; calculator optional | Phase 6 | Form/tool interaction |
| 8 | QA hardening | Responsive, a11y, SEO, perf fixes | Phase 7 | Playwright + a11y |
| 9 | Staging review | Staging deploy notes + client report | Phase 8 | Staging checklist |

## Risks

| Risk | Mitigation |
|---|---|
| 187-page scope assumed approved | Hybrid build; OQ-01 gate |
| Unverified case law published | CONTENT standards; draft status |
| Over-claiming SI capabilities | Soft copy; planned vs operational labeling |
| Form destination unknown | Mock adapter until OQ-08 |
| Logo only PNG not SVG | PNGs staged; request SVG in OQ-11 |
| Design board conflicts with HTML tokens | HTML + logos take precedence |

## Phase 1 exit criteria

- [x] `/docs` package created
- [x] Briefs persisted
- [x] Official logos copied to `public/brand/`
- [x] Inspiration assets in `references/` (labeled inspiration)
- [x] Owner approved → Phase 2

## Phase 2 exit criteria (this phase)

- [x] `DESIGN_SYSTEM.md` refined (tokens, type, breakpoints, logo matrix)
- [x] `VISUAL_DIRECTION.md` created
- [x] `WIREFRAMES.md` created (shell + Home + key pages)
- [x] `COMPONENT_INVENTORY.md` created
- [ ] Owner approval to proceed to Phase 3

## Phase 3 exit criteria

- [x] Next.js 16 App Router + TypeScript + Tailwind v4 scaffolded at repo root
- [x] Design tokens wired in `app/globals.css`
- [x] Inter via `next/font`; placeholder home using official lockup
- [x] Dependencies: lucide-react, zod, react-hook-form, @hookform/resolvers
- [x] `.cursor/rules/*.mdc` (brand, next, tailwind, a11y, content, phase-qa)
- [x] Config stubs: `config/brand.ts`, `config/navigation.ts`
- [x] Folder stubs: `components/`, `content/`, `lib/content/`
- [ ] Owner approval to proceed to Phase 4

## Phase 4 exit criteria

- [x] Brand Logo / BrandMark components
- [x] SiteShell: SkipToContent, Header, Footer, MobileBottomNav
- [x] UI primitives: Button, LinkButton, Badge, Card, Container, Section
- [x] PageLoader + Skeleton variants + `app/loading.tsx`
- [x] Placeholder routes for nav destinations
- [ ] Owner approval to proceed to Phase 5

## Phase 5 exit criteria

- [x] Full homepage sections (hero, trust, services, SI band, audiences, FAQs, CTA)
- [x] Group A marketing pages: how-it-works, services, technology, workflow, who-we-help, property-types, about, faqs
- [x] Contact + request-study forms with RHF/Zod validation, honeypot, mock submit success
- [x] Privacy/terms placeholder pages with disclaimer language
- [ ] Owner approval to proceed to Phase 6

## Phase 6 exit criteria

- [x] Typed knowledge content model + sample seed articles (8 across all groups)
- [x] Hub landing with group browse + client-side search/filters
- [x] Group index pages + reusable ArticleTemplate
- [x] Dynamic article routes under `/knowledge/{group}/[slug]`
- [x] Review status, sources, related links, disclaimers
- [ ] Owner approval to proceed to Phase 7

## Phase 7 exit criteria

- [x] Tools hub page listing questionnaire, workflow explorer, gated calculator
- [x] Multi-step property questionnaire with validation + mock submit
- [x] Interactive SI workflow explorer + illustrative study preview (no fake savings %)
- [x] Calculator route gated with no invented math engine
- [ ] Owner approval to proceed to Phase 8

## Phase 8 exit criteria

- [x] `sitemap.ts` + `robots.ts`
- [x] Root metadata (OG/Twitter/viewport/canonical defaults)
- [x] Branded 404, overflow guards, touch-target improvements
- [x] `docs/PHASE8_QA_REPORT.md`
- [x] Lint/build verification
- [x] Owner approval to proceed to Phase 9

## Phase 9 exit criteria

- [x] `docs/STAGING_DEPLOY_NOTES.md` (runtime, build, proxy/TLS, SEO guards, smoke list)
- [x] `docs/PHASE9_STAGING_REPORT.md` (client review inventory + checklist + blockers)
- [x] Production build verification referenced (`VERIFY_EXIT=0`)
- [x] No production deploy performed in this phase
- [ ] Owner next instruction: production deploy is a **separate** explicit approval (requires OQ-13)

## After Phase 9 — production deploy gate

- [x] Owner explicit **Approve** for production deploy (2026-10-13)
- [x] `docs/PRODUCTION_DEPLOY_REPORT.md` written
- [ ] VPS/DNS/SSL access (OQ-13) — **blocking**
- [ ] Deploy + HTTPS verification on `costseg.si`
- [ ] Optional: live leads (OQ-08); otherwise mock remains

See `PRODUCTION_DEPLOY_REPORT.md` for the access questionnaire and runbook.
