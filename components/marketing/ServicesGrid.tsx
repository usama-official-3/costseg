import Link from "next/link";
import { ArrowRight, FileText, Layers, PieChart, Scale } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/LinkButton";
import { cn } from "@/lib/cn";

const icons = [FileText, Scale, Layers, PieChart];

type Service = {
  title: string;
  body: string;
  href: string;
};

type ServicesGridProps = {
  items: readonly Service[];
  title?: string;
  lead?: string;
  /**
   * split — homepage board layout (intro + compact 2×2 cards)
   * page — /services under photo hero
   */
  layout?: "split" | "page";
};

function ServiceCard({
  item,
  index,
  showLearnMore,
}: {
  item: Service;
  index: number;
  showLearnMore: boolean;
}) {
  const Icon = icons[index % icons.length];
  return (
    <article
      className={cn(
        "flex h-full w-full flex-col rounded-[14px] border border-line bg-paper",
        "p-4 shadow-[0_6px_20px_rgba(23,25,27,0.05)] sm:p-[1.125rem]",
        "transition hover:border-ink/10 hover:shadow-[0_10px_28px_rgba(23,25,27,0.08)]",
      )}
    >
      <div className="mb-3 grid size-9 shrink-0 place-items-center rounded-[8px] bg-[#eef6c8] shadow-[0_0_0_3px_rgba(238,246,200,0.45)]">
        <Icon className="size-4 text-ink" aria-hidden strokeWidth={1.75} />
      </div>
      {/* 2-line title slot — keeps row titles aligned without empty bulk */}
      <h3 className="line-clamp-2 min-h-[2.5rem] text-[14px] font-bold leading-snug tracking-tight text-ink sm:text-[15px]">
        <Link
          href={item.href}
          className="transition-colors hover:text-muted"
        >
          {item.title}
        </Link>
      </h3>
      {/* 2-line body slot — Learn more stays row-aligned without a tall empty gap */}
      <p className="mt-1 line-clamp-2 min-h-[2.5rem] text-[13px] leading-snug text-muted">
        {item.body}
      </p>
      {showLearnMore ? (
        <Link
          href={item.href}
          className="group mt-auto inline-flex shrink-0 items-center gap-1.5 pt-3 text-sm font-bold text-ink transition-[color,gap] duration-300 ease-out hover:gap-2.5 hover:text-muted lg:hidden"
        >
          Learn more
          <ArrowRight
            className="size-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
            aria-hidden
          />
        </Link>
      ) : null}
    </article>
  );
}

function ServiceCards({
  items,
  showLearnMore,
}: {
  items: readonly Service[];
  showLearnMore: boolean;
}) {
  return (
    <ul className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2 sm:gap-3.5 lg:gap-4">
      {items.map((item, index) => (
        <li key={item.title} className="flex min-w-0">
          <ServiceCard item={item} index={index} showLearnMore={showLearnMore} />
        </li>
      ))}
    </ul>
  );
}

export function ServicesGrid({
  items,
  title = "More Than a Study.\nA Smarter Approach.",
  lead = "We provide detailed cost segregation studies using advanced technology and industry expertise to help you reduce tax liability and increase cash flow.",
  layout = "split",
}: ServicesGridProps) {
  if (layout === "page") {
    return (
      <Section surface="soft" className="py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="mb-8 max-w-xl sm:mb-10">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-muted">
              Our services
            </p>
            <h2 className="mt-2 whitespace-pre-line text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{lead}</p>
          </div>
          <ServiceCards items={items} showLearnMore />
        </Container>
      </Section>
    );
  }

  return (
    <Section surface="soft" className="py-14 sm:py-16 lg:py-[4.5rem]">
      <Container>
        <div
          className={cn(
            "flex flex-col gap-10",
            "lg:grid lg:grid-cols-[minmax(260px,0.95fr)_minmax(0,1.15fr)] lg:items-center lg:gap-12 xl:gap-16",
          )}
        >
          <div className="max-w-md lg:max-w-[420px]">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-muted">
              Our services
            </p>
            <h2 className="mt-3 whitespace-pre-line text-[clamp(1.85rem,3.2vw,2.65rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-ink">
              {title}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-base">
              {lead}
            </p>
            <div className="mt-8">
              <LinkButton href="/services" size="lg" pill>
                Explore Our Services
                <ArrowRight
                  className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
                  aria-hidden
                />
              </LinkButton>
            </div>
          </div>

          <div className="w-full min-w-0">
            {/* Desktop matches board (no Learn more); mobile/tablet keep Learn more */}
            <ServiceCards items={items} showLearnMore />
          </div>
        </div>
      </Container>
    </Section>
  );
}
