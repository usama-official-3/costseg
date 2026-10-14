import Link from "next/link";
import { ArticleBody } from "@/components/knowledge/ArticleBody";
import { ArticleHeader } from "@/components/knowledge/ArticleHeader";
import { Breadcrumbs } from "@/components/knowledge/Breadcrumbs";
import { CaseMetaPanel } from "@/components/knowledge/CaseMetaPanel";
import { KeyTakeaways } from "@/components/knowledge/KeyTakeaways";
import { RelatedLinks } from "@/components/knowledge/RelatedLinks";
import { ReviewGateBanner } from "@/components/knowledge/ReviewGateBanner";
import { SourceList } from "@/components/knowledge/SourceList";
import { CtaBand } from "@/components/marketing/CtaBand";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { LinkButton } from "@/components/ui/LinkButton";
import {
  getGroupMeta,
  getRelatedArticles,
} from "@/lib/content/knowledge";
import { articleJsonLd } from "@/lib/seo/structuredData";
import type { KnowledgeArticle } from "@/lib/schemas/knowledge";

export function ArticleTemplate({ article }: { article: KnowledgeArticle }) {
  const group = getGroupMeta(article.group);
  const related = getRelatedArticles(article);
  const isCase = article.group === "cases";
  const schema = articleJsonLd(article);

  return (
    <main id="main-content">
      {schema ? <JsonLd data={schema} /> : null}
      <div className="border-b border-line bg-gradient-to-b from-soft to-paper">
        <Section surface="paper" className="bg-transparent py-8 sm:py-12">
          <Container>
            <Breadcrumbs
              items={[
                { href: "/knowledge-hub", label: "Knowledge Hub" },
                { href: group.href, label: group.label },
                { label: article.title },
              ]}
            />
          </Container>
        </Section>
      </div>

      <Section surface="paper" className="pb-6 pt-8 sm:pb-10 sm:pt-10">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12">
          <article className="cs-reveal space-y-8">
            <ReviewGateBanner status={article.reviewStatus} />
            <ArticleHeader article={article} />
            {article.keyTakeaways && article.keyTakeaways.length > 0 ? (
              <KeyTakeaways items={article.keyTakeaways} />
            ) : null}
            {isCase ? <CaseMetaPanel article={article} /> : null}
            {!isCase && (article.court || article.citation) ? (
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
            ) : null}
            <ArticleBody
              paragraphs={article.body}
              sections={article.sections}
            />
            <section className="border-t border-line pt-8">
              <h2 className="text-lg font-bold tracking-tight text-ink">
                Sources
              </h2>
              <div className="mt-3">
                <SourceList sources={article.sources} />
              </div>
            </section>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <RelatedLinks articles={related} />
            <div className="rounded-[13px] border border-line bg-soft p-5">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-muted">
                Next step
              </p>
              <p className="mt-2 text-sm font-bold text-ink">
                Need a property study?
              </p>
              <p className="mt-2 text-sm text-muted">
                Educational pages do not replace a formal cost segregation
                engagement.
              </p>
              <div className="mt-4">
                <LinkButton href="/request-a-study" size="sm">
                  Get Started
                </LinkButton>
              </div>
              <p className="mt-3 text-xs text-muted">
                <Link
                  href={group.href}
                  className="font-semibold hover:underline"
                >
                  More in {group.label}
                </Link>
                {" · "}
                <Link
                  href="/knowledge-hub"
                  className="font-semibold hover:underline"
                >
                  Knowledge Hub
                </Link>
              </p>
            </div>
          </aside>
        </Container>
      </Section>

      <CtaBand
        title="Ready to discuss a study?"
        body="Educational research stays draft until reviewed. For a property engagement, share basic details and we’ll outline next steps."
        href="/request-a-study"
        label="Get Started"
        tone="ink"
      />
    </main>
  );
}
