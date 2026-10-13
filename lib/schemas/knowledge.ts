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

export const knowledgeArticleSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  group: knowledgeGroupSchema,
  category: z.string().min(1),
  kind: contentKindSchema,
  publishedAt: z.string(),
  updatedAt: z.string(),
  reviewStatus: reviewStatusSchema,
  body: z.array(z.string()).min(1),
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
  // Optional case-law fields
  court: z.string().optional(),
  citation: z.string().optional(),
  verificationNote: z.string().optional(),
  assumptions: z.array(z.string()).optional(),
});

export type KnowledgeArticle = z.infer<typeof knowledgeArticleSchema>;
export type KnowledgeGroup = z.infer<typeof knowledgeGroupSchema>;
export type ReviewStatus = z.infer<typeof reviewStatusSchema>;
