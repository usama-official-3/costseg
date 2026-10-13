import type { Metadata } from "next";
import Link from "next/link";
import { KnowledgeSearchPanel } from "@/components/knowledge/KnowledgeSearchPanel";
import { Hero } from "@/components/marketing/Hero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/LinkButton";
import { getAllArticles, listGroups } from "@/lib/content/knowledge";

export const metadata: Metadata = {
  title: "Knowledge Hub",
  description:
    "Searchable CostSeg SI educational knowledge hub samples — fundamentals, tax law, cases, property guides, assets, and studies.",
};

export default function KnowledgeHubPage() {
  const articles = getAllArticles();
  const groups = listGroups();

  return (
    <main id="main-content">
      <Hero
        eyebrow="Research · Education"
        title="Cost Segregation Knowledge Hub"
        support="Browse sample educational articles across the proposed research library. This Phase 6 seed set demonstrates templates and search — not the full ~187-page inventory. Educational only — not individualized tax advice."
        primaryHref="/knowledge/fundamentals"
        primaryLabel="Browse fundamentals"
        secondaryHref="/contact"
        secondaryLabel="Get Started"
      />

      <Section surface="paper" className="py-12">
        <Container>
          <h2 className="text-xl font-bold tracking-tight">Browse by group</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((group) => (
              <li key={group.group}>
                <Card className="h-full">
                  <h3 className="font-bold">
                    <Link href={group.href} className="hover:underline">
                      {group.label}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-muted">{group.description}</p>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section surface="soft" className="py-12">
        <Container>
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight">
                Search sample library
              </h2>
              <p className="mt-2 text-sm text-muted">
                Client-side filters over seeded content. Full-text backend search
                can replace this later without rewriting templates.
              </p>
            </div>
            <LinkButton href="/knowledge/resources/research-library-disclaimer" variant="secondaryLight" size="sm">
              Research disclaimer
            </LinkButton>
          </div>
          <KnowledgeSearchPanel articles={articles} />
        </Container>
      </Section>
    </main>
  );
}
