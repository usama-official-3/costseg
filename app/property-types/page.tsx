import type { Metadata } from "next";
import { CtaBand } from "@/components/marketing/CtaBand";
import { Hero } from "@/components/marketing/Hero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Property Types We Analyze",
  description:
    "Illustrative property categories commonly evaluated in cost segregation education and studies.",
};

const categories = [
  "Multifamily & residential rentals",
  "Office & mixed-use",
  "Retail & restaurants",
  "Industrial, warehouse & self-storage",
  "Hospitality & healthcare",
  "Specialty & other commercial",
] as const;

export default function PropertyTypesPage() {
  return (
    <main id="main-content">
      <Hero
        eyebrow="Property types"
        title="Property categories we can discuss"
        support="Educational grouping of common commercial and rental property types. Final public list should match services the client confirms."
      />
      <Section surface="paper" className="py-14">
        <Container>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <li key={category}>
                <Card>
                  <h2 className="font-bold">{category}</h2>
                  <p className="mt-2 text-sm text-muted">
                    Detailed property guides are planned in the Knowledge Hub
                    (Phase 6).
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <CtaBand />
    </main>
  );
}
