import type { Metadata } from "next";
import { GroupIndex } from "@/components/knowledge/GroupIndex";

export const metadata: Metadata = {
  title: "Resources",
};

export default function ResourcesIndexPage() {
  return <GroupIndex group="resources" />;
}
