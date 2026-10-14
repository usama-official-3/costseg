import type { ReviewStatus } from "@/lib/schemas/knowledge";

const copy: Record<ReviewStatus, { title: string; body: string }> = {
  draft: {
    title: "Draft — not for citation",
    body: "This page is a template or draft sample. It is excluded from search indexing until qualified review is complete.",
  },
  "internal-review": {
    title: "Internal review in progress",
    body: "Content is under internal review and is not indexed as finished authority.",
  },
  reviewed: {
    title: "Reviewed",
    body: "This page has passed internal review gates for publication.",
  },
  verified: {
    title: "Verified",
    body: "Sources and claims on this page have been verified for publication.",
  },
};

export function ReviewGateBanner({ status }: { status: ReviewStatus }) {
  if (status === "reviewed" || status === "verified") {
    return null;
  }

  const message = copy[status];

  return (
    <aside
      className="rounded-[13px] border border-[#d4ed57] bg-[#fafcef] px-4 py-3"
      role="status"
    >
      <p className="text-sm font-bold text-ink">{message.title}</p>
      <p className="mt-1 text-sm text-muted">{message.body}</p>
    </aside>
  );
}
