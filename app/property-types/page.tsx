import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/marketing/CtaBand";
import { Hero } from "@/components/marketing/Hero";
import { ResultList } from "@/components/knowledge/ResultList";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { getArticlesByGroup } from "@/lib/content/knowledge";

export const metadata: Metadata = {
  title: "Property Types We Analyze",
  description:
    "Illustrative property categories commonly evaluated in cost segregation education and studies.",
  alternates: { canonical: "/property-types" },
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
  const guides = getArticlesByGroup("properties");

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
                    Detailed property guides expand under this section as
                    counsel-reviewed content is approved.
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {guides.length > 0 ? (
        <Section surface="soft" className="py-12">
          <Container>
            <h2 className="text-xl font-bold tracking-tight">
              Sample property guides
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              Draft educational samples — not indexed until reviewStatus is
              approved.{" "}
              <Link
                href="/knowledge-hub"
                className="font-semibold transition-colors hover:text-muted"
              >
                Knowledge Hub
              </Link>
            </p>
            <div className="mt-6">
              <ResultList articles={guides} />
            </div>
          </Container>
        </Section>
      ) : null}

      <CtaBand tone="ink" />
    </main>
  );
}
