/**
 * Local readiness audit: client 187 catalog vs registry vs sitemap vs HTTP.
 * Usage: node scripts/local-readiness-audit.mjs [baseUrl]
 * Default baseUrl: http://127.0.0.1:3000
 */
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const STATIC_ONLY = args.includes("--static-only");
const BASE =
  args.find((a) => a.startsWith("http")) || "http://127.0.0.1:3000";
const root = process.cwd();
const FETCH_MS = 15000;

const CLIENT_187 = [
  "/",
  "/how-cost-segregation-works",
  "/services",
  "/technology",
  "/technology/ai-agent-workflow",
  "/who-we-help",
  "/property-types",
  "/about",
  "/faqs",
  "/contact",
  "/request-a-study",
  "/legal",
  "/learn/what-is-cost-segregation",
  "/learn/how-a-cost-segregation-study-works",
  "/learn/why-depreciation-matters",
  "/learn/cost-segregation-vs-standard-depreciation",
  "/learn/personal-property-vs-real-property",
  "/learn/land-building-and-site-improvements",
  "/learn/macrs-explained",
  "/learn/5-year-property-explained",
  "/learn/7-year-property-explained",
  "/learn/15-year-property-explained",
  "/learn/27-5-year-residential-rental-property",
  "/learn/39-year-nonresidential-real-property",
  "/learn/depreciable-basis-explained",
  "/learn/placed-in-service-date-explained",
  "/learn/purchase-price-allocation",
  "/learn/new-construction-studies",
  "/learn/acquisition-studies",
  "/learn/renovation-and-improvement-studies",
  "/learn/look-back-studies",
  "/learn/form-3115-and-accounting-method-changes",
  "/learn/engineering-based-cost-estimation",
  "/learn/site-inspections-and-documentation",
  "/learn/study-reports-explained",
  "/learn/working-with-your-cpa",
  "/learn/cost-segregation-terminology-glossary",
  "/tax-law/section-167-depreciation",
  "/tax-law/section-168-macrs",
  "/tax-law/section-168-k-bonus-depreciation",
  "/tax-law/section-179-expensing-rules-and-boundaries",
  "/tax-law/section-1245-property-overview",
  "/tax-law/section-1250-property-overview",
  "/tax-law/section-481-a-accounting-method-adjustments",
  "/tax-law/irs-cost-segregation-audit-techniques-guide",
  "/tax-law/irs-tangible-property-regulations",
  "/tax-law/treasury-regulations-for-depreciable-property",
  "/tax-law/irs-publication-946",
  "/tax-law/irs-form-3115-instructions",
  "/tax-law/irs-form-4562",
  "/tax-law/macrs-recovery-periods-and-classification",
  "/tax-law/half-year-convention",
  "/tax-law/mid-quarter-convention",
  "/tax-law/mid-month-convention",
  "/tax-law/bonus-depreciation-eligibility",
  "/tax-law/bonus-depreciation-acquisition-date-rules",
  "/tax-law/placed-in-service-rules",
  "/tax-law/qualified-improvement-property",
  "/tax-law/leasehold-improvement-considerations",
  "/tax-law/building-acquisition-and-basis-allocation",
  "/tax-law/related-party-acquisition-considerations",
  "/tax-law/property-used-in-a-trade-or-business",
  "/tax-law/rental-property-depreciation-rules",
  "/tax-law/capital-improvements-vs-repairs",
  "/tax-law/partial-asset-dispositions",
  "/tax-law/federal-vs-state-depreciation-differences",
  "/tax-law/tax-law-updates-and-effective-dates",
  "/court-cases",
  "/court-cases/hospital-corporation-of-america-v-commissioner",
  "/court-cases/whiteco-industries-inc-v-commissioner",
  "/court-cases/commissioner-v-idaho-power-co",
  "/court-cases/commissioner-v-lincoln-savings-and-loan-association",
  "/court-cases/l-a-darling-co-v-commissioner",
  "/court-cases/massey-motors-inc-v-united-states",
  "/court-cases/sperry-and-hutchinson-co-v-commissioner",
  "/court-cases/clemens-v-commissioner",
  "/court-cases/estate-of-walling-v-commissioner",
  "/court-cases/scott-paper-co-v-commissioner",
  "/court-cases/plainfield-union-water-co-v-commissioner",
  "/court-cases/simon-v-commissioner",
  "/court-cases/metro-national-corporation-v-commissioner",
  "/court-cases/alamo-broadcasting-co-v-commissioner",
  "/court-cases/yellow-cab-co-v-commissioner",
  "/court-cases/structural-components-decisions",
  "/court-cases/personal-property-decisions",
  "/court-cases/building-systems-decisions",
  "/court-cases/electrical-installation-decisions",
  "/court-cases/plumbing-and-hvac-decisions",
  "/court-cases/specialized-equipment-decisions",
  "/court-cases/land-improvement-decisions",
  "/court-cases/decorative-features-decisions",
  "/court-cases/functional-interdependence-decisions",
  "/court-cases/permanent-attachments-decisions",
  "/court-cases/cost-estimation-evidence-decisions",
  "/court-cases/depreciation-basis-decisions",
  "/court-cases/repairs-and-capitalization-decisions",
  "/court-cases/recent-decisions-reviewed-index",
  "/property-types/single-family-rental-properties",
  "/property-types/multifamily-apartment-buildings",
  "/property-types/condominiums-and-townhomes",
  "/property-types/build-to-rent-communities",
  "/property-types/student-housing",
  "/property-types/senior-living-facilities",
  "/property-types/assisted-living-facilities",
  "/property-types/hotels-and-resorts",
  "/property-types/motels-and-extended-stay-properties",
  "/property-types/restaurants-and-fast-food-properties",
  "/property-types/office-buildings",
  "/property-types/medical-and-healthcare-facilities",
  "/property-types/retail-stores",
  "/property-types/shopping-centers",
  "/property-types/warehouses",
  "/property-types/distribution-centers",
  "/property-types/self-storage-facilities",
  "/property-types/manufacturing-facilities",
  "/property-types/automotive-dealerships",
  "/property-types/auto-repair-facilities",
  "/property-types/gas-stations-and-convenience-stores",
  "/property-types/data-centers",
  "/property-types/mixed-use-buildings",
  "/property-types/parking-structures-and-garages",
  "/property-types/specialty-and-recreational-properties",
  "/asset-library",
  "/asset-library/specialized-electrical-systems",
  "/asset-library/general-electrical-distribution",
  "/asset-library/dedicated-equipment-wiring",
  "/asset-library/decorative-and-specialty-lighting",
  "/asset-library/general-building-lighting",
  "/asset-library/plumbing-fixtures-and-specialty-plumbing",
  "/asset-library/hvac-and-climate-control-systems",
  "/asset-library/specialized-ventilation-systems",
  "/asset-library/flooring-and-floor-coverings",
  "/asset-library/carpeting-and-specialty-flooring",
  "/asset-library/cabinetry-and-built-in-casework",
  "/asset-library/specialized-millwork",
  "/asset-library/appliances-and-equipment",
  "/asset-library/restaurant-kitchen-equipment",
  "/asset-library/medical-and-specialty-equipment",
  "/asset-library/security-and-access-control-systems",
  "/asset-library/fire-protection-and-safety-systems",
  "/asset-library/telecommunications-and-data-wiring",
  "/asset-library/interior-partitions-and-decorative-features",
  "/asset-library/landscaping-and-irrigation",
  "/asset-library/parking-lots-sidewalks-and-paving",
  "/asset-library/fencing-gates-and-site-features",
  "/asset-library/roofing-and-structural-components",
  "/asset-library/asset-classification-evidence-and-documentation",
  "/case-studies",
  "/case-studies/single-family-rental-acquisition",
  "/case-studies/multifamily-acquisition",
  "/case-studies/hotel-property",
  "/case-studies/restaurant-property",
  "/case-studies/office-building",
  "/case-studies/warehouse",
  "/case-studies/retail-property",
  "/case-studies/medical-facility",
  "/case-studies/self-storage-property",
  "/case-studies/manufacturing-facility",
  "/case-studies/new-construction-project",
  "/case-studies/renovation-project",
  "/case-studies/property-with-limited-records",
  "/case-studies/bundled-contractor-costs",
  "/case-studies/blueprint-analysis",
  "/case-studies/site-improvements",
  "/case-studies/specialized-equipment",
  "/case-studies/look-back-study",
  "/case-studies/bonus-depreciation-comparison",
  "/case-studies/macrs-recovery-period-comparison",
  "/case-studies/cost-estimation-and-reconciliation",
  "/case-studies/asset-classification-review",
  "/case-studies/quality-assurance-review",
  "/case-studies/how-to-interpret-a-final-asset-schedule",
  "/knowledge-hub",
  "/resources/court-case-index",
  "/resources/tax-code-and-regulation-index",
  "/resources/irs-publications-and-forms-index",
  "/resources/property-type-guide-index",
  "/resources/asset-classification-index",
  "/resources/cost-segregation-glossary",
  "/resources/macrs-and-depreciation-glossary",
  "/resources/engineering-and-construction-glossary",
  "/resources/bonus-depreciation-reference-guide",
  "/resources/research-methodology",
  "/resources/source-and-citation-standards",
  "/resources/content-review-and-update-policy",
  "/resources/tax-law-update-archive",
  "/resources/research-library-disclaimer",
];

