# PROJECT_UNDERSTANDING — CostSeg SI

**Phase:** 1 (documentation)  
**Sources:** `briefs/CostSeg_SI_Developer_Brief_and_Draft_Sitemap.md`, `briefs/costseg_si_website_concept.html`, `public/brand/*`  
**Status:** Proposed planning document — not a production authorization

## Purpose

CostSeg SI (`costseg.si`) is a professional US cost segregation brand. The website must:

1. Generate qualified leads for cost segregation studies.
2. Optionally serve as a searchable educational knowledge hub on cost segregation, tax law, IRS guidance, court decisions, property types, asset classification, and illustrative case studies.

## Primary differentiator

**Super Intelligence** — prefer this phrase over “Artificial Intelligence” in prominent marketing copy when accurate. Communicate a faster, technology-led study preparation workflow without unsupported guarantees.

## Audiences (proposed; confirm with client)

- Real estate investors
- Property owners
- Portfolio operators
- CPAs / advisers (supporting audience; confirm before publishing dedicated messaging)

## Goals

- Clear value proposition and conversion path (Contact / Get Started)
- Credible professional presentation matching official brand assets
- Original design (reference sites for IA inspiration only — never copy)
- Frontend-first delivery; backend/CMS/search services later after approval
- Staging first; production VPS deploy only after separate explicit approval

## Scope — immediate

Polished, original, fully responsive **frontend** with:

- Marketing / Group A pages
- Reusable knowledge-hub templates and sample content (not auto-publishing all ~187 pages)
- Lead form UI (mock submit until destination approved)
- SI workflow explanation UI
- Optional tool UIs (questionnaire; calculator only if approved)

## Scope — future (not Phase 1–8 implementation)

- CMS / database / full-text search backend
- Real form delivery to CRM/email
- Operational multi-agent SI pipeline
- Production VPS + DNS/SSL go-live

## Source-document references

| Document | Role |
|---|---|
| Developer Brief (DOCX → MD) | Lead-gen sitemap, messaging rules, delivery workflow |
| Website concept HTML | Design tokens, ~187-page hub, features, research standards |
| Official logo pack | Brand lockups, marks, favicon |
| Design board / mermaid images in `references/` | Inspiration only |

## Known source conflict

- **DOCX:** focused lead-generation site (~10 pages)
- **HTML:** lead-gen + knowledge hub ≈ 187 pages / 8 groups

**Working recommendation:** Hybrid — build Group A first; scaffold hub templates; expand page inventory only after boss approval of the 187-page outline.

## Hard constraints

- Do not invent credentials, testimonials, statistics, tax conclusions, contact details, pricing, or guarantees
- Do not claim unverified AI agents are operational
- Court-case list is a research shortlist pending verification
- Educational content is not individualized tax advice
