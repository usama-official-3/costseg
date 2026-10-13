export const workflowStages = [
  {
    id: "ingestion",
    title: "1. Document ingestion & blueprint analysis",
    summary: "Extract structured signals from messy property files.",
    agents: [
      {
        name: "Extraction Agent",
        detail:
          "Parses blueprints, contractor ledgers, closing statements, and invoices to surface line-item costs, materials, and asset clues using document understanding techniques.",
      },
      {
        name: "Data Normalization Agent",
        detail:
          "Organizes unstructured receipts and contractor records into standardized construction asset categories.",
      },
    ],
    outputs: [
      "Normalized document inventory",
      "Extracted cost/line-item candidates",
      "Gaps flagged for follow-up",
    ],
  },
  {
    id: "classification",
    title: "2. Component classification & life-cycle matching",
    summary: "Map components to depreciation concepts with reviewable rationale.",
    agents: [
      {
        name: "Tax Classification Agent",
        detail:
          "Evaluates extracted assets against MACRS-oriented recovery concepts, separating longer-lived structure from shorter-lived personal property and land improvements where facts support it.",
      },
      {
        name: "Bonus Depreciation Agent",
        detail:
          "Considers which classified components may relate to bonus depreciation rules based on placed-in-service context.",
      },
    ],
    outputs: [
      "Draft classification hypotheses",
      "Recovery-period groupings for review",
      "Bonus-related candidates for adviser review",
    ],
  },
  {
    id: "estimation",
    title: "3. Engineering-based cost estimation",
    summary: "Estimate missing or bundled costs with documented methods.",
    agents: [
      {
        name: "Estimation Agent",
        detail:
          "When historical costs are missing or bundled, applies documented engineering-based estimation approaches (for example regionalized construction cost data concepts) to support component values.",
      },
    ],
    outputs: [
      "Estimated component values where needed",
      "Estimation method notes",
      "Items requiring additional evidence",
    ],
  },
  {
    id: "review",
    title: "4. Human-in-the-loop review & audit trails",
    summary: "Professionals remain accountable for the final study.",
    agents: [
      {
        name: "Quality Assurance Agent",
        detail:
          "Runs anomaly checks to flag high-risk classifications for human attention.",
      },
      {
        name: "Professional sign-off",
        detail:
          "A cost segregation engineer reviews the compiled asset schedule, verifies results, and certifies the study before delivery.",
      },
    ],
    outputs: [
      "Reviewed asset schedule",
      "Supporting evidence retained",
      "Engineer-certified delivery package",
    ],
  },
] as const;

export const illustrativeStudyPreview = {
  label: "Illustrative preview only",
  property: "Sample multifamily — not a real client property",
  status: "Draft ready (demo)",
  buckets: [
    { label: "5-year", value: "Illustrative share" },
    { label: "7-year", value: "Illustrative share" },
    { label: "15-year", value: "Illustrative share" },
    { label: "39-year structure", value: "Illustrative share" },
  ],
  notes: [
    "No dollar amounts or savings claims are shown.",
    "Percentages intentionally omitted to avoid implying real results.",
    "This card explains UI chrome — not an operational study output.",
  ],
} as const;