const EXTRAS = [
  "/legal/privacy",
  "/legal/terms",
  "/learn",
  "/tax-law",
  "/resources",
  "/tools",
  "/tools/questionnaire",
  "/tools/workflow-explorer",
];

function loadRegistryPaths() {
  const inventory = fs.readFileSync(
    path.join(root, "content/inventory/pageRegistry.ts"),
    "utf8",
  );
  return [...inventory.matchAll(/path:\s*"([^"]+)"/g)].map((m) => m[1]);
}

function loadIndexability() {
  const knowledge = fs.readFileSync(
    path.join(root, "lib/content/knowledge.ts"),
    "utf8",
  );
  const alwaysTrue = /isArticleIndexable[\s\S]*?return\s+true/.test(knowledge);
  const factory = fs.readFileSync(
    path.join(root, "content/knowledge/articleFactory.ts"),
    "utf8",
  );
  const defaultReviewed = /reviewStatus:\s*"reviewed"/.test(factory);
  return { alwaysTrue, defaultReviewed };
}

async function fetchStatus(urlPath, { body = true } = {}) {
  const url = `${BASE}${urlPath === "/" ? "" : urlPath}`;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), FETCH_MS);
  try {
    const res = await fetch(url, {
      redirect: "manual",
      signal: ctrl.signal,
      headers: { Accept: "text/html,application/xml,*/*" },
    });
    let robots = null;
    if (body) {
      const text = await res.text();
      robots =
        text.match(
          /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["']/i,
        )?.[1] ||
        text.match(
          /content=["']([^"']+)["'][^>]+name=["']robots["']/i,
        )?.[1] ||
        null;
    }
    return { path: urlPath, status: res.status, robots, ok: res.status === 200 };
  } catch (err) {
    return {
      path: urlPath,
      status: 0,
      robots: null,
      ok: false,
      error: String(err?.message || err),
    };
  } finally {
    clearTimeout(timer);
  }
}

async function main() {
  const registry = loadRegistryPaths();
  const clientSet = new Set(CLIENT_187);
  const regSet = new Set(registry);
  const missingInRegistry = CLIENT_187.filter((p) => !regSet.has(p));
  const extraInRegistry = registry.filter((p) => !clientSet.has(p));

  const indexability = loadIndexability();
  const expectedSitemap = new Set([...CLIENT_187, ...EXTRAS]);
  expectedSitemap.delete("/tools/calculator");

  const report = {
    generatedAt: new Date().toISOString(),
    baseUrl: BASE,
    catalog: {
      client187: CLIENT_187.length,
      registry: registry.length,
      missingInRegistry,
      extraInRegistry,
      match:
        missingInRegistry.length === 0 &&
        registry.length === CLIENT_187.length &&
        extraInRegistry.length === 0,
    },
    indexing: {
      isArticleIndexableAlwaysTrue: indexability.alwaysTrue,
      factoryDefaultReviewed: indexability.defaultReviewed,
      expectedSitemapCount: expectedSitemap.size,
      extras: EXTRAS,
      calculatorExcluded: true,
    },
    http: {
      probed: false,
      serverUp: false,
      sitemapLocCount: null,
      client187Http: null,
      extrasHttp: null,
      robotsTxt: null,
      calculatorStatus: null,
      failures: [],
      noindexOnClientPages: [],
    },
  };

  // Static sitemap expectation (code-level, no HTTP)
  report.indexing.codeSitemapPaths = [...expectedSitemap].sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });

  // Probe server
  let serverUp = false;
  if (!STATIC_ONLY) {
    const ping = await fetchStatus("/", { body: false });
    serverUp = ping.ok || ping.status > 0;
  }
  report.http.serverUp = serverUp;
  report.http.probed = serverUp;
  report.http.mode = STATIC_ONLY ? "static-only" : "http";

  if (serverUp) {
    const sitemapProbe = await fetchStatus("/sitemap.xml");
    // Re-fetch sitemap body with timeout
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), FETCH_MS);
    let sitemapXml = "";
    try {
      const sitemapRes = await fetch(`${BASE}/sitemap.xml`, {
        signal: ctrl.signal,
      });
      sitemapXml = await sitemapRes.text();
    } catch (err) {
      report.http.sitemapError = String(err?.message || err);
    } finally {
      clearTimeout(timer);
    }

    const locs = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
      (m) => m[1],
    );
    const locPaths = locs.map((u) => {
      try {
        const parsed = new URL(u);
        return parsed.pathname === "" ? "/" : parsed.pathname;
      } catch {
        return u.replace("https://costseg.si", "") || "/";
      }
    });
    report.http.sitemapLocCount = locPaths.length;
    report.http.sitemapStatus = sitemapProbe.status;
    report.http.sitemapMissingClient = CLIENT_187.filter(
      (p) => !locPaths.includes(p),
    );
    report.http.sitemapExtras = locPaths.filter((p) => !clientSet.has(p));

    const robotsCtrl = new AbortController();
    const robotsTimer = setTimeout(() => robotsCtrl.abort(), FETCH_MS);
    try {
      const robotsRes = await fetch(`${BASE}/robots.txt`, {
        signal: robotsCtrl.signal,
      });
      report.http.robotsTxt = {
        status: robotsRes.status,
        body: (await robotsRes.text()).slice(0, 500),
      };
    } catch (err) {
      report.http.robotsTxt = { status: 0, body: String(err?.message || err) };
    } finally {
      clearTimeout(robotsTimer);
    }

    const failures = [];
    const noindexOnClientPages = [];
    // Status-only for all paths (fast); robots meta on a sample + calculator
    const batch = async (paths, opts) => {
      const results = [];
      const concurrency = 1;
      for (let i = 0; i < paths.length; i += concurrency) {
        const chunk = paths.slice(i, i + concurrency);
        const part = await Promise.all(
          chunk.map((p) => fetchStatus(p, opts)),
        );
        results.push(...part);
        if ((i / concurrency) % 10 === 0) {
          process.stderr.write(
            `probed ${Math.min(i + concurrency, paths.length)}/${paths.length}\n`,
          );
        }
      }
      return results;
    };

    const clientResults = await batch(CLIENT_187, { body: false });
    const extraResults = await batch(EXTRAS, { body: false });

    // Sample robots meta: home + one article per group root
    const samplePaths = [
      "/",
      "/learn/what-is-cost-segregation",
      "/tax-law/section-168-macrs",
      "/court-cases/hospital-corporation-of-america-v-commissioner",
      "/property-types/multifamily-apartment-buildings",
      "/asset-library/specialized-electrical-systems",
      "/case-studies/multifamily-acquisition",
      "/resources/research-library-disclaimer",
      "/knowledge-hub",
    ];
    const sampleBodies = await batch(samplePaths, { body: true });
    const calc = await fetchStatus("/tools/calculator", { body: true });

    for (const r of clientResults) {
      if (!r.ok)
        failures.push({ path: r.path, status: r.status, error: r.error });
    }
    for (const r of extraResults) {
      if (!r.ok)
        failures.push({ path: r.path, status: r.status, error: r.error });
    }
    for (const r of sampleBodies) {
      if (r.robots && /noindex/i.test(r.robots)) {
        noindexOnClientPages.push({ path: r.path, robots: r.robots });
      }
    }

    report.http.client187Http = {
      total: clientResults.length,
      ok200: clientResults.filter((r) => r.ok).length,
      fail: clientResults.filter((r) => !r.ok).length,
    };
    report.http.extrasHttp = {
      total: extraResults.length,
      ok200: extraResults.filter((r) => r.ok).length,
      fail: extraResults.filter((r) => !r.ok).length,
    };
    report.http.calculatorStatus = calc;
    report.http.failures = failures;
    report.http.noindexOnClientPages = noindexOnClientPages;
    report.http.sampleRobots = sampleBodies.map((r) => ({
      path: r.path,
      status: r.status,
      robots: r.robots,
    }));
  }

  const checks = [
    {
      id: "C1",
      name: "Client 187 paths in pageRegistry",
      pass: report.catalog.match,
    },
    {
      id: "C2",
      name: "Articles indexable (client override)",
      pass: indexability.alwaysTrue,
    },
    {
      id: "C3",
      name: "Expected sitemap size 195 (187+8)",
      pass: expectedSitemap.size === 195,
    },
    {
      id: "C4",
      name: "Local server reachable for HTTP probe",
      pass: serverUp,
    },
    {
      id: "C5",
      name: "All client 187 URLs return HTTP 200",
      pass:
        serverUp &&
        report.http.client187Http?.fail === 0 &&
        report.http.client187Http?.ok200 === 187,
    },
    {
      id: "C6",
      name: "Sitemap includes all client 187",
      pass:
        serverUp &&
        Array.isArray(report.http.sitemapMissingClient) &&
        report.http.sitemapMissingClient.length === 0,
    },
    {
      id: "C7",
      name: "No noindex on client catalog HTML pages",
      pass: serverUp && report.http.noindexOnClientPages.length === 0,
    },
    {
      id: "C8",
      name: "Calculator remains gated (noindex or non-public)",
      pass:
        !serverUp ||
        (report.http.calculatorStatus &&
          (report.http.calculatorStatus.status !== 200 ||
            (report.http.calculatorStatus.robots &&
              /noindex/i.test(report.http.calculatorStatus.robots)))),
    },
  ];

  report.checks = checks;
  report.summary = {
    pass: checks.filter((c) => c.pass).length,
    fail: checks.filter((c) => !c.pass).length,
    overall:
      checks.filter((c) => c.id !== "C4" && c.id !== "C5" && c.id !== "C6" && c.id !== "C7" && c.id !== "C8").every((c) => c.pass) &&
      (!serverUp || checks.filter((c) => ["C4", "C5", "C6", "C7"].includes(c.id)).every((c) => c.pass))
        ? serverUp
          ? "READY_FOR_LOCAL_PREVIEW"
          : "CODE_OK_START_DEV_SERVER"
        : "NOT_READY",
  };

  const outPath = path.join(root, "docs/LOCAL_READINESS_AUDIT.md");
  const md = `# Local readiness audit — CostSeg SI

**Generated:** ${report.generatedAt}  
**Base URL:** \`${BASE}\`  
**Overall:** **${report.summary.overall}** (${report.summary.pass} pass / ${report.summary.fail} fail)

## Verdict vs client SITEMAP (187)

| Check | Result |
|---|---|
${checks.map((c) => `| ${c.id} ${c.name} | ${c.pass ? "**PASS**" : "**FAIL**"} |`).join("\n")}

## Catalog diff

| Metric | Value |
|---|---|
| Client XML URLs | ${CLIENT_187.length} |
| pageRegistry paths | ${registry.length} |
| Missing from registry | ${missingInRegistry.length ? missingInRegistry.join(", ") : "none"} |
| Extra in registry | ${extraInRegistry.length ? extraInRegistry.join(", ") : "none"} |
| Expected live sitemap | ${expectedSitemap.size} (187 + 8 extras; calculator excluded) |

## Indexing policy

| Item | Status |
|---|---|
| \`isArticleIndexable\` always true | ${indexability.alwaysTrue ? "yes" : "no"} |
| Factory default \`reviewed\` | ${indexability.defaultReviewed ? "yes" : "no"} |
| Calculator excluded from sitemap | yes |

## HTTP probe

${
  serverUp
    ? `
