import type { KnowledgeArticle } from "@/lib/schemas/knowledge";

export function SourceList({ sources }: { sources: KnowledgeArticle["sources"] }) {
  if (!sources.length) {
    return (
      <p className="text-sm text-muted">
        No source links attached yet. Add verified citations before treating this
        page as authoritative.
      </p>
    );
  }

  return (
    <ul className="space-y-3">
      {sources.map((source) => (
        <li
          key={source.label}
          className="rounded-[13px] border border-line bg-paper p-4 text-sm"
        >
          {source.href ? (
            <a
              href={source.href}
              className="font-semibold text-ink underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {source.label}
            </a>
          ) : (
            <p className="font-semibold text-ink">{source.label}</p>
          )}
          {source.note ? (
            <p className="mt-1 text-muted">{source.note}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
