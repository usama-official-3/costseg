import type { Metadata } from "next";
import { ArticleTemplate } from "@/components/knowledge/ArticleTemplate";
import {
  getArticleForGroupOr404,
  getStaticSlugParams,
} from "@/lib/content/knowledgeRoutes";

export function generateStaticParams() {
  return getStaticSlugParams("studies");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleForGroupOr404("studies", slug);
  return { title: article.title, description: article.summary };
}

export default async function StudiesArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleForGroupOr404("studies", slug);
  return <ArticleTemplate article={article} />;
}