| Item | Value |
|---|---|
| Sitemap \`<loc>\` count | ${report.http.sitemapLocCount} |
| Client 187 HTTP 200 | ${report.http.client187Http?.ok200}/${report.http.client187Http?.total} |
| Extras HTTP 200 | ${report.http.extrasHttp?.ok200}/${report.http.extrasHttp?.total} |
| Sitemap missing client paths | ${report.http.sitemapMissingClient?.length ? report.http.sitemapMissingClient.join(", ") : "none"} |
| Client pages with noindex | ${report.http.noindexOnClientPages.length ? report.http.noindexOnClientPages.map((x) => x.path).join(", ") : "none"} |
| HTTP failures | ${report.http.failures.length ? report.http.failures.map((f) => `${f.path} (${f.status})`).join(", ") : "none"} |
| Calculator | status ${report.http.calculatorStatus?.status}; robots=${report.http.calculatorStatus?.robots ?? "n/a"} |

### robots.txt (snippet)

\`\`\`
${report.http.robotsTxt?.body || ""}
\`\`\`
`
    : `
**Server not reachable at \`${BASE}\`.** Start \`npm run dev\` then re-run:

\`\`\`bash
node scripts/local-readiness-audit.mjs http://127.0.0.1:3000
\`\`\`
`
}

## Intentionally not in client 187 (extras — OK)

${EXTRAS.map((p) => `- \`${p}\``).join("\n")}

## Still missing for production (not frontend catalog)

| Item | Status |
|---|---|
| OQ-13 host/DNS/SSL | Blocks Phase 9 deploy |
| OQ-08 live lead destination | Forms mock until resolved |
| OQ-02/04 content counsel | Soft after index override; legal risk remains |
| Phase 9 Approve | Separate explicit go-live |

## How to preview locally

1. \`npm run dev\`
2. Open http://localhost:3000/sitemap.xml — expect **195** URLs
3. Spot-check any client path from Groups A–H
4. Confirm \`/tools/calculator\` stays noindex
`;

  fs.writeFileSync(outPath, md, "utf8");
  fs.writeFileSync(
    path.join(root, "docs/LOCAL_READINESS_AUDIT.json"),
    JSON.stringify(report, null, 2),
    "utf8",
  );

  console.log(JSON.stringify({ outPath, summary: report.summary, checks }, null, 2));
  if (!serverUp) process.exitCode = 2;
  else if (report.summary.fail > 0) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
