export function KeyTakeaways({ items }: { items: string[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="rounded-[13px] border border-line border-l-[3px] border-l-lime bg-soft/80 px-5 py-4">
      <h2 className="text-sm font-extrabold uppercase tracking-[0.12em] text-ink">
        Key takeaways
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
        {items.map((item) => (
          <li key={item.slice(0, 64)}>
            <span className="text-ink">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
