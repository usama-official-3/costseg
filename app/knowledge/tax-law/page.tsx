import type { Metadata } from "next";
import { GroupIndex } from "@/components/knowledge/GroupIndex";

export const metadata: Metadata = {
  title: "Tax Law & IRS",
};

export default function TaxLawIndexPage() {
  return <GroupIndex group="tax-law" />;
}
