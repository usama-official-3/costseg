import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  FileStack,
  Gavel,
  Layers,
  Library,
  Scale,
  type LucideIcon,
} from "lucide-react";
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
import type { KnowledgeGroup } from "@/lib/schemas/knowledge";
import { buildPageMetadata } from "@/lib/seo/pageMetadata";
import { cn } from "@/lib/cn";

const groupIcons: Record<KnowledgeGroup, LucideIcon> = {
  fundamentals: BookOpen,
  "tax-law": Scale,
  cases: Gavel,
  properties: Building2,
  assets: Layers,
  studies: FileStack,
  resources: Library,
};

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
          <ul className="grid gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {groups.map((group) => {
              const count = getArticlesByGroup(group.group).length;
              const Icon = groupIcons[group.group];
              return (
                <li key={group.group}>
                  <Link
                    href={group.href}
                    className={cn(
                      "group relative flex h-full flex-col overflow-hidden rounded-[13px]",
                      "border border-line bg-paper p-5 sm:p-6",
                      "shadow-[0_1px_0_rgba(23,25,27,0.04)]",
                      "transition-[border-color,box-shadow,transform,background-color] duration-300 ease-out",
                      "hover:-translate-y-0.5 hover:border-ink/15 hover:bg-soft",
                      "hover:shadow-[0_12px_28px_rgba(23,25,27,0.08)]",
                      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime",
                    )}
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-8 -top-10 size-28 rounded-full bg-[radial-gradient(circle,rgba(214,255,67,0.16)_0%,transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />

                    <div className="relative flex items-start justify-between gap-3">
                      <div className="grid size-11 place-items-center rounded-[9px] bg-[#f0f4df] shadow-[0_0_0_3px_rgba(238,246,200,0.45)] transition-[background-color,box-shadow] duration-300 group-hover:bg-lime group-hover:shadow-[0_0_0_3px_rgba(214,255,67,0.28)]">
                        <Icon
                          className="size-5 text-ink"
                          strokeWidth={1.75}
                          aria-hidden
                        />
                      </div>
                      <span className="inline-flex size-8 items-center justify-center rounded-full border border-line bg-paper text-muted transition-[border-color,background-color,color,transform] duration-300 group-hover:border-ink/20 group-hover:bg-ink group-hover:text-lime group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight className="size-3.5" aria-hidden />
                      </span>
                    </div>

                    <h3 className="relative mt-5 text-lg font-bold tracking-tight text-ink">
                      {group.label}
                    </h3>
                    <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {group.description}
                    </p>
                    <div className="relative mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
                      <span className="inline-flex items-center rounded-full bg-soft px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink transition-colors duration-300 group-hover:bg-[#f0f4df]">
                        {count} pages
                      </span>
                      <span className="text-xs font-semibold text-muted transition-colors duration-300 group-hover:text-ink">
                        Browse
                      </span>
                    </div>
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
