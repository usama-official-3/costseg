# Staging Deploy Notes — CostSeg SI

**Status:** Prepared for staging when host access is available (OQ-13).  
**Not authorized:** Production cutover to `costseg.si` without a separate explicit production-deploy approval (Phase 9).

## Runtime

| Item | Value |
|---|---|
| App | Next.js 16.4 App Router (`costseg-si`) |
| Node | **20.9+** required; verified local build on **22.x** |
| Package manager | npm (`package-lock.json` — use `npm ci`) |
| Start | `npm run build` then `npm start` |
| Default port | `3000` (`PORT` env overrides) |

## Recommended staging topology

1. Staging hostname (example): `staging.costseg.si` — confirm with owner.  
2. Reverse proxy (Nginx/Caddy) → `127.0.0.1:3000`.  
3. TLS via Let’s Encrypt (or host cert).  
4. **Access control:** HTTP basic auth or VPN so draft knowledge is not publicly crawled.  
5. Process manager: systemd or PM2.

## Build & run

```bash
git clone <repo> && cd CostSeg_SI
npm ci
# Optional staging crawl block:
# export COSTSEG_NOINDEX=1
npm run build
npm start
```

Smoke after start:

- `/`
- `/how-cost-segregation-works`
- `/knowledge-hub`
- `/learn/what-is-cost-segregation` (expect draft / noindex)
- `/tools`, `/tools/questionnaire`, `/tools/workflow-explorer`
- `/tools/calculator` (gated)
- `/contact`, `/request-a-study`
- `/sitemap.xml`, `/robots.txt`

## Staging SEO guardrails

| Control | Behavior |
|---|---|
| `COSTSEG_NOINDEX=1` | `robots.txt` Disallow `/` |
| `VERCEL_ENV=preview` | Same disallow (automatic) |
| Production unset | Allow `/`, disallow `/tools/calculator` |
| Draft articles | `noindex` via metadata; omitted from sitemap |

Do **not** point production DNS (`costseg.si`) at staging without Phase 9 approval.

## Environment variables

| Variable | When |
|---|---|
| `COSTSEG_NOINDEX=1` | Public staging without auth |
| Lead webhook / email | After OQ-08 |
| Analytics IDs | After OQ-12 |

Frontend-first: **no required secrets** for marketing + mock leads.

## Optional standalone output

Enable `output: "standalone"` in `next.config.ts` only after host method is confirmed (OQ-13).

## Post-deploy checklist

- [ ] HTTPS valid; no mixed content  
- [ ] Home hero + logo lockup  
- [ ] Desktop header + mobile bottom nav  
- [ ] Contact + Request Study: validation + mock success  
- [ ] Knowledge Hub search + draft article badges  
- [ ] Questionnaire + workflow explorer; calculator gated  
- [ ] `/sitemap.xml` and `/robots.txt`  
- [ ] No horizontal scroll at 320px on Home / Hub / Contact  
- [ ] Lighthouse (mobile) Home + one article — record when run  

## Blockers before production

OQ-13 (VPS/DNS/SSL), OQ-08 (leads), OQ-02/OQ-04 (content review before indexing drafts), OQ-09 (legal), OQ-12 (analytics).
