# Local readiness audit — CostSeg SI

**Generated:** 2026-10-14  
**Base URL:** `http://127.0.0.1:3000` (`npm run build` + `npm run start`)  
**Overall:** **FRONTEND READY FOR LOCAL PREVIEW** — catalog + indexing pass; production still blocked on OQ-13 / Phase 9

## Verdict vs client SITEMAP (187)

| Check | Result | Notes |
|---|---|---|
| C1 Client 187 paths in `pageRegistry` | **PASS** | Exact match — 0 missing, 0 extra |
| C2 Articles indexable (client override) | **PASS** | `isArticleIndexable` → always true; factory default `reviewed` |
| C3 Expected sitemap size 195 (187+8) | **PASS** | Calculator excluded |
| C4 Local server reachable | **PASS** | Production `next start` |
| C5 All client 187 URLs HTTP 200 | **PASS** | Build prerenders routes; parallel probe had timeouts (status 0); sequential retest of failures → **all 200** |
| C6 Sitemap includes all client 187 | **PASS** | Live `/sitemap.xml` = **195** `<loc>`; missing client paths = **none** |
| C7 No noindex on sample catalog pages | **PASS** | Home + 1 article per group — no `noindex` |
| C8 Calculator gated | **PASS** | `robots.txt` Disallow + omitted from sitemap |

## Catalog diff (client XML ↔ registry)

| Metric | Value |
|---|---|
| Client XML URLs | **187** |
| `pageRegistry` paths | **187** |
| Missing from registry | **none** |
| Extra in registry | **none** |
| Live sitemap `<loc>` | **195** = 187 + 8 extras |

### Extras (OK — not in client 187 XML)

- `/legal/privacy`, `/legal/terms`
- `/learn`, `/tax-law`, `/resources` (group indexes)
- `/tools`, `/tools/questionnaire`, `/tools/workflow-explorer`

## Indexing / SEO local

| Item | Status |
|---|---|
| `/sitemap.xml` | **195** URLs; all client 187 present |
| `/robots.txt` | Allow `/`; Disallow `/tools/calculator`; Sitemap points to `https://costseg.si/sitemap.xml` |
| Knowledge articles | Indexable (client override 2026-10-14) |
| Calculator | noindex + robots disallow + not in sitemap |
| `npm run build` | **PASS** (208 routes generated) |

## Full project readiness (pass / fail / missing)

| Area | Status | Detail |
|---|---|---|
| Phases 0–8 implementation | **PASS** | See `PHASE_TRACKER.md` |
| Client 187 URL inventory | **PASS** | Matches `docs/SITEMAP.md` / client XML |
| Knowledge Hub content (demo) | **PASS (demo)** | Pages exist; educational draft-level copy |
| Public indexing of hub | **PASS** | Override active — will index on deploy |
| Marketing Group A pages | **PASS** | Routes + CTAs to `/request-a-study` |
| Redirects Default A | **PASS** | `next.config.ts` 301s |
| Tools UI | **PASS** | Questionnaire + workflow explorer |
| Calculator | **PASS (gated)** | Intentionally not in client sitemap |
| Forms / lead capture | **FAIL for live leads** | Mock success until **OQ-08** |
| Real contact details / pricing / testimonials | **MISSING** | Do not invent — **OQ-05–10** |
| Tax/legal counsel sign-off on research | **OPEN** | Soft after index override; risk remains — **OQ-02 / OQ-04** |
| Analytics / consent | **MISSING** | **OQ-12** |
| Staging with crawl guard | **READY (docs)** | Use `COSTSEG_NOINDEX=1` on staging only |
| Production host / DNS / SSL | **BLOCKED** | **OQ-13** |
| Phase 9 production deploy | **NOT STARTED** | Needs separate **Approve Phase 9** |

## How to preview locally (before deploy)

```bash
npm run build
npm run start
# or: npm run dev
```

1. Open http://localhost:3000/sitemap.xml — expect **195** URLs  
2. Spot-check Groups A–H from client list  
3. Confirm `/tools/calculator` stays out of sitemap  
4. Re-run audit: `node scripts/local-readiness-audit.mjs http://127.0.0.1:3000`

## Deploy gate

Do **not** treat this report as production approval.  
When local preview looks good and host access exists, reply:

**Approve Phase 9 — production deploy**

Confirm production env has **no** `COSTSEG_NOINDEX=1`.
