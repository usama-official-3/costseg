/**
 * Generates Phase 4 draft demo article modules for Groups B–H.
 * Run: node scripts/generate-phase4-articles.mjs
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const md = fs.readFileSync(path.join(root, "docs/SITEMAP.md"), "utf8");

const existingB = new Set([
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
]);

/** @type {Record<string, { group: string; category: string; kind: string; prefix: string }>} */
const groupMeta = {
  learn: {
    group: "fundamentals",
    category: "Fundamentals",
    kind: "company-education",
    prefix: "learn",
  },
  "tax-law": {
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    prefix: "tax-law",
  },
  "court-cases": {
    group: "cases",
    category: "Court cases",
    kind: "primary-authority",
    prefix: "court-cases",
  },
  "property-types": {
    group: "properties",
    category: "Property guides",
    kind: "company-education",
    prefix: "property-types",
  },
  "asset-library": {
    group: "assets",
    category: "Asset library",
    kind: "company-education",
    prefix: "asset-library",
  },
  "case-studies": {
    group: "studies",
    category: "Case studies",
    kind: "illustrative-example",
    prefix: "case-studies",
  },
  resources: {
    group: "resources",
    category: "Resources",
    kind: "company-education",
    prefix: "resources",
  },
};

const rows = [
  ...md.matchAll(/\|\s*\d+\s*\|\s*([^|]+?)\s*\|\s*`(\/[^`]+)`\s*\|/g),
].map((m) => ({ title: m[1].trim(), path: m[2] }));

function slugFromPath(p) {
  const parts = p.split("/").filter(Boolean);
  return parts[parts.length - 1];
}

function rootOf(p) {
  return p.split("/").filter(Boolean)[0];
}

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function relatedFor(slug, peers) {
  const idx = peers.findIndex((p) => p.slug === slug);
  const picks = [];
  if (idx > 0) picks.push(peers[idx - 1].slug);
  if (idx < peers.length - 1) picks.push(peers[idx + 1].slug);
  if (peers[0] && peers[0].slug !== slug) picks.push(peers[0].slug);
  return [...new Set(picks)].slice(0, 3);
}

function bodyFundamentals(title) {
  return [
    `${title} is part of the CostSeg SI educational fundamentals library. This demo article explains process and vocabulary used when stakeholders discuss cost segregation and depreciation timing.`,
    `Teams typically coordinate engineering or cost analysis with a CPA who owns filing positions. Outcomes depend on property facts, documentation quality, and current authority — not marketing labels.`,
    `Nothing on this page promises tax savings, audit results, or fixed turnaround times. Engage qualified professionals for advice specific to your property and tax year.`,
    `Use related fundamentals pages to continue building vocabulary before reading tax-law or case-study demos in the Knowledge Hub.`,
  ];
}

function bodyTax(title) {
  return [
    `${title} is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.`,
    `This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.`,
    `Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.`,
    `Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.`,
  ];
}

function bodyCase(title, isTheme) {
  if (isTheme) {
    return [
      `${title} is a thematic research-index demo page. It groups conversation topics that appear when readers explore cost segregation case law — it is not itself a judicial opinion.`,
      `Individual decisions must be verified for citation, court, date, holding, and relevance to cost segregation before anyone treats them as authority.`,
      `Until counsel review is complete, treat every linked or adjacent case stub as a research shortlist item only.`,
      `Do not cite this thematic page as a holding summary.`,
    ];
  }
  return [
    `${title} appears on the CostSeg SI concept research shortlist for educational navigation.`,
    `Citation, court, decision date, holding, reasoning, and cost-segregation relevance are pending verification. This page is a template demonstration only.`,
    `Do not cite this stub as a finished legal summary or rely on it for a filing position.`,
    `After qualified review, replace placeholder fields with verified opinion metadata and an official source link.`,
  ];
}

function bodyProperty(title) {
  return [
    `${title} is an educational property-type guide in the CostSeg SI demo library. It outlines themes analysts often review when discussing cost segregation for this property category.`,
    `Typical conversations cover building structure, finishes, specialty systems, and site improvements — always filtered by how the specific asset is built and used.`,
    `No asset class, recovery period, or reclassification percentage is assumed for every property in this category. Facts and authority control outcomes.`,
    `Coordinate any study with a CPA. This guide is vocabulary and process orientation, not individualized tax advice.`,
  ];
}

function bodyAsset(title) {
  return [
    `${title} is an educational asset-classification note. Cost segregation discussions often examine how this category of component functions inside a building or on a site.`,
    `Whether a particular installation is shorter-lived personal property, a land improvement, or part of the building depends on facts, evidence, and applicable authority — not vendor names alone.`,
    `Do not treat this page as a categorical tax conclusion for any SKU, finish schedule, or project.`,
    `Document function, attachment, and evidence carefully, then have qualified reviewers confirm classification before filing.`,
  ];
}

function bodyStudy(title) {
  return [
    `${title} is a hypothetical / illustrative worked example for the CostSeg SI demo library. It shows how a reader might think through documents and classification questions — not a real client engagement.`,
    `Numbers such as reclassification percentages, year-one deductions, fees, and savings are intentionally omitted so this page cannot be mistaken for a results claim.`,
    `Assumptions are stated so the scenario stays clearly educational. Your property will differ.`,
    `Use the example to learn process vocabulary, then work with a CPA and a formal study when you need advice on actual facts.`,
  ];
}

function bodyResource(title) {
  return [
    `${title} is a Knowledge Hub resource page in the CostSeg SI demo library. It helps readers navigate educational materials, glossaries, and indexes.`,
    `Linked research pages may still be draft. Draft content is not indexed for search engines until reviewStatus is promoted after client or counsel approval.`,
    `Resource pages do not replace primary legal authorities or professional advice.`,
    `See the research library disclaimer for overarching limitations on educational use.`,
  ];
}

function takeaways(kind, title) {
  if (kind === "cases") {
    return [
      `"${title}" is research-shortlist / demo content until verified.`,
      "Do not cite unfinished stubs as authority.",
      "Confirm citation, holding, and relevance before publication.",
    ];
  }
  if (kind === "studies") {
    return [
      "This scenario is hypothetical and omits results numbers.",
      "Assumptions are required reading — not optional footnotes.",
      "Educational only — not a promise of similar outcomes.",
    ];
  }
  if (kind === "tax-law") {
    return [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ];
  }
  return [
    `${title} is draft educational demo content.`,
    "Facts and authority control any real classification.",
    "Not individualized tax, legal, or accounting advice.",
  ];
}

function sourcesFor(meta, title) {
  if (meta.group === "tax-law") {
    return [
      {
        label: `Official source for: ${title}`,
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ];
  }
  if (meta.group === "cases") {
    return [
      {
        label: "Official opinion source — pending verification",
      },
    ];
  }
  if (meta.group === "fundamentals" || meta.group === "properties" || meta.group === "assets") {
    return [
      {
        label: "IRS Cost Segregation Audit Techniques Guide (reference)",
        note: "Confirm current IRS publication URL before citing as authority.",
      },
    ];
  }
  return [];
}

function articleObject(entry, peers, meta) {
  const { title, slug } = entry;
  const isCaseTheme =
    meta.group === "cases" &&
    (slug.endsWith("-decisions") || slug.includes("reviewed-index"));
  const isNamedCase =
    meta.group === "cases" && !isCaseTheme && slug.includes("v-");

  let body;
  if (meta.group === "fundamentals") body = bodyFundamentals(title);
  else if (meta.group === "tax-law") body = bodyTax(title);
  else if (meta.group === "cases") body = bodyCase(title, isCaseTheme);
  else if (meta.group === "properties") body = bodyProperty(title);
  else if (meta.group === "assets") body = bodyAsset(title);
  else if (meta.group === "studies") body = bodyStudy(title);
  else body = bodyResource(title);

  const sections = [
    {
      heading: "How to use this page",
      paragraphs: [
        "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
        "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
      ],
    },
  ];

  const obj = {
    slug,
    title,
    summary: `${title} — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.`,
    group: meta.group,
    category: meta.category,
    kind: meta.kind,
    keyTakeaways: takeaways(meta.group, title),
    body,
    sections,
    sources: sourcesFor(meta, title),
    relatedSlugs: relatedFor(slug, peers),
  };

  if (meta.group === "studies") {
    obj.assumptions = [
      "Hypothetical scenario for education only",
      "No real client, property address, or fee schedule",
      "Quantitative results intentionally omitted",
      "Not based on a verified engagement",
    ];
  }

  if (meta.group === "cases") {
    obj.court = "To be verified";
    obj.citation = "To be verified";
    obj.decisionDate = "To be verified";
    obj.holding =
      "Pending verification — do not cite as a finished holding summary.";
    obj.relevance = isNamedCase
      ? "Listed on the concept research shortlist; cost-segregation relevance must be confirmed before publication."
      : "Thematic index page — verify any underlying decisions before treating themes as precedent.";
    obj.verificationNote =
      "Research shortlist / demo stub. Confirm citation, holding, and relevance before publishing as authority.";
  }

  if (slug === "research-library-disclaimer") {
    obj.reviewStatus = "internal-review";
  }

  return obj;
}

function serializeArticle(obj) {
  const lines = ["  draftArticle({"];
  for (const [key, value] of Object.entries(obj)) {
    if (key === "reviewStatus") {
      lines.push(`    reviewStatus: "${value}",`);
      continue;
    }
    if (typeof value === "string") {
      lines.push(`    ${key}: "${esc(value)}",`);
    } else if (Array.isArray(value) && typeof value[0] === "string") {
      lines.push(`    ${key}: [`);
      for (const item of value) lines.push(`      "${esc(item)}",`);
      lines.push(`    ],`);
    } else if (Array.isArray(value) && value[0] && value[0].heading) {
      lines.push(`    sections: [`);
      for (const sec of value) {
        lines.push(`      {`);
        lines.push(`        heading: "${esc(sec.heading)}",`);
        lines.push(`        paragraphs: [`);
        for (const p of sec.paragraphs) lines.push(`          "${esc(p)}",`);
        lines.push(`        ],`);
        lines.push(`      },`);
      }
      lines.push(`    ],`);
    } else if (Array.isArray(value) && value[0] && value[0].label) {
      lines.push(`    sources: [`);
      for (const s of value) {
        lines.push(`      {`);
        lines.push(`        label: "${esc(s.label)}",`);
        if (s.note) lines.push(`        note: "${esc(s.note)}",`);
        lines.push(`      },`);
      }
      lines.push(`    ],`);
    }
  }
  lines.push("  }),");
  return lines.join("\n");
}

/** Collect article entries by export module */
const modules = {
  fundamentalsBatch3: [],
  taxLaw: [],
  cases: [],
  properties: [],
  assets: [],
  studies: [],
  resources: [],
};

for (const row of rows) {
  const r = rootOf(row.path);
  const meta = groupMeta[r];
  if (!meta) continue;
  // Skip group index roots that are not article slugs
  if (
    row.path === "/court-cases" ||
    row.path === "/asset-library" ||
    row.path === "/case-studies" ||
    row.path === "/knowledge-hub" ||
    row.path === "/property-types" ||
    row.path === "/learn" ||
    row.path === "/tax-law" ||
    row.path === "/resources"
  ) {
    continue;
  }
  const slug = slugFromPath(row.path);
  if (meta.group === "fundamentals" && existingB.has(slug)) continue;

  const entry = { title: row.title, slug, path: row.path };
  if (meta.group === "fundamentals") modules.fundamentalsBatch3.push(entry);
  else if (meta.group === "tax-law") modules.taxLaw.push(entry);
  else if (meta.group === "cases") modules.cases.push(entry);
  else if (meta.group === "properties") modules.properties.push(entry);
  else if (meta.group === "assets") modules.assets.push(entry);
  else if (meta.group === "studies") modules.studies.push(entry);
  else if (meta.group === "resources") modules.resources.push(entry);
}

function writeModule(fileName, exportName, groupKey, entries, extraHeader = "") {
  const meta = Object.values(groupMeta).find((g) => g.group === groupKey);
  const peers = entries.map((e) => ({ slug: e.slug }));
  const articles = entries.map((e) => articleObject(e, peers, meta));

  const body = articles.map(serializeArticle).join("\n\n");
  const content = `import { draftArticle } from "@/content/knowledge/articleFactory";
