# REQUIREMENTS_TRACEABILITY — CostSeg SI

Legend: **P** = Proposed · **A** = Approved · **I** = Implemented · **V** = Verified · **B** = Blocked pending decision

| ID | Requirement | Source | Planned implementation | Validation | Status |
|---|---|---|---|---|---|
| R-01 | Domain costseg.si | DOCX §1 | Canonical URL strategy Phase 8/9 | DNS/SSL check later | P |
| R-02 | Prefer “Super Intelligence” phrasing | DOCX §4, HTML | Copy guidelines in DESIGN + content | Editorial review | P |
| R-03 | No unsupported guarantees | DOCX §4, HTML §08 | Content standards + QA copy check | Manual review | P |
| R-04 | Official logo pack only | DOCX §6 | `public/brand/` assets | Visual QA | P (assets staged) |
| R-05 | Focused lead-gen sitemap | DOCX §2 | Group A routes Phase 5 | Page checklist | P |
| R-06 | Homepage 10-section structure | DOCX §3 | Home page Phase 5 | Section audit | P |
| R-07 | Responsive desktop/tablet/mobile | DOCX §5 | Shell Phase 4; QA Phase 8 | Playwright viewports | P |
| R-08 | CTAs to contact form | DOCX §5 | Buttons + links | Click path test | P |
| R-09 | Form validation, spam, success/error | DOCX §5 | RHF+Zod UI; mock submit | Unit + e2e | P |
| R-10 | Form destination client-approved | DOCX §5 | Future backend | OQ-08 | B |
| R-11 | SEO titles, metas, sitemap.xml, robots | DOCX §5, HTML | Phase 8 | Lighthouse/SEO checklist | P |
| R-12 | Analytics only after approval | DOCX §5 | Deferred | OQ-12 | B |
| R-13 | Staging then VPS | DOCX §7 | Phase 9; prod separate | Deploy checklist | P |
| R-14 | Knowledge hub ~187 pages proposed | HTML §03 | Templates Phase 6; fill after OQ-01 | Sitemap audit | P |
| R-15 | Eight content groups A–H | HTML | Content models + routes | Docs SITEMAP | P |
| R-16 | Knowledge search + filters | HTML features | UI Phase 6; backend later | Interaction test | P |
| R-17 | Property questionnaire | HTML features | Phase 7 frontend | Form test | P |
| R-18 | SI workflow explorer | HTML optional | Phase 7 | UX review | P |
| R-19 | Illustrative calculator | HTML optional | Deferred unless OQ-03 | Tax review | B |
| R-20 | Related research navigation | HTML core | Article templates | Link checks | P |
| R-21 | Lead-generation forms | HTML core | Phase 5 | Form states | P |
| R-22 | SI 4-step presentation | HTML §05 | Technology pages | Copy accuracy | P |
| R-23 | Design tokens charcoal/white/gray/lime | HTML §06 | DESIGN_SYSTEM + Tailwind tokens | Visual review | P |
| R-24 | Original design; don’t copy refs | HTML §06 | Design Phase 2 | Diff vs refs | P |
| R-25 | Source-backed research standards | HTML §08 | CONTENT_AND_RESEARCH_STANDARDS | Editorial | P |
| R-26 | Court-case verification before publish | HTML Group D | Review flag in content model | Legal review | B |
| R-27 | Reusable templates / CMS-ready | HTML technical | Architecture Phase 1/3 | Code review later | P |
| R-28 | Accessibility + performance | HTML technical | Phase 4/8 | a11y + perf checks | P |
| R-29 | HTTPS/security (launch) | HTML technical | Phase 9 | Ops check | P |
| R-30 | Mobile bottom nav (owner UX) | Owner brief | Phase 4 | Mobile QA | P |
| R-31 | Custom branded loaders | Owner brief | Phase 4 | Visual + loading.tsx | P |
| R-32 | Test from 320px to ultra-wide | Owner brief | Phase 8 | Playwright | P |
| R-33 | Frontend only now; backend later | Owner brief | Phases 3–8 | Scope audit | P |
| R-34 | Next.js + TS + Tailwind stack | Owner brief | Phase 3 | Version check | P |
| R-35 | Phase approval gates | Owner workflow | All phases | Process | P |

## Proposed additions (not in DOCX; labeled separately)

- Mobile bottom navigation (R-30)  
- Branded PageLoader system (R-31)  
- Explicit 320px→ultra-wide matrix (R-32)  
- Vitest/RTL/Playwright tooling  
- `.cursor/rules` governance (Phase 3)  

These require owner confirmation as in-scope for the frontend build.
