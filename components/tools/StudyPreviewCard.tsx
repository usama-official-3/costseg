import { illustrativeStudyPreview } from "@/content/tools/workflow";

export function StudyPreviewCard() {
  const preview = illustrativeStudyPreview;

  return (
    <aside className="rounded-[13px] border border-white/10 bg-white/5 p-5 text-white">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-lime">
            {preview.label}
          </p>
          <h2 className="mt-2 text-lg font-bold">{preview.property}</h2>
        </div>
        <span className="rounded-full border border-lime/40 px-2.5 py-1 text-[11px] font-bold text-lime">
          {preview.status}
        </span>
      </div>

      <ul className="mt-5 grid grid-cols-2 gap-2">
        {preview.buckets.map((bucket) => (
          <li
            key={bucket.label}
            className="rounded-[10px] border border-white/10 bg-ink/40 p-3"
          >
            <p className="text-xs font-bold">{bucket.label}</p>
            <p className="mt-1 text-[11px] text-hero-muted">{bucket.value}</p>
          </li>
        ))}
      </ul>

      <ul className="mt-4 list-disc space-y-1 pl-4 text-xs text-hero-muted">
        {preview.notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </aside>
  );
}
