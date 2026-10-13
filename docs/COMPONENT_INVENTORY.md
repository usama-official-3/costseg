# COMPONENT_INVENTORY — CostSeg SI (Phase 2)

Components planned for Phase 4+ implementation. RSC-friendly by default; mark `client` only when required.

## Brand

| Component | Props (key) | Notes |
|---|---|---|
| `Logo` | `variant: on-dark \| on-light \| stacked-dark \| stacked-light` | Uses `public/brand/*` PNGs via `next/image` |
| `BrandMark` | `variant`, `size` | Mark-only; loader motif source |
| `Favicon` usage | — | `app/icon` from `favicon.png` |

## Layout / navigation

| Component | Client? | Notes |
|---|---|---|
| `SiteHeader` | partial | Desktop/tablet top nav; lime Get Started |
| `MobileBottomNav` | yes | Fixed; Home, Research, Tools, Contact; hidden `lg+` |
| `SiteFooter` | no | Dark; legal + nav + disclaimer |
| `Container` | no | max-width ~1120px |
| `Section` | no | padding + surface (`ink` \| `paper` \| `soft`) |
| `SkipToContent` | no | a11y |

## UI primitives

| Component | Variants / states |
|---|---|
| `Button` | primary (lime), secondary (outline), ghost; sizes sm/md/lg; loading; disabled; focus-visible |
| `LinkButton` | same visuals, next/link |
| `Badge` / `Pill` | soft lime tint, muted, warning |
| `Card` | default border; optional hover lift (subtle) |
| `IconTile` | soft bg, rounded ~9–12px, Lucide icon |
| `Callout` | soft panel |
| `WarningCallout` | left lime/warning bar |
| `Divider` | line token |
| `Input`, `Textarea`, `Select`, `Label`, `FieldError`, `HelperText` | form system |
| `Checkbox` / `Radio` | if needed by questionnaire |

## Marketing

| Component | Notes |
|---|---|
| `Hero` | headline, support, dual CTAs, optional media slot |
| `TrustBar` | 3–4 items; placeholder labels until approved |
| `ServicesGrid` | 2×2 cards |
| `ProcessSteps` | 3–4 steps |
| `SiWorkflowBand` | dark 4-step SI presentation |
| `AudienceGrid` | who we help |
| `FaqPreview` | short list + link to FAQs |
| `CtaBand` | final conversion strip |
| `StudyPreviewCard` | illustrative sample data only; labeled |

## Knowledge hub

| Component | Notes |
|---|---|
| `HubSearch` | client for input; filters |
| `FilterChips` | content type / property / asset |
| `ResultList` | cards with summary |
| `Breadcrumbs` | semantic nav |
| `ArticleHeader` | title, summary, dates, review status |
| `ArticleBody` | prose styles |
| `SourceList` | citations / links |
| `RelatedLinks` | related slugs |
| `ReviewStatusBadge` | draft / reviewed / verified |

## Tools

| Component | Notes |
|---|---|
| `QuestionnaireForm` | RHF + Zod; multi-step optional |
| `WorkflowExplorer` | interactive SI steps; explanatory labeling |
| `CalculatorPanel` | optional / gated; disclaimer required |

## Loaders / feedback

| Component | Notes |
|---|---|
| `PageLoader` | mark animation |
| `Skeleton` | text, card, hero, article, list |
| `EmptyState` | no results |
| `ErrorState` | recoverable errors |
| `FormSuccess` | post-submit confirmation |

## Page templates

| Template | Used by |
|---|---|
| `MarketingPageShell` | Group A |
| `ArticleBasic` | Group B |
| `TaxAuthorityArticle` | Group C |
| `CaseLawArticle` | Group D |
| `PropertyGuide` | Group E |
| `AssetClassification` | Group F |
| `CaseStudy` | Group G |
| `ResearchIndex` | Group H |
| `ToolLayout` | Tools |

## Implementation folders (Phase 3+)

```
components/brand/
components/layout/
components/ui/
components/marketing/
components/knowledge/
components/tools/
components/loaders/
```
