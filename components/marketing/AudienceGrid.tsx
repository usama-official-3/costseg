import { Building2, BriefcaseBusiness, Users } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/LinkButton";

const icons = [Users, Building2, BriefcaseBusiness];

type Audience = { title: string; body: string };

export function AudienceGrid({ items }: { items: readonly Audience[] }) {
  return (
    <Section surface="paper" className="py-14 sm:py-16">
      <Container>
        <div className="max-w-2xl">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-muted">
            Who we help
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Built for property stakeholders
          </h2>
          <p className="mt-3 text-muted">
            Audience categories below are proposed. Confirm target segments with
            the client before treating them as final public positioning.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <li key={item.title}>
                <Card className="group h-full border-line p-6 transition hover:border-ink/20">
                  <div className="mb-5 grid size-11 place-items-center rounded-[9px] bg-[#f0f4df] transition group-hover:bg-lime">
                    <Icon className="size-5 text-ink" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </Card>
              </li>
            );
          })}
        </ul>

        <div className="mt-9">
          <LinkButton href="/who-we-help" variant="secondaryLight">
            See who we help
          </LinkButton>
        </div>
      </Container>
    </Section>
  );
}
