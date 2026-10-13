export function ArticleBody({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4 text-base leading-relaxed text-ink">
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className="text-muted">
          <span className="text-ink">{paragraph}</span>
        </p>
      ))}
      <p className="rounded-[13px] border border-line bg-soft p-4 text-sm text-muted">
        Educational material only — not individualized tax advice. Confirm
        primary authorities and seek qualified professional guidance before
        acting.
      </p>
    </div>
  );
}
