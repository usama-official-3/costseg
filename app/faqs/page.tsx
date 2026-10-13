import type { Metadata } from "next";
import { CtaBand } from "@/components/marketing/CtaBand";
import { FaqPreview } from "@/components/marketing/FaqPreview";
import { Hero } from "@/components/marketing/Hero";
import { homeCopy } from "@/content/marketing/home";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about CostSeg SI process, documentation, and how Super Intelligence is presented.",
};

const moreFaqs = [
  ...homeCopy.faqs,
  {
    q: "Can I use the Knowledge Hub instead of a formal study?",
    a: "The Knowledge Hub (when published) is educational. A formal study still requires property-specific analysis and professional review.",
  },
  {
    q: "Where do form submissions go today?",
    a: "The frontend validates and mock-accepts submissions. Live delivery to email or CRM waits for client-approved destination configuration.",
  },
] as const;

export default function FaqsPage() {
  return (
    <main id="main-content">
      <Hero
        eyebrow="Help"
        title="Frequently asked questions"
        support="Technical and tax wording should receive client approval before treating FAQ copy as final."
        primaryLabel="Contact us"
      />
      <FaqPreview
        items={moreFaqs}
        showViewAll={false}
        heading="Answers"
      />
      <CtaBand />
    </main>
  );
}
