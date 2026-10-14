import { Breadcrumbs } from "@/components/knowledge/Breadcrumbs";
import { ResultList } from "@/components/knowledge/ResultList";
import { CtaBand } from "@/components/marketing/CtaBand";
import { Hero } from "@/components/marketing/Hero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import {
  getArticlesByGroup,
  getGroupMeta,
} from "@/lib/content/knowledge";
import type { KnowledgeGroup } from "@/lib/schemas/knowledge";

export function GroupIndex({ group }: { group: KnowledgeGroup }) {
  const meta = getGroupMeta(group);
  const articles = getArticlesByGroup(group);

  return (
    <main id="main-content">
      <Hero
        eyebrow="Knowledge Hub"
        title={meta.label}
        support={`${meta.description} ${articles.length} educational pages in this group.`}
        primaryHref="/request-a-study"
        primaryLabel="Get Started"
        secondaryHref="/knowledge-hub"
        secondaryLabel="Back to hub"
      />
      <Section surface="paper" className="py-10 sm:py-14">
        <Container>
          <Breadcrumbs
            items={[
              { href: "/knowledge-hub", label: "Knowledge Hub" },
              { label: meta.label },
            ]}
          />
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                Articles in this group
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted">
                Educational Knowledge Hub pages for this group. Content is
                general information — not individualized tax advice.
              </p>
            </div>
            <p className="shrink-0 text-sm font-semibold text-ink">
              {articles.length} pages
            </p>
          </div>
          <div className="mt-8">
            <ResultList articles={articles} columns={2} />
          </div>
        </Container>
      </Section>
      <CtaBand href="/request-a-study" tone="ink" />
    </main>
  );
}
