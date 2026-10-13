import { Badge } from "@/components/ui/Badge";
import type { ReviewStatus } from "@/lib/schemas/knowledge";

const labels: Record<ReviewStatus, string> = {
  draft: "Draft — not verified",
  "internal-review": "Internal review",
  reviewed: "Reviewed",
  verified: "Verified",
};

export function ReviewStatusBadge({ status }: { status: ReviewStatus }) {
  const variant =
    status === "verified" || status === "reviewed" ? "lime" : "warning";
  return <Badge variant={variant}>{labels[status]}</Badge>;
}
