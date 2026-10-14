# QA_PLAN — CostSeg SI

## Objectives

Verify responsive behavior, accessibility, navigation, SEO basics, performance hygiene, and interaction correctness before staging handoff.

## Environments

- Local development
- Staging (Phase 9)
- Production (only after separate approval)

## Responsive matrix

Viewports to test (Playwright + manual):

| Width | Intent |
|---|---|
| 320 | Small phone; no horizontal overflow |
| 375 / 390 | Common phones |
| 480 | Large phone |
| 768 | Tablet; bottom-nav transition |
| 1024 | Small desktop |
| 1280 / 1440 | Desktop |
| 1920 | Ultra-wide; content max-width holds |

Checks: no overflow, readable type, touch targets, images aspect ratios, bottom nav safe-area, content not obscured.

## Navigation

- Desktop header links resolve  
- Mobile bottom nav: Home, Research, Tools, Contact (or approved set)  
- Active states correct  
- Keyboard operable; accessible names present  

## Forms

- Required field validation  
- Error messaging  
- Success state (mock)  
- Spam-control placeholder behavior when added  
- No silent failures  

## Accessibility

- Landmark structure  
- Heading hierarchy  
- Focus visible  
- Color contrast (ink/paper/lime combinations)  
- Reduced motion respected  
- Alt text for logos/images  

## SEO

- Unique title + meta description per public page  
- Canonical strategy  
- `sitemap.xml` / `robots.txt` at launch readiness  
- Indexable content (no accidental noindex on public research)  
- Open Graph tags basic  

## Performance

- Optimized images (`next/image` when scaffolded)  
- Avoid unnecessary client JS  
- No artificial loader delays  
- Lighthouse/manual checks on Home + article template  

## Content integrity

- No invented testimonials/stats  
- Illustrative samples labeled  
- Draft/unverified cases not published as authoritative  

## Defect severity

- **P0** Blocker — broken conversion, major overflow, inaccessible primary nav  
- **P1** High — form/state bugs, contrast failures  
- **P2** Medium — polish, secondary pages  
- **P3** Low — copy tweaks  

## Phase mapping (canonical — `PHASE_TRACKER.md`)

- Phase 5: design polish  
- Phase 6: SEO check  
- Phase 7: QA hardening  
- Phase 8: staging prep report  
- Phase 9: production approve (separate)  
