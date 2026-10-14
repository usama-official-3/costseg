import fs from "node:fs";

const inventory = fs.readFileSync("content/inventory/pageRegistry.ts", "utf8");
const catalog = [
  ...inventory.matchAll(/path:\s*"([^"]+)"/g),
].map((m) => m[1]);

const articleFiles = [
  "fundamentals.ts",
  "fundamentalsBatch3.ts",
  "taxLaw.ts",
  "cases.ts",
  "properties.ts",
  "assets.ts",
  "studies.ts",
  "resources.ts",
];
let articleSlugs = 0;
for (const name of articleFiles) {
  const raw = fs.readFileSync(`content/knowledge/articles/${name}`, "utf8");
  articleSlugs += (raw.match(/^\s*slug:/gm) || []).length;
}

const extras = [
  "/legal/privacy",
  "/legal/terms",
  "/learn",
  "/tax-law",
  "/resources",
  "/tools",
  "/tools/questionnaire",
  "/tools/workflow-explorer",
];

const groupIndexes = [
  "/learn",
  "/tax-law",
  "/court-cases",
  "/property-types",
  "/asset-library",
  "/case-studies",
  "/resources",
];

const merged = new Set([...catalog, ...groupIndexes, ...extras]);
merged.delete("/tools/calculator");

// Article paths are already mostly in catalog; count unique sitemap size
console.log(
  JSON.stringify(
    {
      catalog187: catalog.length,
      articleModules: articleSlugs,
      uniqueSitemapPaths: merged.size,
      hasCalculator: merged.has("/tools/calculator"),
      extras: extras.filter((p) => merged.has(p)),
      sample: [...merged].sort().slice(0, 8),
    },
    null,
    2,
  ),
);
