import { draftArticle } from "@/content/knowledge/articleFactory";
import type { KnowledgeArticle } from "@/lib/schemas/knowledge";

const category = "Fundamentals";
const group = "fundamentals" as const;

const sourceMacrs = [
  {
    label: "IRC §168 (MACRS) — verify current official text",
    note: "Link official Code source after counsel review.",
  },
  {
    label: "IRS Publication 946 — How To Depreciate Property",
    note: "Confirm current edition before citing on a live indexed page.",
  },
];

const sourceAtg = [
  {
    label: "IRS Cost Segregation Audit Techniques Guide (reference)",
    note: "Confirm current IRS publication URL before treating as cited authority.",
  },
];

/**
 * Group B — Cost segregation fundamentals (`/learn/`).
 * Batch 1: SITEMAP pages 01–08. All draft / noindex until client approves.
 */
export const fundamentalsArticles: KnowledgeArticle[] = [
  draftArticle({
    slug: "what-is-cost-segregation",
    title: "What Is Cost Segregation?",
    summary:
      "A plain-language introduction to cost segregation studies and why depreciation timing matters for real estate stakeholders.",
    group,
    category,
    keyTakeaways: [
      "Cost segregation is an engineering-oriented analysis of building components and recovery periods.",
      "Shorter lives may apply only where facts and applicable law support the classification.",
      "This page is educational demo content — not individualized tax advice.",
    ],
    body: [
      "Cost segregation is an engineering-oriented analysis that identifies building components and improvements that may qualify for shorter depreciation recovery periods than the building structure itself.",
      "Instead of depreciating an entire commercial building solely as long-lived real property, a study may support classifying certain personal property and land improvements into shorter MACRS lives where facts and law allow.",
      "Owners, investors, and advisers typically use a study to understand how purchase or construction costs allocate across structural elements, site work, and personal property — then coordinate with a CPA on how that analysis informs depreciation schedules.",
      "This page is educational frontend demo copy for CostSeg SI. It is not individualized tax advice. Engage a qualified CPA or tax counsel for advice specific to your property.",
    ],
    sections: [
      {
        heading: "What a study typically examines",
        paragraphs: [
          "Studies generally review construction or acquisition documentation, drawings, invoices, and how systems function in the building and on the site.",
          "Outcomes depend on evidence and authority — not marketing labels or peers’ results. No study guarantees a particular reclassification percentage.",
        ],
      },
      {
        heading: "Who usually coordinates",
        paragraphs: [
          "Engineering or cost-segregation specialists often prepare the technical analysis; a CPA or tax adviser typically owns filing positions and accounting-method decisions.",
          "CostSeg SI educational pages explain vocabulary and process shape — they do not replace that professional chain.",
        ],
      },
    ],
    sources: sourceAtg,
    relatedSlugs: [
      "how-a-cost-segregation-study-works",
      "macrs-explained",
      "cost-segregation-vs-standard-depreciation",
    ],
  }),

  draftArticle({
    slug: "how-a-cost-segregation-study-works",
    title: "How a Cost Segregation Study Works",
    summary:
      "Educational walkthrough of typical study stages — from documents and inspection through classification support and CPA handoff.",
    group,
    category,
    keyTakeaways: [
      "Studies usually combine document review, site understanding, cost estimation, and classification analysis.",
      "A written report supports discussion with your tax adviser — it is not a filing by itself.",
      "Timelines and deliverables vary; this page does not promise a fixed turnaround.",
    ],
    body: [
      "A cost segregation study is a structured project, not a single spreadsheet formula. Teams typically gather acquisition or construction records, understand how the property is built and used, estimate or allocate costs to components, and document classification reasoning tied to applicable recovery-period concepts.",
      "Many engagements include a site visit or equivalent documentation review so that specialty systems, finishes, and land improvements are observed against drawings and invoices — not guessed from a marketing brochure.",
      "The output is usually a report your CPA can evaluate. Filing elections, Form 3115 decisions, and return positions remain with qualified tax professionals.",
      "This article describes a common educational process model for the CostSeg SI demo library. Exact steps for any engagement depend on property type, available records, and adviser scope.",
    ],
    sections: [
      {
        heading: "Typical stages (illustrative)",
        paragraphs: [
          "Intake and document collection → property and systems review → cost allocation or engineering estimate → classification narrative → report delivery and CPA coordination.",
          "Some projects emphasize new construction cost detail; others emphasize purchase-price allocation and look-back corrections. Neither path is “better” in the abstract — facts drive the method.",
        ],
      },
    ],
    sources: sourceAtg,
    relatedSlugs: [
      "what-is-cost-segregation",
      "site-inspections-and-documentation",
      "study-reports-explained",
      "working-with-your-cpa",
    ],
  }),

  draftArticle({
    slug: "why-depreciation-matters",
    title: "Why Depreciation Matters",
    summary:
      "Educational overview of why depreciation timing affects cash flow planning for income-producing real estate — without promising savings outcomes.",
    group,
    category,
    keyTakeaways: [
      "Depreciation spreads the cost of qualifying property over recovery periods set by law.",
      "Timing of deductions can matter for planning — but only within rules that apply to the taxpayer and asset.",
      "No educational page can estimate your tax result without a full adviser review.",
    ],
    body: [
      "Depreciation is an accounting and tax concept that recognizes wear, obsolescence, or exhaustion of qualifying property used in a trade or business or held for production of income. For buildings and many improvements, the law assigns recovery periods and methods rather than letting owners invent their own schedules.",
      "Because recovery periods differ by asset class, the same total cost can produce very different year-by-year deduction profiles depending on how components are classified. That is why stakeholders care about segregation analysis — not because a study invents deductions, but because it organizes costs against the classification framework.",
      "Cash-flow planning, refinance discussions, and partnership reporting often reference depreciation schedules. Those conversations still require a CPA who knows the entity’s full tax picture.",
      "CostSeg SI demo pages explain why timing vocabulary exists. They do not compute tax savings or guarantee audit outcomes.",
    ],
    sections: [
      {
        heading: "What this page does not do",
        paragraphs: [
          "It does not provide rate tables for your tax year, bonus-depreciation percentages for your facts, or projected after-tax IRR.",
          "If you need numbers, work with a qualified adviser and current official guidance.",
        ],
      },
    ],
    sources: sourceMacrs,
    relatedSlugs: [
      "what-is-cost-segregation",
      "macrs-explained",
      "depreciable-basis-explained",
    ],
  }),

  draftArticle({
    slug: "cost-segregation-vs-standard-depreciation",
    title: "Cost Segregation vs. Standard Depreciation",
    summary:
      "How a cost segregation study relates to “standard” building depreciation — educational contrast, not a recommendation for any filing position.",
    group,
    category,
    keyTakeaways: [
      "“Standard” often means treating most building cost as long-lived real property recovery.",
      "Segregation analysis asks whether some costs support shorter personal-property or land-improvement lives.",
      "Neither approach is universally correct; classification follows facts and authority.",
    ],
    body: [
      "In everyday conversation, “standard depreciation” for a commercial or residential rental building often means placing nearly all building cost into the long recovery period that applies to that building class, with limited breakout of shorter-lived property.",
      "A cost segregation study challenges that default only where documentation and rules support identifying personal property, land improvements, or other components with different recovery periods. It does not create a second set of tax rules; it applies the existing classification framework with more granular evidence.",
      "Some properties yield limited reclassification after careful review. That is a valid outcome. Educational marketing that implies every building “should” show large short-life percentages is not aligned with CostSeg SI content standards.",
      "Compare approaches with your CPA using your deeds, closing statements, construction costs, and entity structure — not with generic website examples.",
    ],
    sections: [
      {
        heading: "Questions advisers often ask",
        paragraphs: [
          "What records exist? Was the property acquired or constructed? Are there prior studies or method changes? How do tangible property regulations interact with repairs versus capital improvements?",
          "Those questions sit outside this demo article’s scope but shape whether a study is useful.",
        ],
      },
    ],
    sources: [...sourceAtg, ...sourceMacrs],
    relatedSlugs: [
      "what-is-cost-segregation",
      "personal-property-vs-real-property",
      "macrs-explained",
    ],
  }),

  draftArticle({
    slug: "personal-property-vs-real-property",
    title: "Personal Property vs. Real Property",
    summary:
      "Educational distinction between personal property and real property themes that appear in cost segregation discussions — fact-specific, not categorical tax conclusions.",
    group,
    category,
    keyTakeaways: [
      "Labels like “personal” vs “real” are legal classifications, not contractor marketing terms.",
      "Function, permanence, and applicable authority matter more than vendor category names.",
      "Do not treat this page as a checklist that automatically shortens recovery lives.",
    ],
    body: [
      "Cost segregation education frequently contrasts personal property with real property because recovery periods and character of gain can differ under the Internal Revenue Code. Those terms have specific tax meanings that may not match everyday English or construction-trade slang.",
      "Personal property themes in study reports often involve assets that are not structural building elements — for example, certain specialty equipment, decorative finishes, or movable furnishings — but only when facts and authority support that treatment. Real property themes typically involve the building structure and inherently permanent structural components.",
      "Borderline items are common. The same product line can classify differently depending on how it is affixed, whether it serves a structural function, and how courts or the IRS have treated similar facts. That is why engineering documentation and legal review both matter.",
      "This demo article teaches vocabulary. It does not assign a recovery period to any product SKU or finish schedule.",
    ],
    sections: [
      {
        heading: "Practical caution",
        paragraphs: [
          "Avoid copying classification lists from unrelated projects. Your property’s drawings, photos, and invoices are the evidence set.",
          "When unsure, escalate to qualified tax counsel rather than relying on educational summaries.",
        ],
      },
    ],
    sources: sourceAtg,
    relatedSlugs: [
      "land-building-and-site-improvements",
      "5-year-property-explained",
      "7-year-property-explained",
    ],
  }),

  draftArticle({
    slug: "land-building-and-site-improvements",
    title: "Land, Building, and Site Improvements",
    summary:
      "How educational cost segregation discussions separate non-depreciable land, building structure, and site improvements — without concluding any specific allocation.",
    group,
    category,
    keyTakeaways: [
      "Land is generally not depreciable; building and qualifying improvements may be.",
      "Site improvements (for example, certain paving or landscaping themes) are often analyzed separately from building structure.",
      "Purchase contracts that lump “land and building” still need a supportable allocation for tax purposes.",
    ],
    body: [
      "A recurring educational framework splits a real estate basis into land, building, and site improvements (plus personal property where supported). Land typically does not depreciate. Building cost usually follows the long recovery period for residential rental or nonresidential real property, subject to applicable rules. Site improvements may support intermediate recovery periods when they qualify as land improvements under the relevant classification system.",
      "Acquisition closings often state a single price for land and improvements. Tax reporting still needs a reasoned allocation. Appraisals, assessor data, and engineering cost approaches are among tools advisers discuss — none of which this page endorses as universally correct.",
      "Site work visible on a survey or civil set — parking, sidewalks, fencing, site lighting — frequently appears in segregation narratives because it is distinct from the vertical building. Classification still depends on facts and current authority.",
      "Use this page to understand why reports show those buckets. Your CPA should validate any allocation used on a return.",
    ],
    sections: [
      {
        heading: "Related study types",
        paragraphs: [
          "Acquisition studies, new construction studies, and renovation studies all touch these buckets differently depending on available cost detail.",
          "See related fundamentals pages for process vocabulary; see tax-law pages (when populated) for Code-oriented overviews.",
        ],
      },
    ],
    sources: sourceMacrs,
    relatedSlugs: [
      "personal-property-vs-real-property",
      "15-year-property-explained",
      "purchase-price-allocation",
      "depreciable-basis-explained",
    ],
  }),

  draftArticle({
    slug: "macrs-explained",
    title: "MACRS Explained",
    summary:
      "Educational overview of the Modified Accelerated Cost Recovery System concepts used in US depreciation analysis.",
    group,
    category,
    keyTakeaways: [
      "MACRS is the primary depreciation system for most tangible property placed in service after 1986.",
      "Recovery periods discussed in education are illustrative categories — classification is fact-specific.",
      "Always verify current Code and IRS guidance before relying on a summary.",
    ],
    body: [
      "MACRS — the Modified Accelerated Cost Recovery System — is the primary depreciation system used for most tangible property placed in service in the United States after 1986. It combines recovery periods, depreciation methods, and conventions defined in the Internal Revenue Code and related guidance.",
      "In cost segregation education, people often hear shorthand like “5-year,” “7-year,” “15-year,” “27.5-year,” and “39-year.” Those labels refer to recovery periods commonly discussed for certain property classes. They are not a menu you pick for marketing convenience; assignment depends on asset class, use, and authority.",
      "MACRS also interacts with concepts such as placed-in-service dates, conventions (for example mid-quarter or mid-month in applicable cases), and additional first-year depreciation when statutes provide it. Those interactions change over time as Congress and the IRS update rules.",
      "This demo page orients readers. It is not a substitute for IRC §168, IRS Publication 946, or adviser modeling.",
    ],
    sections: [
      {
        heading: "Where cost segregation fits",
        paragraphs: [
          "Segregation studies help organize costs into classes that MACRS (and related rules) already recognize — they do not invent new recovery periods.",
          "Read companion pages on specific recovery-period themes for vocabulary only; confirm live law before filing.",
        ],
      },
    ],
    sources: sourceMacrs,
    relatedSlugs: [
      "what-is-cost-segregation",
      "5-year-property-explained",
      "section-168-macrs",
      "27-5-year-residential-rental-property",
      "39-year-nonresidential-real-property",
    ],
  }),

  draftArticle({
    slug: "5-year-property-explained",
    title: "5-Year Property Explained",
    summary:
      "Educational note on 5-year MACRS property themes often discussed in cost segregation — not a list of assets that always qualify.",
    group,
    category,
    keyTakeaways: [
      "“5-year property” is a MACRS recovery-period category, not a contractor nickname.",
      "Whether an item belongs in that category depends on classification rules and facts.",
      "This page does not certify any specific asset as 5-year property.",
    ],
    body: [
      "In MACRS education, “5-year property” refers to a recovery period assigned to certain classes of personal property under the applicable asset classification system. Cost segregation reports sometimes identify building-related personal property that analysts believe supports a 5-year life — but only when the underlying classification is supportable.",
      "Examples discussed in industry education (specialty decorative items, certain equipment, or information-system themes) are illustrative teaching aids, not automatic inclusions for every project. Two properties can share a vendor finish package and still classify differently based on how components function and are affixed.",
      "Bonus depreciation and other timing rules, when available under current law, may interact with short-lived property. Percentages and eligibility change by statute and tax year — do not copy historical rates from blogs onto a current return.",
      "Treat this article as vocabulary for the CostSeg SI demo hub. Ask a CPA before asserting any 5-year classification on a filing.",
    ],
    sections: [
      {
        heading: "Next reading",
        paragraphs: [
          "Compare with 7-year and 15-year educational pages for neighboring recovery-period themes.",
          "Personal property vs. real property remains the upstream conceptual split for many borderline items.",
        ],
      },
    ],
    sources: sourceMacrs,
    relatedSlugs: [
      "macrs-explained",
      "7-year-property-explained",
      "personal-property-vs-real-property",
    ],
  }),

  // —— Batch 2: SITEMAP 09–16 ——
  draftArticle({
    slug: "7-year-property-explained",
    title: "7-Year Property Explained",
    summary:
      "Educational overview of 7-year MACRS property themes in cost segregation discussions — fact-specific, not a universal asset list.",
    group,
    category,
    keyTakeaways: [
      "“7-year property” is a MACRS recovery-period category used for certain personal-property classes.",
      "Classification depends on applicable asset class and facts — not vendor marketing names.",
      "This demo page does not certify any item as 7-year property.",
    ],
    body: [
      "MACRS education often pairs “7-year property” with certain classes of personal property that are not assigned a 5-year life. In cost segregation narratives, analysts may discuss office furniture themes, some fixtures, or other personal property when authority and facts support a 7-year recovery period.",
      "Those teaching examples are not automatic. The same catalog item can land in different classes depending on use, industry asset classification, and how it relates to the building. Copying another project’s schedule is a common error.",
      "When additional first-year depreciation or other timing rules apply under current law, short-lived personal property may interact with those rules — eligibility and percentages change by statute and year. Do not transplant historical rates onto a current return from an educational page.",
      "Use this article for vocabulary in the CostSeg SI demo library. Confirm live classifications with a CPA and primary authorities.",
    ],
    sections: [
      {
        heading: "Neighboring categories",
        paragraphs: [
          "Readers often compare 5-year, 7-year, and 15-year themes when reviewing a draft study outline.",
          "Personal property vs. real property remains the upstream split for many borderline components.",
        ],
      },
    ],
    sources: sourceMacrs,
    relatedSlugs: [
      "5-year-property-explained",
      "15-year-property-explained",
      "macrs-explained",
      "personal-property-vs-real-property",
    ],
  }),

  draftArticle({
    slug: "15-year-property-explained",
    title: "15-Year Property Explained",
    summary:
      "Educational note on 15-year MACRS themes commonly associated with land improvements — not a conclusion that every site item qualifies.",
    group,
    category,
    keyTakeaways: [
      "15-year recovery is often discussed for qualifying land improvements under MACRS education.",
      "Parking, sidewalks, and landscaping themes appear frequently — each still needs fact support.",
      "Land itself generally remains non-depreciable even when site improvements may qualify.",
    ],
    body: [
      "In cost segregation education, “15-year property” frequently refers to certain land improvements that MACRS treats with a 15-year recovery period when classification rules are met. Civil and site packages — paving, sidewalks, curbing, fencing, site lighting, and some landscaping themes — often appear in that conversation.",
      "Not every outdoor cost is a land improvement, and not every land improvement is 15-year property. Some costs may remain part of non-depreciable land, building, or another class. Drainage, retaining structures, and specialty site systems can raise fact-specific questions.",
      "Studies that separate building from site work help advisers see the buckets; they do not invent recovery periods. Your survey, civil drawings, and invoices are the evidence set.",
      "This demo page teaches labels used in reports. It is not a site-improvement checklist for filing positions.",
    ],
    sections: [
      {
        heading: "Related fundamentals",
        paragraphs: [
          "See land, building, and site improvements for the upstream allocation vocabulary.",
          "Compare with building recovery pages (27.5-year and 39-year) when reading a full schedule outline.",
        ],
      },
    ],
    sources: sourceMacrs,
    relatedSlugs: [
      "land-building-and-site-improvements",
      "macrs-explained",
      "7-year-property-explained",
      "39-year-nonresidential-real-property",
    ],
  }),

  draftArticle({
    slug: "27-5-year-residential-rental-property",
    title: "27.5-Year Residential Rental Property",
    summary:
      "Educational overview of the long recovery period commonly discussed for residential rental real property under MACRS — not advice for any specific building.",
    group,
    category,
    keyTakeaways: [
      "Residential rental real property is often discussed with a 27.5-year MACRS recovery period.",
      "Whether a building qualifies as residential rental depends on use and applicable definitions.",
      "Cost segregation may identify shorter-lived components inside a residential rental project when supported.",
    ],
    body: [
      "MACRS education commonly associates residential rental real property with a 27.5-year recovery period for the building structure (subject to current Code definitions and methods). Multifamily apartments and similar income-producing residential rentals often sit in this conversation.",
      "Qualification as “residential rental” is a legal and factual question — percentage of residential rental units, transient use, and related definitions can matter. Do not assume a mixed-use tower automatically follows the residential rental period without adviser review.",
      "A cost segregation study on a residential rental property typically still analyzes personal property and land improvements that may support shorter lives, while structural building cost remains in the long residential rental class when that classification applies.",
      "This page is demo vocabulary for CostSeg SI. Confirm building class, method, and conventions with a CPA before filing.",
    ],
    sections: [
      {
        heading: "Contrast with nonresidential",
        paragraphs: [
          "Nonresidential real property is often discussed with a longer 39-year recovery period in MACRS education.",
          "Mislabeling building class is a high-impact error — escalate edge cases to counsel.",
        ],
      },
    ],
    sources: sourceMacrs,
    relatedSlugs: [
      "39-year-nonresidential-real-property",
      "macrs-explained",
      "multifamily-apartment-buildings",
      "what-is-cost-segregation",
    ],
  }),

  draftArticle({
    slug: "39-year-nonresidential-real-property",
    title: "39-Year Nonresidential Real Property",
    summary:
      "Educational overview of the long recovery period commonly discussed for nonresidential real property — not a classification decision for your asset.",
    group,
    category,
    keyTakeaways: [
      "Nonresidential real property is often discussed with a 39-year MACRS recovery period.",
      "Office, retail, industrial, and many commercial uses appear in this category when definitions are met.",
      "Shorter-lived personal property or land improvements are analyzed separately when facts support them.",
    ],
    body: [
      "In MACRS teaching materials, nonresidential real property is frequently associated with a 39-year recovery period for the building. Many office, retail, warehouse, and other commercial buildings are discussed in that frame when they meet the applicable definitions.",
      "Cost segregation does not shorten the structural building class by slogan. It asks whether identifiable components are personal property or land improvements with different recovery periods under existing rules. Structural shell and inherently permanent structural components usually remain in the long building class when that is the correct classification.",
      "Placed-in-service dates, conventions, and any additional first-year depreciation rules (when applicable to other property classes) are separate topics your adviser models with current law.",
      "Treat this article as orientation for the demo hub. Building class and method selections belong with qualified tax professionals.",
    ],
    sections: [
      {
        heading: "Reading a draft schedule",
        paragraphs: [
          "Expect a report outline to show long-life building cost beside any supported short-life and 15-year themes.",
          "Large “39-year” lines are normal for commercial structure — they are not a study failure.",
        ],
      },
    ],
    sources: sourceMacrs,
    relatedSlugs: [
      "27-5-year-residential-rental-property",
      "macrs-explained",
      "15-year-property-explained",
      "cost-segregation-vs-standard-depreciation",
    ],
  }),

  draftArticle({
    slug: "depreciable-basis-explained",
    title: "Depreciable Basis Explained",
    summary:
      "Plain-language educational intro to depreciable basis concepts used when discussing cost segregation and depreciation schedules.",
    group,
    category,
    keyTakeaways: [
      "Depreciable basis is the amount you depreciate — not always the headline purchase price.",
      "Land is generally excluded; other adjustments may apply under tax rules.",
      "Segregation reallocates basis among classes; it does not invent basis from nowhere.",
    ],
    body: [
      "Depreciable basis is the starting point for depreciation deductions: the portion of cost (or other applicable amount) that tax rules allow you to recover over time for qualifying property. Headline purchase prices, construction draws, and settlement statements often need adjustments before they become depreciable basis.",
      "Land cost is a classic exclusion — land generally does not depreciate. Closing costs, credits, casualty adjustments, and prior depreciation can also affect basis calculations. Those mechanics are adviser territory.",
      "A cost segregation study typically reallocates depreciable building-related basis among recovery-period classes when supported. It does not create basis that was never capitalized, and it does not replace a proper purchase-price or construction-cost accounting trail.",
      "This demo article explains why reports talk about basis buckets. It is not a worksheet for your return.",
    ],
    sections: [
      {
        heading: "Tied topics",
        paragraphs: [
          "Purchase price allocation and placed-in-service date pages cover neighboring vocabulary.",
          "Always reconcile study totals to the basis your CPA maintains in the depreciation schedule.",
        ],
      },
    ],
    sources: sourceMacrs,
    relatedSlugs: [
      "purchase-price-allocation",
      "placed-in-service-date-explained",
      "land-building-and-site-improvements",
      "why-depreciation-matters",
    ],
  }),

  draftArticle({
    slug: "placed-in-service-date-explained",
    title: "Placed-in-Service Date Explained",
    summary:
      "Educational explanation of placed-in-service timing vocabulary in depreciation and cost segregation discussions.",
    group,
    category,
    keyTakeaways: [
      "Placed-in-service timing affects when depreciation begins under MACRS conventions.",
      "Construction completion, occupancy, and acquisition facts can all influence the analysis.",
      "This page does not determine your placed-in-service date.",
    ],
    body: [
      "Under MACRS education, depreciation generally begins when property is placed in service — ready and available for a specific use in a trade or business or for the production of income, subject to applicable definitions and conventions. The calendar date matters for half-year, mid-quarter, or mid-month conventions when those rules apply.",
      "For acquisitions, closing and availability for rental or business use often drive the discussion. For new construction, substantial completion and readiness for the intended use are common themes. Partial placements (for example phased buildings) can create multiple dates.",
      "Cost segregation reports should align component classifications with the same placed-in-service framework your CPA uses. Misaligned dates between the study and the depreciation schedule create reconciliation headaches.",
      "Use this demo page to understand the vocabulary. Confirm dates with project records and your tax adviser.",
    ],
    sections: [
      {
        heading: "Records that often help",
        paragraphs: [
          "Certificates of occupancy, punch-list completion notes, lease commencement, and draw schedules frequently appear in timing discussions.",
          "None of those documents alone is a universal legal test — advisers weigh the full fact pattern.",
        ],
      },
    ],
    sources: sourceMacrs,
    relatedSlugs: [
      "depreciable-basis-explained",
      "new-construction-studies",
      "macrs-explained",
      "acquisition-studies",
    ],
  }),

  draftArticle({
    slug: "purchase-price-allocation",
    title: "Purchase Price Allocation",
    summary:
      "Educational overview of allocating an acquisition price among land, building, and other assets — process vocabulary, not a valuation method endorsement.",
    group,
    category,
    keyTakeaways: [
      "Acquisitions often need a supportable split of price among land, building, and other assets.",
      "Cost segregation builds on that allocation; it does not replace it.",
      "No single public formula fits every deal — advisers and appraisers own the method choice.",
    ],
    body: [
      "When you buy improved real estate for a single price, tax reporting usually needs a reasoned allocation among non-depreciable land, depreciable building, and other assets conveyed in the deal. Purchase contracts sometimes state allocations; sometimes they do not.",
      "Common discussion tools include appraisals, assessor ratios, residual methods, and engineering cost approaches. CostSeg SI does not endorse one method for every transaction. The “right” support depends on deal facts, available data, and adviser judgment.",
      "After land and building (and other) buckets are set, a cost segregation study may further analyze the building and site-related depreciable amounts into recovery-period classes when supported. If the upstream allocation is weak, the downstream schedule inherits that weakness.",
      "This demo article explains why allocation appears on engagement checklists. It is not a substitute for appraisal or tax advice.",
    ],
    sections: [
      {
        heading: "Coordination tip",
        paragraphs: [
          "Share the same allocation story with your CPA, any appraiser, and the segregation team so totals reconcile.",
          "See acquisition studies for how purchase engagements often unfold in educational process models.",
        ],
      },
    ],
    sources: [...sourceAtg, ...sourceMacrs],
    relatedSlugs: [
      "depreciable-basis-explained",
      "land-building-and-site-improvements",
      "acquisition-studies",
      "how-a-cost-segregation-study-works",
    ],
  }),

  draftArticle({
    slug: "new-construction-studies",
    title: "New Construction Studies",
    summary:
      "Educational description of cost segregation themes for newly constructed property — document-heavy, not a guaranteed reclassification outcome.",
    group,
    category,
    keyTakeaways: [
      "New construction studies often lean on contractor cost detail, draws, and change orders.",
      "Detailed invoices can improve component visibility — they do not guarantee short-life percentages.",
      "Placed-in-service timing and basis capitalization rules still sit with your CPA.",
    ],
    body: [
      "New construction cost segregation engagements typically emphasize granular construction cost records: schedule of values, pay applications, change orders, subcontractor invoices, and design documents. Those records can make it easier to see how dollars map to systems and finishes.",
      "Even with excellent documentation, classification follows law and facts. Some costs remain long-lived building; others may support personal property or land-improvement treatment when authority allows. Rich detail does not invent deductions.",
      "Coordination with the general contractor and owner’s rep often matters for clarifying what line items mean in the field. Site inspection still helps verify that drawings match installed conditions.",
      "This demo page outlines process vocabulary for the CostSeg SI hub. Engagement scope and deliverables vary — no fixed turnaround or savings claim is made here.",
    ],
    sections: [
      {
        heading: "Compare engagement types",
        paragraphs: [
          "Acquisition studies focus more on purchase price and existing improvements; renovation studies focus on capital improvement packages.",
          "Look-back and accounting-method themes may appear when prior returns need correction — those are adviser-led.",
        ],
      },
    ],
    sources: sourceAtg,
    relatedSlugs: [
      "how-a-cost-segregation-study-works",
      "placed-in-service-date-explained",
      "engineering-based-cost-estimation",
      "acquisition-studies",
    ],
  }),
];
