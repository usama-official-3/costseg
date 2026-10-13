import type { Metadata } from "next";
import { GroupIndex } from "@/components/knowledge/GroupIndex";

export const metadata: Metadata = {
  title: "Court Cases",
};

export default function CasesIndexPage() {
  return <GroupIndex group="cases" />;
}
