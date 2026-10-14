import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { KnowledgeSearchPanel } from "@/components/knowledge/KnowledgeSearchPanel";
import { CtaBand } from "@/components/marketing/CtaBand";
import { Hero } from "@/components/marketing/Hero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/LinkButton";
import {
  getAllArticles,
  getArticlesByGroup,
  listGroups,
} from "@/lib/content/knowledge";
import { buildPageMetadata } from "@/lib/seo/pageMetadata";

export const metadata = buildPageMetadata({
  title: "Knowledge Hub",
  description:
    "Searchable CostSeg SI educational knowledge hub — fundamentals, tax law, cases, property guides, assets, studies, and resources. Draft demos are not indexed.",
  path: "/knowledge-hub",
});

export default function KnowledgeHubPage() {
  const articles = getAllArticles();
  const groups = listGroups();

  return (
    <main id="main-content">
      <Hero
        eyebrow="Research · Education"
        title="Cost Segregation Knowledge Hub"
        support="Browse the full educational library across research groups. Educational only — not individualized tax advice."
        primaryHref="/learn"
        primaryLabel="Browse fundamentals"
        secondaryHref="/request-a-study"
        secondaryLabel="Request a study"
      />

      <Section surface="paper" className="py-12 sm:py-14">
        <Container>
          <div className="mb-8 max-w-3xl">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              Browse by group
            </h2>
            <p className="mt-2 text-sm text-muted">
              {articles.length} educational articles across seven research
              groups. Client-approved for production indexing.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((group) => {
              const count = getArticlesByGroup(group.group).length;
              return (
                <li key={group.group}>
                  <Link
                    href={group.href}
                    className="group flex h-full flex-col rounded-[13px] border border-line bg-paper p-5 transition-colors hover:border-ink/25 hover:bg-soft"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-bold tracking-tight text-ink group-hover:underline">
                        {group.label}
                      </h3>
                      <ArrowUpRight
                        className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden
                      />
                    </div>
                    <p className="mt-2 flex-1 text-sm text-muted">
                      {group.description}
                    </p>
                    <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.1em] text-ink">
                      {count} pages
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section surface="soft" className="py-12 sm:py-14">
        <Container>
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                Search the library
              </h2>
              <p className="mt-2 text-sm text-muted">
                Client-side filters over draft educational content. Full-text
                backend search can replace this later without rewriting
                templates.
              </p>
            </div>
            <LinkButton
              href="/resources/research-library-disclaimer"
              variant="secondaryLight"
              size="sm"
            >
              Research disclaimer
            </LinkButton>
          </div>
          <KnowledgeSearchPanel articles={articles} />
        </Container>
      </Section>

      <CtaBand
        title="Need help choosing a starting point?"
        body="Begin with Fundamentals, or request a study conversation if you already have a property in mind."
        href="/request-a-study"
        tone="ink"
      />
    </main>
  );
}
