# FRONTEND_ARCHITECTURE — CostSeg SI

## Goals

- Original marketing + knowledge-hub frontend
- Data-driven pages (not ~187 hand-coded components)
- Future backend integration without rewrite
- Strict TypeScript, RSC-first Next.js App Router

## Proposed stack (Phase 3)

- Next.js (App Router) — version check at install
- TypeScript strict
- Tailwind CSS — version-appropriate config
- Lucide React
- `next/font` (Inter)
- React Hook Form + Zod (forms)
- Vitest + React Testing Library
- Playwright (responsive/interaction)
- MDX or typed Markdown/JSON content modules for hub articles

**Out of scope until approved:** database, CMS, auth provider, paid APIs, real tax engine.

## Route map (proposed)

```
app/
  layout.tsx                 # root shell, fonts, metadata defaults
  loading.tsx                # branded route loader
  not-found.tsx
  (marketing)/
    page.tsx                 # Home
    how-it-works/page.tsx
    services/page.tsx
    technology/page.tsx
    workflow/page.tsx
    who-we-help/page.tsx
    property-types/page.tsx
    about/page.tsx
    faqs/page.tsx
    contact/page.tsx
    request-study/page.tsx
    privacy/page.tsx
    terms/page.tsx
  knowledge/
    page.tsx                 # Hub landing + search UI
    fundamentals/[slug]/page.tsx
    tax-law/[slug]/page.tsx
    cases/[slug]/page.tsx
    properties/[slug]/page.tsx
    assets/[slug]/page.tsx
    studies/[slug]/page.tsx
    resources/[slug]/page.tsx
  tools/
    questionnaire/page.tsx
    workflow-explorer/page.tsx
    calculator/page.tsx      # optional / gated
  api/
    contact/route.ts         # stub / mock until destination approved
```

## Component boundaries

```
components/
  brand/          Logo, Mark
  layout/         Header, Footer, MobileBottomNav, Container
  ui/             Button, Card, Badge, Input, Callout…
  marketing/      Hero, TrustBar, ProcessSteps, ServicesGrid…
  knowledge/      SearchBox, Filters, ArticleHeader, RelatedLinks…
  tools/          QuestionnaireForm, WorkflowExplorer…
  loaders/        PageLoader, Skeletons
```

## Content layer

```
content/
  marketing/…          # optional MD/TS for marketing copy
  knowledge/
    fundamentals/
    tax-law/
    cases/
    properties/
    assets/
    studies/
    resources/
lib/
  content/             # loaders, slug indexes
  schemas/             # Zod content + form schemas
  search/              # client filter helpers (future: server search)
  data-access/         # interfaces for future CMS/API
```

## Content model fields (typed)

Common: `slug`, `title`, `summary`, `category`, `group`, `publishedAt`, `updatedAt`, `reviewStatus`, `relatedSlugs[]`

Extended by type:

- TaxAuthority: `citations[]`, `effectiveDates`, `sourceUrls[]`
- CaseLaw: `court`, `citation`, `holding`, `relevance`, `verificationStatus`
- PropertyGuide / Asset: `propertyTypes[]`, `disclaimer`
- CaseStudy: `illustrative` boolean, `assumptions[]`

## Form presentation vs submission

- UI validates with Zod
- Submit calls `submitLead()` abstraction
- Current implementation: mock success
- Future: swap to API/email/CRM without changing form UI

## SEO / metadata

- Per-route `generateMetadata`
- Canonical URLs
- Open Graph basics
- `app/sitemap.ts` + `robots.ts` at launch readiness

## Security notes

- No secrets in client bundles
- Client validation is not security for future forms
- Spam protection strategy TBD with destination (honeypot / turnstile / etc.)
