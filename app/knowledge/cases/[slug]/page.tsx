import type { Metadata } from "next";
import { ArticleTemplate } from "@/components/knowledge/ArticleTemplate";
import {
  getArticleForGroupOr404,
  getStaticSlugParams,
} from "@/lib/content/knowledgeRoutes";

export function generateStaticParams() {
  return getStaticSlugParams("cases");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleForGroupOr404("cases", slug);
  return { title: article.title, description: article.summary };
}

export default async function CasesArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleForGroupOr404("cases", slug);
  return <ArticleTemplate article={article} />;
}
