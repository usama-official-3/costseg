import { draftArticle } from "@/content/knowledge/articleFactory";
import type { KnowledgeArticle } from "@/lib/schemas/knowledge";

/**
 * Phase 4 draft demo articles — Tax law.
 * All draft / noindex until client or counsel promotes reviewStatus.
 */
export const taxLawArticles: KnowledgeArticle[] = [
  draftArticle({
    slug: "section-167-depreciation",
    title: "Internal Revenue Code §167 — Depreciation",
    summary: "Internal Revenue Code §167 — Depreciation — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "Internal Revenue Code §167 — Depreciation is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: Internal Revenue Code §167 — Depreciation",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "section-168-macrs",
    ],
  }),

  draftArticle({
    slug: "section-168-macrs",
    title: "Internal Revenue Code §168 — MACRS",
    summary: "Internal Revenue Code §168 — MACRS — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "Internal Revenue Code §168 — MACRS is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: Internal Revenue Code §168 — MACRS",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "section-167-depreciation",
      "section-168-k-bonus-depreciation",
    ],
  }),

  draftArticle({
    slug: "section-168-k-bonus-depreciation",
    title: "§168(k) — Bonus Depreciation",
    summary: "§168(k) — Bonus Depreciation — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "§168(k) — Bonus Depreciation is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: §168(k) — Bonus Depreciation",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "section-168-macrs",
      "section-179-expensing-rules-and-boundaries",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "section-179-expensing-rules-and-boundaries",
    title: "§179 — Expensing Rules and Boundaries",
    summary: "§179 — Expensing Rules and Boundaries — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "§179 — Expensing Rules and Boundaries is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: §179 — Expensing Rules and Boundaries",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "section-168-k-bonus-depreciation",
      "section-1245-property-overview",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "section-1245-property-overview",
    title: "§1245 Property Overview",
    summary: "§1245 Property Overview — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "§1245 Property Overview is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: §1245 Property Overview",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "section-179-expensing-rules-and-boundaries",
      "section-1250-property-overview",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "section-1250-property-overview",
    title: "§1250 Property Overview",
    summary: "§1250 Property Overview — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "§1250 Property Overview is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: §1250 Property Overview",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "section-1245-property-overview",
      "section-481-a-accounting-method-adjustments",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "section-481-a-accounting-method-adjustments",
    title: "§481(a) — Accounting Method Adjustments",
    summary: "§481(a) — Accounting Method Adjustments — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "§481(a) — Accounting Method Adjustments is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: §481(a) — Accounting Method Adjustments",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "section-1250-property-overview",
      "irs-cost-segregation-audit-techniques-guide",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "irs-cost-segregation-audit-techniques-guide",
    title: "IRS Cost Segregation Audit Techniques Guide",
    summary: "IRS Cost Segregation Audit Techniques Guide — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "IRS Cost Segregation Audit Techniques Guide is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: IRS Cost Segregation Audit Techniques Guide",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "section-481-a-accounting-method-adjustments",
      "irs-tangible-property-regulations",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "irs-tangible-property-regulations",
    title: "IRS Tangible Property Regulations",
    summary: "IRS Tangible Property Regulations — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "IRS Tangible Property Regulations is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: IRS Tangible Property Regulations",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "irs-cost-segregation-audit-techniques-guide",
      "treasury-regulations-for-depreciable-property",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "treasury-regulations-for-depreciable-property",
    title: "Treasury Regulations for Depreciable Property",
    summary: "Treasury Regulations for Depreciable Property — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "Treasury Regulations for Depreciable Property is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: Treasury Regulations for Depreciable Property",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "irs-tangible-property-regulations",
      "irs-publication-946",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "irs-publication-946",
    title: "IRS Publication 946",
    summary: "IRS Publication 946 — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "IRS Publication 946 is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: IRS Publication 946",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "treasury-regulations-for-depreciable-property",
      "irs-form-3115-instructions",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "irs-form-3115-instructions",
    title: "IRS Form 3115 Instructions",
    summary: "IRS Form 3115 Instructions — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "IRS Form 3115 Instructions is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: IRS Form 3115 Instructions",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "irs-publication-946",
      "irs-form-4562",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "irs-form-4562",
    title: "IRS Form 4562",
    summary: "IRS Form 4562 — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "IRS Form 4562 is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: IRS Form 4562",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "irs-form-3115-instructions",
      "macrs-recovery-periods-and-classification",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "macrs-recovery-periods-and-classification",
    title: "MACRS Recovery Periods and Classification",
    summary: "MACRS Recovery Periods and Classification — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "MACRS Recovery Periods and Classification is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: MACRS Recovery Periods and Classification",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "irs-form-4562",
      "half-year-convention",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "half-year-convention",
    title: "Half-Year Convention",
    summary: "Half-Year Convention — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "Half-Year Convention is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: Half-Year Convention",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "macrs-recovery-periods-and-classification",
      "mid-quarter-convention",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "mid-quarter-convention",
    title: "Mid-Quarter Convention",
    summary: "Mid-Quarter Convention — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "Mid-Quarter Convention is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: Mid-Quarter Convention",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "half-year-convention",
      "mid-month-convention",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "mid-month-convention",
    title: "Mid-Month Convention",
    summary: "Mid-Month Convention — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "Mid-Month Convention is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: Mid-Month Convention",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "mid-quarter-convention",
      "bonus-depreciation-eligibility",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "bonus-depreciation-eligibility",
    title: "Bonus Depreciation Eligibility",
    summary: "Bonus Depreciation Eligibility — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "Bonus Depreciation Eligibility is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: Bonus Depreciation Eligibility",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "mid-month-convention",
      "bonus-depreciation-acquisition-date-rules",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "bonus-depreciation-acquisition-date-rules",
    title: "Bonus Depreciation Acquisition-Date Rules",
    summary: "Bonus Depreciation Acquisition-Date Rules — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "Bonus Depreciation Acquisition-Date Rules is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: Bonus Depreciation Acquisition-Date Rules",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "bonus-depreciation-eligibility",
      "placed-in-service-rules",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "placed-in-service-rules",
    title: "Placed-in-Service Rules",
    summary: "Placed-in-Service Rules — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "Placed-in-Service Rules is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: Placed-in-Service Rules",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "bonus-depreciation-acquisition-date-rules",
      "qualified-improvement-property",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "qualified-improvement-property",
    title: "Qualified Improvement Property",
    summary: "Qualified Improvement Property — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "Qualified Improvement Property is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: Qualified Improvement Property",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "placed-in-service-rules",
      "leasehold-improvement-considerations",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "leasehold-improvement-considerations",
    title: "Leasehold Improvement Considerations",
    summary: "Leasehold Improvement Considerations — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "Leasehold Improvement Considerations is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: Leasehold Improvement Considerations",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "qualified-improvement-property",
      "building-acquisition-and-basis-allocation",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "building-acquisition-and-basis-allocation",
    title: "Building Acquisition and Basis Allocation",
    summary: "Building Acquisition and Basis Allocation — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "Building Acquisition and Basis Allocation is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: Building Acquisition and Basis Allocation",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "leasehold-improvement-considerations",
      "related-party-acquisition-considerations",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "related-party-acquisition-considerations",
    title: "Related-Party Acquisition Considerations",
    summary: "Related-Party Acquisition Considerations — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "Related-Party Acquisition Considerations is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: Related-Party Acquisition Considerations",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "building-acquisition-and-basis-allocation",
      "property-used-in-a-trade-or-business",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "property-used-in-a-trade-or-business",
    title: "Property Used in a Trade or Business",
    summary: "Property Used in a Trade or Business — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "Property Used in a Trade or Business is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: Property Used in a Trade or Business",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "related-party-acquisition-considerations",
      "rental-property-depreciation-rules",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "rental-property-depreciation-rules",
    title: "Rental Property Depreciation Rules",
    summary: "Rental Property Depreciation Rules — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "Rental Property Depreciation Rules is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: Rental Property Depreciation Rules",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "property-used-in-a-trade-or-business",
      "capital-improvements-vs-repairs",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "capital-improvements-vs-repairs",
    title: "Capital Improvements vs. Repairs",
    summary: "Capital Improvements vs. Repairs — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "Capital Improvements vs. Repairs is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: Capital Improvements vs. Repairs",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "rental-property-depreciation-rules",
      "partial-asset-dispositions",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "partial-asset-dispositions",
    title: "Partial Asset Dispositions",
    summary: "Partial Asset Dispositions — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "Partial Asset Dispositions is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: Partial Asset Dispositions",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "capital-improvements-vs-repairs",
      "federal-vs-state-depreciation-differences",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "federal-vs-state-depreciation-differences",
    title: "Federal vs. State Depreciation Differences",
    summary: "Federal vs. State Depreciation Differences — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "Federal vs. State Depreciation Differences is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: Federal vs. State Depreciation Differences",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "partial-asset-dispositions",
      "tax-law-updates-and-effective-dates",
      "section-167-depreciation",
    ],
  }),

  draftArticle({
    slug: "tax-law-updates-and-effective-dates",
    title: "Tax Law Updates and Effective Dates",
    summary: "Tax Law Updates and Effective Dates — educational demo page for the CostSeg SI Knowledge Hub. Draft content; not individualized advice.",
    group: "tax-law",
    category: "Tax law",
    kind: "primary-authority",
    keyTakeaways: [
      "Verify current official statute, regulation, or IRS text.",
      "Educational overview only — not a filing position.",
      "Coordinate interpretation with a qualified tax adviser.",
    ],
    body: [
      "Tax Law Updates and Effective Dates is an educational overview page in the CostSeg SI tax-law demo library. It orients readers toward topics that appear in depreciation and cost segregation discussions.",
      "This page is not a substitute for the official Internal Revenue Code, Treasury regulations, IRS publications, or form instructions. Statutes and guidance change; always verify current text before taking a filing position.",
      "Cost segregation analyses reference classification and recovery-period concepts that sit inside this broader legal framework. Educational summaries here do not create filing positions.",
      "Have a qualified CPA or tax counsel interpret how any rule applies to your facts, entity, and tax year.",
    ],
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Read it as frontend demo education for costseg.si. Promote reviewStatus only after client or counsel approval.",
          "Cross-check related hub pages for neighboring vocabulary; primary authorities remain the source of truth.",
        ],
      },
    ],
    sources: [
      {
        label: "Official source for: Tax Law Updates and Effective Dates",
        note: "Add verified government URL after legal review.",
      },
      {
        label: "IRS publications / Code text — verify current edition",
      },
    ],
    relatedSlugs: [
      "federal-vs-state-depreciation-differences",
      "section-167-depreciation",
    ],
  }),
];
