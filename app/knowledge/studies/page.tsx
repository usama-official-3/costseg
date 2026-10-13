import type { Metadata } from "next";
import { GroupIndex } from "@/components/knowledge/GroupIndex";

export const metadata: Metadata = {
  title: "Case Studies",
};

export default function StudiesIndexPage() {
  return <GroupIndex group="studies" />;
}
