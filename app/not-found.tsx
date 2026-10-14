import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/LinkButton";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main id="main-content">
      <Section surface="ink" className="py-20">
        <Container className="max-w-2xl">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.15em] text-lime">
            404
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-4 text-hero-muted">
            That URL is not available. Try the homepage, Knowledge Hub, or
            contact form.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="/">Home</LinkButton>
            <LinkButton href="/knowledge-hub" variant="secondary">
              Knowledge Hub
            </LinkButton>
            <LinkButton href="/request-a-study" variant="secondary">
              Contact
            </LinkButton>
          </div>
        </Container>
      </Section>
    </main>
  );
}
