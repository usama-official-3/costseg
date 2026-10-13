import type { KnowledgeArticle } from "@/lib/schemas/knowledge";

/**
 * Representative sample articles for Phase 6.
 * Not the full ~187-page inventory. Label review status honestly.
 */
export const knowledgeSamples: KnowledgeArticle[] = [
  {
    slug: "what-is-cost-segregation",
    title: "What Is Cost Segregation?",
    summary:
      "A plain-language introduction to cost segregation studies and why depreciation timing matters for real estate stakeholders.",
    group: "fundamentals",
    category: "Fundamentals",
    kind: "company-education",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    reviewStatus: "draft",
    body: [
      "Cost segregation is an engineering-oriented analysis that identifies building components and improvements that may qualify for shorter depreciation recovery periods than the building structure itself.",
      "Instead of depreciating an entire commercial building solely as long-lived real property, a study may support classifying certain personal property and land improvements into shorter MACRS lives where facts and law allow.",
      "This page is educational. It is not individualized tax advice. Engage a qualified CPA or tax counsel for advice specific to your property.",
    ],
    sources: [
      {
        label: "IRS Cost Segregation Audit Techniques Guide (reference)",
        note: "Confirm current IRS publication links before treating as cited authority on a live page.",
      },
    ],
    relatedSlugs: ["macrs-explained", "illustrative-multifamily-acquisition"],
  },
  {
    slug: "macrs-explained",
    title: "MACRS Explained",
    summary:
      "Educational overview of the Modified Accelerated Cost Recovery System concepts used in US depreciation analysis.",
    group: "fundamentals",
    category: "Fundamentals",
    kind: "company-education",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    reviewStatus: "draft",
    body: [
      "MACRS is the primary depreciation system used for most tangible property placed in service in the United States after 1986.",
      "Recovery periods commonly discussed in cost segregation education include 5-year and 7-year personal property, 15-year land improvements, and longer lives for residential rental or nonresidential real property.",
      "Classification always depends on the asset’s function, the applicable authority, and supporting documentation — not marketing labels.",
    ],
    sources: [
      {
        label: "IRC §168 (MACRS) — verify current text via official sources",
      },
      { label: "IRS Publication 946 — verify current edition" },
    ],
    relatedSlugs: ["what-is-cost-segregation", "irc-168-macrs-overview"],
  },
  {
    slug: "irc-168-macrs-overview",
    title: "Internal Revenue Code §168 — MACRS (Overview)",
    summary:
      "Educational landing page pointing readers toward IRC §168 concepts. Not a substitute for the statute text.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    reviewStatus: "draft",
    body: [
      "IRC §168 provides rules for the Modified Accelerated Cost Recovery System, including recovery periods and methods for depreciable property.",
      "This sample page exists to demonstrate the tax-law article template. Before public launch, replace commentary with counsel-reviewed summaries and link to the official Code text.",
      "Do not rely on this summary for filing positions.",
    ],
    sources: [
      {
        label: "Official US Code / government source for IRC §168",
        note: "Add verified URL after legal review.",
      },
    ],
    relatedSlugs: ["macrs-explained"],
  },
  {
    slug: "hospital-corporation-of-america-shortlist",
    title: "Hospital Corporation of America v. Commissioner (Research Shortlist)",
    summary:
      "Placeholder case page demonstrating the case-law template. Citation, holding, and relevance must be verified before publication.",
    group: "cases",
    category: "Court cases",
    kind: "primary-authority",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    reviewStatus: "draft",
    court: "To be verified",
    citation: "To be verified",
    verificationNote:
      "This entry is part of the draft research shortlist from the concept sitemap. Confirm citation, holding, and cost-segregation relevance before publishing as authority.",
    body: [
      "The concept inventory lists Hospital Corporation of America v. Commissioner among potential research pages.",
      "Until verification is complete, this page is a template demonstration only and must not be cited as a finished legal summary.",
    ],
    sources: [
      {
        label: "Official opinion source — pending verification",
      },
    ],
    relatedSlugs: ["what-is-cost-segregation"],
  },
  {
    slug: "multifamily-apartment-buildings",
    title: "Multifamily Apartment Buildings",
    summary:
      "Educational property guide outlining themes often reviewed in multifamily cost segregation discussions.",
    group: "properties",
    category: "Property guides",
    kind: "company-education",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    reviewStatus: "draft",
    body: [
      "Multifamily properties often include a mix of building structure, unit finishes, site improvements, and specialized systems.",
      "A study may examine which components are structural versus shorter-lived personal property or land improvements based on facts and applicable rules.",
      "This guide is educational and does not conclude that any specific asset class applies to every multifamily property.",
    ],
    sources: [],
    relatedSlugs: [
      "what-is-cost-segregation",
      "illustrative-multifamily-acquisition",
      "specialized-electrical-systems",
    ],
  },
  {
    slug: "specialized-electrical-systems",
    title: "Specialized Electrical Systems",
    summary:
      "Educational asset-classification note on specialized electrical systems. Avoid categorical tax conclusions without qualified review.",
    group: "assets",
    category: "Asset library",
    kind: "company-education",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    reviewStatus: "draft",
    body: [
      "Specialized electrical systems are frequently discussed in cost segregation education because function and dedications to equipment can affect classification analysis.",
      "Whether a particular circuit, panel, or distribution component is shorter-lived personal property or part of the building depends on facts, evidence, and applicable authority.",
      "Do not treat this page as a categorical tax conclusion.",
    ],
    sources: [],
    relatedSlugs: ["multifamily-apartment-buildings", "macrs-explained"],
  },
  {
    slug: "illustrative-multifamily-acquisition",
    title: "Illustrative Multifamily Acquisition",
    summary:
      "Hypothetical worked example showing how a reader might interpret an illustrative cost segregation narrative. Not a real client result.",
    group: "studies",
    category: "Case studies",
    kind: "illustrative-example",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    reviewStatus: "draft",
    assumptions: [
      "Hypothetical mid-size multifamily acquisition",
      "Assumes complete purchase documentation is available",
      "Numbers intentionally omitted to avoid implying real savings",
      "Not based on a verified client engagement",
    ],
    body: [
      "This illustrative scenario walks through the kinds of documents and classification questions that often appear in multifamily acquisitions.",
      "Because this is hypothetical, it does not report reclassification percentages, year-one deductions, or fee outcomes.",
      "Use it to understand process vocabulary — not as evidence of results you should expect.",
    ],
    sources: [],
    relatedSlugs: ["multifamily-apartment-buildings", "what-is-cost-segregation"],
  },
  {
    slug: "research-library-disclaimer",
    title: "Research Library Disclaimer",
    summary:
      "Disclaimer for the CostSeg SI Knowledge Hub educational materials.",
    group: "resources",
    category: "Resources",
    kind: "company-education",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    reviewStatus: "internal-review",
    body: [
      "Materials in the Knowledge Hub are provided for general education and research navigation.",
      "They are not individualized tax, legal, or accounting advice and may be incomplete or outdated until reviewed.",
      "Court-case pages begin as research shortlist stubs until citation and holding verification is complete.",
      "Always consult qualified advisers and primary authorities before taking a filing position.",
    ],
    sources: [],
    relatedSlugs: ["what-is-cost-segregation"],
  },
];
