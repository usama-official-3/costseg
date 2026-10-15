import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

type Faq = { q: string; a: string };

export function FaqPreview({
  items,
  href = "/faqs",
  showViewAll = true,
  heading = "Common questions",
}: {
  items: readonly Faq[];
  href?: string;
  showViewAll?: boolean;
  heading?: string;
}) {
  return (
    <Section surface="soft" className="py-14 sm:py-16">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-muted">
              FAQs
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              {heading}
            </h2>
          </div>
          {showViewAll ? (
            <Link
              href={href}
              className="text-sm font-bold text-ink transition-colors hover:text-muted"
            >
              View all FAQs
            </Link>
          ) : null}
        </div>

        <div className="mt-8 divide-y divide-line rounded-[13px] border border-line bg-paper">
          {items.map((item) => (
            <details key={item.q} className="group p-5">
              <summary className="cursor-pointer list-none font-semibold text-ink marker:content-none">
                <span className="flex items-start justify-between gap-4">
                  {item.q}
                  <span className="text-muted transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
