import { createGroupArticlePage } from "@/lib/content/createGroupPages";

const { generateStaticParams, generateMetadata, Page } =
  createGroupArticlePage("studies");

export { generateStaticParams, generateMetadata };
export default Page;
