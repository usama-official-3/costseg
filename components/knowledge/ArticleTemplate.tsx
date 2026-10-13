import Link from "next/link";
import { ArticleBody } from "@/components/knowledge/ArticleBody";
import { ArticleHeader } from "@/components/knowledge/ArticleHeader";
import { Breadcrumbs } from "@/components/knowledge/Breadcrumbs";
import { RelatedLinks } from "@/components/knowledge/RelatedLinks";
import { SourceList } from "@/components/knowledge/SourceList";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/LinkButton";
import {
  getGroupMeta,
  getRelatedArticles,
} from "@/lib/content/knowledge";
import type { KnowledgeArticle } from "@/lib/schemas/knowledge";

export function ArticleTemplate({ article }: { article: KnowledgeArticle }) {
  const group = getGroupMeta(article.group);
  const related = getRelatedArticles(article);

  return (
    <main id="main-content">
      <Section surface="paper" className="py-10 sm:py-14">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <article className="space-y-8">
            <Breadcrumbs
              items={[
                { href: "/knowledge", label: "Knowledge Hub" },
                { href: group.href, label: group.label },
                { label: article.title },
              ]}
            />
            <ArticleHeader article={article} />
            {(article.court || article.citation) && (
              <dl className="grid gap-2 rounded-[13px] border border-line bg-soft p-4 text-sm sm:grid-cols-2">
                {article.court ? (
                  <div>
                    <dt className="font-semibold text-ink">Court</dt>
                    <dd className="text-muted">{article.court}</dd>
                  </div>
                ) : null}
                {article.citation ? (
                  <div>
                    <dt className="font-semibold text-ink">Citation</dt>
                    <dd className="text-muted">{article.citation}</dd>
                  </div>
                ) : null}
              </dl>
            )}
            <ArticleBody paragraphs={article.body} />
            <section>
              <h2 className="text-lg font-bold text-ink">Sources</h2>
              <div className="mt-3">
                <SourceList sources={article.sources} />
              </div>
            </section>
          </article>

          <aside className="space-y-6 lg:pt-10">
            <RelatedLinks articles={related} />
            <div className="rounded-[13px] border border-line bg-soft p-4">
              <p className="text-sm font-bold text-ink">Need a property study?</p>
              <p className="mt-2 text-sm text-muted">
                Educational pages do not replace a formal cost segregation
                engagement.
              </p>
              <div className="mt-4">
                <LinkButton href="/contact" size="sm">
                  Get Started
                </LinkButton>
              </div>
              <p className="mt-3 text-xs text-muted">
                <Link href="/knowledge" className="font-semibold hover:underline">
                  Back to Knowledge Hub
                </Link>
              </p>
            </div>
          </aside>
        </Container>
      </Section>
    </main>
  );
}
