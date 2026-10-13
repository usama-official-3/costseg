# Production Deploy Report — CostSeg SI

**Date:** 2026-10-13  
**Authorization:** Owner replied **Approve** for production deploy (separate from Phase 9).  
**Status:** **Blocked on OQ-13** — no VPS / DNS / SSL access in this environment. Deploy not executed.

---

## Intent (from brief)

1. Build and verify locally / staging  
2. After final approval, deploy to the **client’s VPS**  
3. Verify **costseg.si** DNS + HTTPS before treating launch as complete  

This is **not** a Vercel-linked project yet (no `.vercel/`, no `vercel` CLI, Vercel MCP unauthenticated). Brief target remains client VPS.

---

## Pre-deploy readiness

| Item | Status |
|---|---|
| Frontend build (`npm run build`) | Pass (`VERIFY_EXIT=0`) |
| Lint | Pass (Phase 8) |
| Lockfile (`package-lock.json`) | Present |
| Node | Local 22.11.0 (≥20.9 required) |
| Marketing + tools + knowledge samples | Built |
| SEO (`sitemap.xml` / `robots.txt`) | Present; canonical host `https://costseg.si` |
| Staging procedure | Documented in `STAGING_DEPLOY_NOTES.md` |
| Client review inventory | `PHASE9_STAGING_REPORT.md` |
| VPS SSH / panel credentials | **Missing (OQ-13)** |
| Domain DNS control | **Missing (OQ-13)** |
| Live lead destination (OQ-08) | Open — forms stay **mock** on go-live unless provided |
| Legal/content sign-off (OQ-04 / OQ-09) | Open — draft knowledge labeled as such |

---

## What was not done (and why)

| Action | Why skipped |
|---|---|
| SSH / rsync / Docker deploy to VPS | No host, user, key, or panel access |
| Point `costseg.si` DNS / issue SSL | No registrar or DNS API access |
| `vercel --prod` | Not the briefed target; project not linked; CLI absent |
| Wire live form delivery | OQ-08 unresolved |

---

## Required from owner to execute deploy (OQ-13)

Please provide (secure channel / password manager — do not paste secrets into chat if avoidable):

1. **Host:** IP or hostname of the VPS  
2. **Access:** SSH user + key (or panel URL + deploy method)  
3. **OS / stack:** Ubuntu version? existing Nginx/Caddy? Node already installed?  
4. **App path:** e.g. `/var/www/costseg-si`  
5. **Process manager preference:** systemd / PM2 / Docker  
6. **DNS:** Who controls `costseg.si`? Can we set A/AAAA/CNAME + HTTPS?  
7. **Staging vs prod:** Prefer `staging.costseg.si` smoke first, then cutover?  
8. **Interim option:** If VPS is delayed, authorize **Vercel production** + domain attach instead?

Also optional but recommended before true “launch”:

- OQ-08 lead recipients / webhook  
- Confirm mock forms are acceptable on day one  

---

## Deploy runbook (ready to execute once access lands)

Mirror of staging notes, production hostname:

```bash
# On build machine or CI
npm ci
npm run build

# On VPS (standard path)
# copy release → app dir
npm ci --omit=dev   # if not using standalone
npm run build       # or upload .next artifact
npm start           # behind reverse proxy on :3000
```

Or enable `output: "standalone"` in `next.config.ts` when confirmed useful for the VPS layout (see `STAGING_DEPLOY_NOTES.md`).

**Proxy:** terminate TLS at Nginx/Caddy → `127.0.0.1:3000`.  
**Post-cutover smoke:** Home, Contact mock submit, Knowledge article, Tools, `/sitemap.xml`, HTTPS cert validity, no mixed content.

---

## Residual launch risks (honest)

- Public draft knowledge pages remain labeled draft — OK if owner accepts hybrid soft launch  
- Forms will show success without delivering leads until OQ-08  
- Calculator stays gated  

---

## Exit criteria for this gate

- [x] Production deploy **explicitly approved** by owner  
- [x] Blocker documented (OQ-13)  
- [x] Runbook prepared  
- [ ] Actual VPS deploy + DNS/SSL verification  
- [ ] Post-deploy smoke signed off  

**Next:** Owner supplies OQ-13 access (or authorizes Vercel interim). No further deploy steps are possible without that.
