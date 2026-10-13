import { z } from "zod";

export const questionnaireSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email."),
  phone: z.string().trim().optional(),
  propertyType: z.string().trim().min(1, "Select a property type."),
  studyType: z.enum(["acquisition", "new-construction", "renovation", "look-back", "unsure"], {
    message: "Select a study context.",
  }),
  placedInServiceYear: z
    .string()
    .trim()
    .regex(/^\d{4}$/, "Enter a four-digit year.")
    .optional()
    .or(z.literal("")),
  propertyAddress: z.string().trim().min(5, "Enter a property address or city/state."),
  hasPlans: z.enum(["yes", "no", "unsure"], {
    message: "Tell us if plans/drawings are available.",
  }),
  notes: z.string().trim().optional(),
  companyWebsite: z.string().optional(),
});

export type QuestionnaireValues = z.infer<typeof questionnaireSchema>;
