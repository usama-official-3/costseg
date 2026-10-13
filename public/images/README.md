# Site imagery — CostSeg SI

Official logos stay in `public/brand/`. This folder is for marketing photography and section accents.

## Needed from client / licensed stock

| Asset | Path (recommended) | Size | Notes |
|---|---|---|---|
| Homepage hero | `public/images/hero.jpg` (or `.webp`) | **2400×1600** min (3:2); ideally **2880×1800** | Commercial architecture / building exterior or lobby. Dark-friendly. No competitor watermarks. |
| Hero mobile crop | optional `hero-mobile.jpg` | **1600×2000** (4:5) | Same scene, tighter crop; otherwise hero is cropped via CSS |
| Section accent (who we help) | `public/images/audience-accent.jpg` | **1600×1200** | Interior / multifamily / office atmosphere |
| OG / social card | `public/images/og-default.jpg` | **1200×630** | Brand + soft building; Phase 8 currently uses logo PNG |

## Wired today

| Key | File | Status |
|---|---|---|
| Hero visual | `hero.jpg` | **Active** — premium dusk commercial building photo. Replace with client-licensed photography when available; keep path `/images/hero.jpg` or update `lib/images.ts`. |
| Fallback | `hero-placeholder.svg` | Geometric fallback only (not used on homepage). |

## Rules

- Prefer real building / blueprint atmosphere over abstract purple AI looks.
- Use `next/image` with explicit `sizes`.
- Do not invent stats or testimonials in image captions.
