import { createGroupArticlePage } from "@/lib/content/createGroupPages";

const { generateStaticParams, generateMetadata, Page } =
  createGroupArticlePage("resources");

export { generateStaticParams, generateMetadata };
export default Page;
