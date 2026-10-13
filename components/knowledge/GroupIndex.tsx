import { Breadcrumbs } from "@/components/knowledge/Breadcrumbs";
import { ResultList } from "@/components/knowledge/ResultList";
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
        support={meta.description}
        primaryHref="/contact"
        primaryLabel="Get Started"
        secondaryHref="/knowledge"
        secondaryLabel="Back to hub"
      />
      <Section surface="paper" className="py-12">
        <Container>
          <Breadcrumbs
            items={[
              { href: "/knowledge", label: "Knowledge Hub" },
              { label: meta.label },
            ]}
          />
          <div className="mt-8">
            <ResultList articles={articles} />
          </div>
        </Container>
      </Section>
    </main>
  );
}
