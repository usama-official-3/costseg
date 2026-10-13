import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/LinkButton";

type PagePlaceholderProps = {
  title: string;
  description: string;
};

/** Temporary route body until Phase 5–7 page content ships. */
export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <main id="main-content">
      <Section surface="ink" className="py-14 sm:py-16">
        <Container>
          <Badge variant="lime">Shell ready · content in later phases</Badge>
          <h1 className="mt-4 max-w-3xl text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold tracking-[-0.04em] text-white">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-hero-muted">{description}</p>
          <div className="mt-8">
            <LinkButton href="/contact">Get Started</LinkButton>
          </div>
        </Container>
      </Section>
    </main>
  );
}
