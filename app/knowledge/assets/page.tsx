import type { Metadata } from "next";
import { GroupIndex } from "@/components/knowledge/GroupIndex";

export const metadata: Metadata = {
  title: "Asset Library",
};

export default function AssetsIndexPage() {
  return <GroupIndex group="assets" />;
}
