import fs from "node:fs";

const fixes = [
  {
    file: "app/about/page.tsx",
    meta: `export const metadata = buildPageMetadata({
  title: "About CostSeg SI",
  description:
    "About CostSeg SI — Super Intelligence–positioned cost segregation study preparation.",
  path: "/about",
});`,
    bodyReplacements: [
      [
        "stakeholders â\u0080\u0094 with",
        "stakeholders — with",
      ],
      [
        "more efficiently â\u0080\u0094 without",
        "more efficiently — without",
      ],
    ],
  },
  {
    file: "app/contact/page.tsx",
    meta: `export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Contact CostSeg SI to discuss a potential cost segregation study for your property.",
  path: "/contact",
});`,
  },
  {
    file: "app/services/page.tsx",
    meta: `export const metadata = buildPageMetadata({
  title: "Our Services",
  description:
    "Overview of CostSeg SI cost segregation study services and related support themes.",
  path: "/services",
});`,
  },
  {
    file: "app/technology/page.tsx",
    meta: `export const metadata = buildPageMetadata({
  title: "Super Intelligence Technology",
  description:
    "How CostSeg SI uses Super Intelligence workflows to support cost segregation study preparation.",
  path: "/technology",
});`,
  },
  {
    file: "app/who-we-help/page.tsx",
    meta: `export const metadata = buildPageMetadata({
  title: "Who We Help",
  description:
    "Property owners, investors, and advisers exploring cost segregation studies with CostSeg SI.",
  path: "/who-we-help",
});`,
  },
  {
    file: "app/faqs/page.tsx",
    meta: `export const metadata = buildPageMetadata({
  title: "FAQs",
  description:
    "Frequently asked questions about CostSeg SI cost segregation study topics and educational resources.",
  path: "/faqs",
});`,
  },
  {
    file: "app/tools/page.tsx",
    meta: `export const metadata = buildPageMetadata({
  title: "Tools",
  description:
    "CostSeg SI frontend tools: property questionnaire and Super Intelligence workflow explorer. Calculator remains gated.",
  path: "/tools",
});`,
  },
  {
    file: "app/tools/questionnaire/page.tsx",
    meta: `export const metadata = buildPageMetadata({
  title: "Property questionnaire",
  description:
    "Property study questionnaire preview for CostSeg SI lead qualification.",
  path: "/tools/questionnaire",
});`,
  },
  {
    file: "app/tools/workflow-explorer/page.tsx",
    meta: `export const metadata = buildPageMetadata({
  title: "SI workflow explorer",
  description:
    "Interactive Super Intelligence workflow explorer — explanatory demo for CostSeg SI.",
  path: "/tools/workflow-explorer",
});`,
  },
];

for (const item of fixes) {
  let raw = fs.readFileSync(item.file, "utf8");
  raw = raw.replace(
    /export const metadata = buildPageMetadata\(\{[\s\S]*?\}\);/,
    item.meta,
  );
  // Also catch literal backslash-n versions
  raw = raw.replace(
    /export const metadata = buildPageMetadata\(\{\\n[\s\S]*?\\n\}\);/,
    item.meta,
  );
  if (item.bodyReplacements) {
    for (const [from, to] of item.bodyReplacements) {
      raw = raw.split(from).join(to);
    }
  }
  // Fix common mojibake em dashes
  raw = raw.replace(/â/g, "—");
  raw = raw.replace(//g, "—");
  raw = raw.replace(//g, "–");
  fs.writeFileSync(item.file, raw);
  console.log("fixed", item.file);
}
