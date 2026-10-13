# VISUAL_DIRECTION — CostSeg SI (Phase 2)

**Status:** Design direction for implementation (Phase 4+)  
**Authority order:** Official logo pack → concept HTML tokens → design-board inspiration (layout only)

## Design thesis

Professional **proptech / financial-services** site: restrained typography, high contrast charcoal + paper, lime used sparingly for actions and Super Intelligence emphasis. Original layouts — do not copy competitor sites or treat the ChatGPT board as pixel-perfect authority.

## Surface rhythm

Alternate sections for scannability:

1. **Dark** — header, hero, technology / SI band, footer  
2. **Light (paper/soft)** — services, who we help, FAQs, forms, article bodies  

## Hero direction

- Dark charcoal background (`ink` `#17191B`)
- Official `lockup-on-dark` in header
- Headline (approved concept): **“Cost Segregation, Accelerated by Super Intelligence.”**
- Plain-language supporting copy (no guarantees)
- Primary CTA: lime fill + ink text (“Get Started” or “Discuss Your Property” — OQ-10)
- Secondary CTA: outline on dark (“How It Works”)
- Optional architecture imagery on the right (desktop) — client-supplied or licensed only; placeholder OK until assets exist
- Trust strip: icons + **approved** short labels only (placeholders until OQ-07)

## Marketing sections (visual)

| Section | Surface | Pattern |
|---|---|---|
| Trust bar | Dark or soft edge under hero | 3–4 icon + label items |
| Value / Services | Light | 2×2 card grid, lime icon tiles |
| How it works | Light or soft | 3–4 steps; lime top edge or numbered lime marks |
| Technology / SI | Dark | Horizontal 4-step flow; subtle geometric motif (circles/wave), not neon glow spam |
| Who we help | Light | Audience list/cards + optional property image |
| FAQ preview | Light | Accordion or stacked Q&A |
| Final CTA / Form | Light | Stacked fields, full-width lime submit on mobile |
| Footer | Dark | Lockup, nav, legal links, disclaimer line |

## Mobile direction

- Compact dark top bar with mark/lockup
- **Fixed bottom nav** (app-like): Home · Research · Tools · Contact  
  - Dark bar, lime active state  
  - Safe-area insets; page `padding-bottom` so content/forms never hide behind nav  
- Hide bottom nav from `lg` (1024px) upward; desktop uses top nav

## Loader direction

- Branded `PageLoader`: 2×2 mark tiles with lime accent tile pulse (respect `prefers-reduced-motion`)
- Skeletons for cards, article body, search results, tool panels
- Use real Next.js `loading.tsx` — no artificial delays

## What to avoid

- Generic purple AI landing templates  
- Excessive gradients, glows, blur stacks  
- Invented testimonials, stats, or “audit-proof” claims in UI chrome  
- Distorting or recoloring official logos  

## Copy tone in UI chrome

Prefer: technology-led, streamline, engineer-reviewed, Super Intelligence  
Avoid until approved: maximize deductions guarantees, fixed hours, AI-powered hype without SI framing
