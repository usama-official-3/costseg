# DESIGN_SYSTEM — CostSeg SI (Phase 2)

**Status:** Phase 2 design system — ready for Phase 3 token wiring  
**Related:** [VISUAL_DIRECTION.md](./VISUAL_DIRECTION.md) · [COMPONENT_INVENTORY.md](./COMPONENT_INVENTORY.md) · [WIREFRAMES.md](./WIREFRAMES.md)

## Authority

1. Official logo pack (`public/brand/`)  
2. Concept HTML tokens  
3. Design-board image = layout inspiration only  

## Color tokens (locked for scaffold)

| Token | CSS var | Hex | Use |
|---|---|---|---|
| ink | `--color-ink` | `#17191B` | Dark surfaces, primary text on light |
| paper | `--color-paper` | `#FFFFFF` | Page + card backgrounds |
| soft | `--color-soft` | `#F5F6F6` | Soft panels, skeletons |
| muted | `--color-muted` | `#656B70` | Secondary text |
| line | `--color-line` | `#E4E6E8` | Borders / dividers |
| gray | `--color-gray` | `#D8DADD` | Logo gray tile reference |
| lime | `--color-lime` | `#D6FF43` | Primary CTA, accents, active nav |

### Derived usage

| Role | Spec |
|---|---|
| Primary button | bg lime, text ink, radius 8px |
| Secondary on dark | transparent, border `#64686B`, text white |
| Focus ring | lime outline / ink ring with offset |
| Soft lime chip | bg `#F0F4DF`, text ink |
| Hero muted text | `#D3D6D7` |

**Contrast note:** Lime on ink for buttons is intentional brand. Body text never lime-on-white at small sizes without checking WCAG; prefer ink/muted for paragraphs.

## Typography

| Role | Spec |
|---|---|
| Family | Inter (`next/font/google`) |
| Body | 16px / 1.6 |
| Small | 13–14px |
| Kicker | 11–12px, uppercase, tracking ~0.12–0.15em, weight 800 |
| H1 | `clamp(38px, 6vw, 66px)`, weight 800, tracking tight (~-0.05em), line-height ~1.04 |
| H2 | `clamp(26px, 4vw, 38px)`, tracking ~-0.035em |
| H3 | ~18px |

## Spacing & layout

| Token | Value |
|---|---|
| Content max | 1120px |
| Page gutter | 14px (320) → 20px → 24px |
| Section Y | 48–72px desktop; 32–48px mobile |
| Card padding | 20px |
| Grid gaps | 12–18px |
| Radius card | 13px |
| Radius button | 8px |
| Radius icon tile | 9px |
| Radius pill | 999px |

## Elevation

Prefer borders (`line`) over heavy shadows. If shadow used: single soft layer only.

## Breakpoints (Phase 2 decision)

Use Tailwind screens (document in `tailwind` config at Phase 3):

| Name | Min | Bottom nav | Top nav |
|---|---|---|---|
| default | 0 (design from 320) | visible | compact |
| `sm` | 480px | visible | compact |
| `md` | 768px | visible* | expanding |
| `lg` | 1024px | **hidden** | full |
| `xl` | 1280px | hidden | full |
| `2xl` | 1440px | hidden | full |

\*Re-evaluate tablet landscape in Phase 8; default hide bottom nav at `lg` only.

No unjustified exotic breakpoints beyond this set unless a layout bug requires one.

## Logo usage matrix

| Surface | Asset |
|---|---|
| Dark header/hero/footer | `costseg-si-lockup-on-dark.png` |
| Light header/sections | `costseg-si-lockup-on-light.png` |
| Centered brand moment | stacked on-dark / on-light |
| Loader / favicon / app-like icon | mark variants / `favicon.png` |

Never redraw, stretch, recolor, or add effects to logo artwork.

## Component states (all interactive)

`default` · `hover` · `focus-visible` · `active` · `disabled` · `loading` · `error` · `success` · `empty`

## Motion

| Motion | Where | Reduced motion |
|---|---|---|
| Mark tile pulse | PageLoader | Replace with static mark |
| Soft section fade-in | Hero optional | Disable |
| Bottom nav active color | Mobile nav | Instant swap OK |

No looping neon gradients.

## Accessibility checklist (design)

- [ ] Focus visible on all controls  
- [ ] Bottom nav labels (not icon-only)  
- [ ] Form labels associated  
- [ ] Lime/ink button text contrast verified  
- [ ] Skip link  
- [ ] Respect `prefers-reduced-motion`  

## Tailwind mapping preview (Phase 3)

```css
--color-ink: #17191b;
--color-paper: #ffffff;
--color-soft: #f5f6f6;
--color-muted: #656b70;
--color-line: #e4e6e8;
--color-lime: #d6ff43;
```

Utility examples: `bg-ink`, `text-muted`, `bg-lime`, `border-line`, `bg-soft`, `max-w-content`.
