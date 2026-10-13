import type { Metadata } from "next";
import { GroupIndex } from "@/components/knowledge/GroupIndex";

export const metadata: Metadata = {
  title: "Fundamentals",
};

export default function FundamentalsIndexPage() {
  return <GroupIndex group="fundamentals" />;
}
