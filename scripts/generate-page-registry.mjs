import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const md = fs.readFileSync(path.join(root, "docs/SITEMAP.md"), "utf8");
const rows = [
  ...md.matchAll(/\|\s*\d+\s*\|\s*([^|]+?)\s*\|\s*`(\/[^`]+)`\s*\|/g),
];
const entries = rows.map((m) => ({ title: m[1].trim(), path: m[2] }));

if (!entries.some((e) => e.path === "/")) {
  entries.unshift({ title: "Home", path: "/" });
}

const sampleSlugs = new Set([
  // Group B batches 1–2
  "what-is-cost-segregation",
  "how-a-cost-segregation-study-works",
  "why-depreciation-matters",
  "cost-segregation-vs-standard-depreciation",
  "personal-property-vs-real-property",
  "land-building-and-site-improvements",
  "macrs-explained",
  "5-year-property-explained",
  "7-year-property-explained",
  "15-year-property-explained",
  "27-5-year-residential-rental-property",
  "39-year-nonresidential-real-property",
  "depreciable-basis-explained",
  "placed-in-service-date-explained",
  "purchase-price-allocation",
  "new-construction-studies",
  // Other group seeds
  "section-168-macrs",
  "hospital-corporation-of-america-v-commissioner",
  "multifamily-apartment-buildings",
  "specialized-electrical-systems",
  "multifamily-acquisition",
  "research-library-disclaimer",
]);

const liveSite = new Set([
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
  "/knowledge-hub",
  "/learn",
  "/tax-law",
  "/court-cases",
  "/asset-library",
  "/case-studies",
  "/resources",
]);

const rootMap = {
  "how-cost-segregation-works": "site",
  services: "site",
  technology: "site",
  "who-we-help": "site",
  about: "site",
  faqs: "site",
  contact: "site",
  "request-a-study": "site",
  legal: "site",
  "property-types": "properties",
  learn: "fundamentals",
  "tax-law": "tax-law",
  "court-cases": "cases",
  "asset-library": "assets",
  "case-studies": "studies",
  resources: "resources",
  "knowledge-hub": "site",
};

function groupFor(p) {
  if (p === "/" || p === "/knowledge-hub") return "site";
  const segment = p.split("/").filter(Boolean)[0];
  return rootMap[segment] || "site";
}

function statusFor(p) {
  if (liveSite.has(p)) return "live-route";
  const parts = p.split("/").filter(Boolean);
  const slug = parts[parts.length - 1];
  if (sampleSlugs.has(slug) && parts.length >= 2) return "sample-draft";
  return "planned";
}

const lines = [
  "/**",
  " * Canonical 187-URL inventory from docs/SITEMAP.md.",
  " * Statuses track scaffolding only — do not invent article bodies here.",
  " * Regenerate: node scripts/generate-page-registry.mjs",
  " */",
  "",
  'export type InventoryStatus = "live-route" | "sample-draft" | "planned";',
  "",
  "export type InventoryGroup =",
  '  | "site"',
  '  | "fundamentals"',
  '  | "tax-law"',
  '  | "cases"',
  '  | "properties"',
  '  | "assets"',
  '  | "studies"',
  '  | "resources";',
  "",
  "export type InventoryEntry = {",
  "  title: string;",
  "  path: string;",
  "  group: InventoryGroup;",
  "  status: InventoryStatus;",
  "};",
  "",
  "export const pageInventory: InventoryEntry[] = [",
];

for (const entry of entries) {
  const title = entry.title.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  lines.push(
    `  { title: "${title}", path: "${entry.path}", group: "${groupFor(entry.path)}", status: "${statusFor(entry.path)}" },`,
  );
}

lines.push(
  "];",
  "",
  "export function getInventoryByGroup(group: InventoryGroup): InventoryEntry[] {",
  "  return pageInventory.filter((entry) => entry.group === group);",
  "}",
  "",
  "export function getInventoryByStatus(status: InventoryStatus): InventoryEntry[] {",
  "  return pageInventory.filter((entry) => entry.status === status);",
  "}",
  "",
  "export function countInventoryByStatus(): Record<InventoryStatus, number> {",
  "  return pageInventory.reduce(",
  "    (acc, entry) => {",
  "      acc[entry.status] += 1;",
  "      return acc;",
  "    },",
  '    { "live-route": 0, "sample-draft": 0, planned: 0 },',
  "  );",
  "}",
  "",
);

const out = path.join(root, "content/inventory/pageRegistry.ts");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, lines.join("\n"));

const counts = { "live-route": 0, "sample-draft": 0, planned: 0 };
for (const entry of entries) counts[statusFor(entry.path)] += 1;
console.log({ total: entries.length, ...counts, out });
