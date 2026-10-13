import Link from "next/link";
import { FileText, Layers, PieChart, Scale } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/LinkButton";

const icons = [FileText, Scale, Layers, PieChart];

type Service = {
  title: string;
  body: string;
  href: string;
};

export function ServicesGrid({
  items,
  title = "Services overview",
  lead = "Proposed service themes for CostSeg SI. Final public naming awaits client confirmation of offered services.",
}: {
  items: readonly Service[];
  title?: string;
  lead?: string;
}) {
  return (
    <Section surface="soft" className="py-14 sm:py-16">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-muted">
              Services
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 text-muted">{lead}</p>
          </div>
          <LinkButton href="/services" variant="secondaryLight">
            Explore services
          </LinkButton>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <li key={item.title}>
                <Card className="h-full border-line bg-paper p-6 transition hover:border-ink/20">
                  <div className="mb-5 grid size-11 place-items-center rounded-[9px] bg-[#f0f4df]">
                    <Icon className="size-5 text-ink" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight">
                    <Link
                      href={item.href}
                      className="transition hover:text-ink/80"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </Card>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
