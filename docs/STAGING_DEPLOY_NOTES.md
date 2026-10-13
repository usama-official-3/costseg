# Staging Deploy Notes — CostSeg SI

**Status:** Prepared for staging when host access is available (OQ-13).  
**Not authorized:** Production cutover to `costseg.si` without a separate explicit production-deploy approval.

## Runtime

| Item | Value |
|---|---|
| App | Next.js 16.4 App Router (`costseg-si`) |
| Node | **20.9+** required; verified local build on **22.11.0** |
| Package manager | npm (`package-lock.json` present — use `npm ci`) |
| Start command | `npm run build` then `npm start` (or standalone — see below) |
| Default port | `3000` (`PORT` env overrides) |

## Recommended staging topology

1. **Staging hostname** (example): `staging.costseg.si` or IP + hosts entry — confirm with owner.
2. **Reverse proxy** (Nginx/Caddy) → Node process on `127.0.0.1:3000`.
3. **TLS** via Let’s Encrypt (or host-provided cert) on the staging hostname.
4. **Access control:** HTTP basic auth or VPN preferred so draft knowledge content is not indexed.
5. **Process manager:** systemd or PM2 with restart-on-boot.

## Build & run (standard)

```bash
git clone <repo> && cd CostSeg_SI
npm ci
npm run build
npm start
```

Smoke after start: open `/`, `/knowledge`, `/tools`, `/contact`, `/sitemap.xml`, `/robots.txt`.

## Optional: standalone output (VPS / Docker)

If the host prefers a minimal artifact, enable in `next.config.ts`:

```ts
output: "standalone",
```

Then after `npm run build`:

1. Copy `public` → `.next/standalone/public`
2. Copy `.next/static` → `.next/standalone/.next/static`
3. Run `node .next/standalone/server.js` with `HOSTNAME=127.0.0.1` and `PORT=3000`

Do **not** enable standalone until the staging host method is confirmed (OQ-13).

## Staging SEO guardrails

Current `app/robots.ts` **allows** indexing for production domain `https://costseg.si`.

Before any public staging URL:

- Prefer auth / noindex at the proxy layer, **or**
- Temporarily set staging `robots` to `Disallow: /` via env-aware config once env strategy is approved
- Do not point production DNS (`costseg.si`) at staging without production approval

## Environment variables

Frontend-first build: **no required secrets** for marketing pages or mock lead submit.

| Variable | Needed when |
|---|---|
| Lead webhook / email destination | OQ-08 resolved |
| Analytics IDs | OQ-12 resolved |
| `NODE_ENV=production` | Set by `next start` automatically |

Add a `.env.example` only after live integrations are approved.

## Post-deploy staging checklist (owner)

- [ ] HTTPS valid; no mixed content
- [ ] Home hero + logo lockup render
- [ ] Desktop header + mobile bottom nav (Home / Research / Tools / Contact)
- [ ] Contact + Request Study: validation errors + mock success
- [ ] Knowledge search/filter + one sample article per group
- [ ] Questionnaire multi-step submit (mock)
- [ ] Workflow explorer navigable; calculator remains gated
- [ ] `/sitemap.xml` and `/robots.txt` reachable
- [ ] 404 page branded recovery links
- [ ] No horizontal scroll at 320px on Home / Knowledge / Contact
- [ ] Lighthouse (mobile) on Home + one article — record scores in Phase 9 report appendix when run

## Blockers before production

See `docs/OPEN_QUESTIONS.md` — especially OQ-08 (leads), OQ-04/09 (legal/content review), OQ-13 (VPS/DNS/SSL), OQ-12 (analytics).
