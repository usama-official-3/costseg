import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { footerToolsNav, primaryCta, primaryNav } from "@/config/navigation";

const legalNav = [
  { href: "/legal", label: "Legal hub" },
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/terms", label: "Terms / Disclaimers" },
] as const;

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.14em] text-lime">
      {children}
    </p>
  );
}

function ColLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-[13px] leading-snug text-[#B4B8BB] transition-colors hover:text-white sm:text-sm"
    >
      {label}
    </Link>
  );
}

/**
 * Single cohesive footer — brand + links + legal.
 * Page-level ink CtaBand is disabled; compact study CTA under the brand.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-5">
            <Logo variant="on-dark" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#9AA0A4]">
              Cost segregation studies accelerated by Super Intelligence —
              technology-led analysis with professional review.
            </p>
            <div className="mt-5">
              <LinkButton
                href={primaryCta.href}
                size="sm"
                className="min-h-9 px-4 text-[13px] font-semibold tracking-tight"
              >
                Request a study
              </LinkButton>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ColHeading>Explore</ColHeading>
            <ul className="space-y-2">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <ColLink href={item.href} label={item.label} />
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <ColHeading>Tools</ColHeading>
            <ul className="space-y-2">
              {footerToolsNav.map((item) => (
                <li key={item.href}>
                  <ColLink href={item.href} label={item.label} />
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <ColHeading>Legal</ColHeading>
            <ul className="space-y-2">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <ColLink href={item.href} label={item.label} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-1 py-4 text-[11px] text-[#7A8085] sm:flex-row sm:items-center sm:justify-between sm:text-xs">
          <p>Educational information only — not individualized tax advice.</p>
          <p>© 2026 CostSeg SI</p>
        </Container>
        <div
          className="h-[calc(72px+env(safe-area-inset-bottom))] bg-ink lg:hidden"
          aria-hidden
        />
      </div>
    </footer>
  );
}