import type { KnowledgeArticle } from "@/lib/schemas/knowledge";

${extraHeader}/**
 * Phase 4 draft demo articles — ${meta.category}.
 * All draft / noindex until client or counsel promotes reviewStatus.
 */
export const ${exportName}: KnowledgeArticle[] = [
${body}
];
`;

  const out = path.join(root, "content/knowledge/articles", fileName);
  fs.writeFileSync(out, content);
  console.log(`wrote ${fileName} (${articles.length})`);
  return articles.length;
}

const outDir = path.join(root, "content/knowledge/articles");
fs.mkdirSync(outDir, { recursive: true });

let total = 0;
total += writeModule(
  "fundamentalsBatch3.ts",
  "fundamentalsBatch3Articles",
  "fundamentals",
  modules.fundamentalsBatch3,
);
total += writeModule("taxLaw.ts", "taxLawArticles", "tax-law", modules.taxLaw);
total += writeModule("cases.ts", "casesArticles", "cases", modules.cases);
total += writeModule(
  "properties.ts",
  "propertiesArticles",
  "properties",
  modules.properties,
);
total += writeModule("assets.ts", "assetsArticles", "assets", modules.assets);
total += writeModule("studies.ts", "studiesArticles", "studies", modules.studies);
total += writeModule(
  "resources.ts",
  "resourcesArticles",
  "resources",
  modules.resources,
);

console.log({ total, modules: Object.fromEntries(Object.entries(modules).map(([k, v]) => [k, v.length])) });
