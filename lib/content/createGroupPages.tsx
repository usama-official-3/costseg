import type { Metadata } from "next";
import { GroupIndex } from "@/components/knowledge/GroupIndex";
import { ArticleTemplate } from "@/components/knowledge/ArticleTemplate";
import { getGroupMeta } from "@/lib/content/knowledge";
import {
  getArticleForGroupOr404,
  getStaticSlugParams,
} from "@/lib/content/knowledgeRoutes";
import { buildArticleMetadata } from "@/lib/seo/articleMetadata";
import type { KnowledgeGroup } from "@/lib/schemas/knowledge";

export function createGroupIndexPage(group: KnowledgeGroup) {
  const meta = getGroupMeta(group);

  const metadata: Metadata = {
    title: meta.label,
    description: meta.description,
    alternates: { canonical: meta.href },
    openGraph: {
      title: meta.label,
      description: meta.description,
      url: meta.href,
      siteName: "CostSeg SI",
      type: "website",
    },
  };

  function Page() {
    return <GroupIndex group={group} />;
  }

  return { metadata, Page };
}

export function createGroupArticlePage(group: KnowledgeGroup) {
  function generateStaticParams() {
    return getStaticSlugParams(group);
  }

  async function generateMetadata({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }): Promise<Metadata> {
    const { slug } = await params;
    const article = getArticleForGroupOr404(group, slug);
    return buildArticleMetadata(article);
  }

  async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getArticleForGroupOr404(group, slug);
    return <ArticleTemplate article={article} />;
  }

  return { generateStaticParams, generateMetadata, Page };
}
