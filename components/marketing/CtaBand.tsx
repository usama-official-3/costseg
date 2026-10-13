import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/LinkButton";

export function CtaBand({
  title = "Discuss your property",
  body = "Share basic contact and property details. We’ll follow up on next steps for a potential cost segregation study.",
  href = "/contact",
  label = "Get Started",
}: {
  title?: string;
  body?: string;
  href?: string;
  label?: string;
}) {
  return (
    <Section surface="paper" className="pb-16 pt-4">
      <Container>
        <div className="rounded-[13px] border border-line bg-soft p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
          <div className="max-w-xl">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              {title}
            </h2>
            <p className="mt-2 text-sm text-muted sm:text-base">{body}</p>
          </div>
          <div className="mt-5 shrink-0 sm:mt-0">
            <LinkButton href={href}>{label}</LinkButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
