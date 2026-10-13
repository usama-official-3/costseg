import { Hero } from "@/components/marketing/Hero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

type ToolLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
  notice?: string;
};

export function ToolLayout({
  eyebrow,
  title,
  description,
  children,
  notice = "Frontend preview tool. Educational only — not individualized tax advice.",
}: ToolLayoutProps) {
  return (
    <main id="main-content">
      <Hero
        eyebrow={eyebrow}
        title={title}
        support={`${description} ${notice}`}
        primaryHref="/contact"
        primaryLabel="Get Started"
        secondaryHref="/tools"
        secondaryLabel="All tools"
      />
      <Section surface="paper" className="py-10 sm:py-12">
        <Container>{children}</Container>
      </Section>
    </main>
  );
}
