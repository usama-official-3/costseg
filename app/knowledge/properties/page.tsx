import type { Metadata } from "next";
import { GroupIndex } from "@/components/knowledge/GroupIndex";

export const metadata: Metadata = {
  title: "Property Guides",
};

export default function PropertiesIndexPage() {
  return <GroupIndex group="properties" />;
}
