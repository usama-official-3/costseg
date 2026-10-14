import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/LinkButton";
import { cn } from "@/lib/cn";

/**
 * Soft (paper) close only. Ink/dark “Discuss your property” strips were removed —
 * they duplicated the footer and left a wide empty gap beside the button.
 * Conversion on dark pages: header Get Started + footer “Request a study” link.
 */
export function CtaBand({
  title = "Discuss your property",
  body = "Share basic contact and property details. We’ll follow up on next steps for a potential cost segregation study.",
  href = "/request-a-study",
  label = "Get Started",
  tone = "soft",
}: {
  title?: string;
  body?: string;
  href?: string;
  label?: string;
  tone?: "soft" | "ink";
}) {
  // Dark band variant retired — footer owns the page close on ink surfaces.
  if (tone === "ink") {
    return null;
  }

  return (
    <Section surface="soft" className="border-t border-line py-10 sm:py-12">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-bold tracking-tight text-ink sm:text-xl">
              {title}
            </h2>
            <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
              {body}
            </p>
          </div>
          <LinkButton
            href={href}
            variant="primary"
            pill
            className={cn("shrink-0 self-start sm:self-center")}
          >
            {label}
          </LinkButton>
        </div>
      </Container>
    </Section>
  );
}
