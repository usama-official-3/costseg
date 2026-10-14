import { createGroupArticlePage } from "@/lib/content/createGroupPages";

const { generateStaticParams, generateMetadata, Page } =
  createGroupArticlePage("assets");

export { generateStaticParams, generateMetadata };
export default Page;
