import { createGroupArticlePage } from "@/lib/content/createGroupPages";

const { generateStaticParams, generateMetadata, Page } =
  createGroupArticlePage("cases");

export { generateStaticParams, generateMetadata };
export default Page;
