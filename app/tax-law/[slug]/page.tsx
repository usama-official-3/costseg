import { createGroupArticlePage } from "@/lib/content/createGroupPages";

const { generateStaticParams, generateMetadata, Page } =
  createGroupArticlePage("tax-law");

export { generateStaticParams, generateMetadata };
export default Page;
