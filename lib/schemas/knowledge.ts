import { z } from "zod";

export const reviewStatusSchema = z.enum([
  "draft",
  "internal-review",
  "reviewed",
  "verified",
]);

export const knowledgeGroupSchema = z.enum([
  "fundamentals",
  "tax-law",
  "cases",
  "properties",
  "assets",
  "studies",
  "resources",
]);

export const contentKindSchema = z.enum([
  "primary-authority",
  "irs-government",
  "secondary-commentary",
  "company-education",
  "illustrative-example",
]);

export const articleSectionSchema = z.object({
  heading: z.string().min(1),
  paragraphs: z.array(z.string()).min(1),
});

export const knowledgeArticleSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  group: knowledgeGroupSchema,
  category: z.string().min(1),
  kind: contentKindSchema,
  publishedAt: z.string(),
  updatedAt: z.string(),
  /** ISO date of last qualified content review; optional until review gate passes. */
  lastReviewedAt: z.string().optional(),
  reviewStatus: reviewStatusSchema,
  body: z.array(z.string()).min(1),
  /** Short educational bullets; must not invent tax conclusions. */
  keyTakeaways: z.array(z.string()).optional(),
  /** Optional structured sections for longer research pages. */
  sections: z.array(articleSectionSchema).optional(),
  sources: z
    .array(
      z.object({
        label: z.string(),
        href: z.string().url().optional(),
        note: z.string().optional(),
      }),
    )
    .default([]),
  relatedSlugs: z.array(z.string()).default([]),
  // Optional case-law fields (required before verified publication of Group D)
  court: z.string().optional(),
  citation: z.string().optional(),
  decisionDate: z.string().optional(),
  facts: z.string().optional(),
  issue: z.string().optional(),
  holding: z.string().optional(),
  reasoning: z.string().optional(),
  relevance: z.string().optional(),
  verificationNote: z.string().optional(),
  assumptions: z.array(z.string()).optional(),
});

export type KnowledgeArticle = z.infer<typeof knowledgeArticleSchema>;
export type KnowledgeGroup = z.infer<typeof knowledgeGroupSchema>;
export type ReviewStatus = z.infer<typeof reviewStatusSchema>;
export type ContentKind = z.infer<typeof contentKindSchema>;
export type ArticleSection = z.infer<typeof articleSectionSchema>;

export const contentKindLabels: Record<ContentKind, string> = {
  "primary-authority": "Primary legal authority",
  "irs-government": "Official IRS / government resource",
  "secondary-commentary": "Secondary commentary",
  "company-education": "Company educational explanation",
  "illustrative-example": "Hypothetical / illustrative example",
};
