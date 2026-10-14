import { createGroupArticlePage } from "@/lib/content/createGroupPages";

const { generateStaticParams, generateMetadata, Page } =
  createGroupArticlePage("fundamentals");

export { generateStaticParams, generateMetadata };
export default Page;
