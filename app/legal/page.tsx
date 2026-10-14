import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/marketing/Hero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Privacy, Terms and Disclaimers",
  description:
    "Legal hub for CostSeg SI privacy notice, terms, and educational disclaimers. Placeholders pending counsel review.",
  alternates: { canonical: "/legal" },
};

export default function LegalHubPage() {
  return (
    <main id="main-content">
      <Hero
        eyebrow="Legal"
        title="Privacy, terms and disclaimers"
        support="Placeholder legal pages for development. Final language requires authorized counsel review before production launch."
        primaryHref="/contact"
        primaryLabel="Contact"
      />
      <Section surface="paper" className="py-14">
        <Container>
          <ul className="grid gap-4 sm:grid-cols-2">
            <li>
              <Card className="h-full">
                <h2 className="text-lg font-bold tracking-tight">
                  <Link href="/legal/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-muted">
                  How form and site data may be handled. Placeholder until
                  counsel-approved policy is published.
                </p>
              </Card>
            </li>
            <li>
              <Card className="h-full">
                <h2 className="text-lg font-bold tracking-tight">
                  <Link href="/legal/terms" className="hover:underline">
                    Terms / Disclaimers
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Educational-use terms and professional/tax disclaimers.
                  Placeholder until authorized review.
                </p>
              </Card>
            </li>
          </ul>
        </Container>
      </Section>
    </main>
  );
}
