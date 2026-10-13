import { z } from "zod";

export const leadFormSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().optional(),
  propertyType: z.string().trim().optional(),
  propertyAddress: z.string().trim().optional(),
  message: z
    .string()
    .trim()
    .min(10, "Please share a short note about your property or request."),
  companyWebsite: z.string().optional(), // honeypot
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
