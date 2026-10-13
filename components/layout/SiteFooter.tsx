import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/layout/Container";
import { primaryNav } from "@/config/navigation";

export function SiteFooter() {
  return (
    <footer className="bg-ink pb-[calc(72px+env(safe-area-inset-bottom))] text-white lg:pb-0">
      <Container className="grid gap-8 py-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Logo variant="on-dark" />
          <p className="mt-4 max-w-md text-sm text-hero-muted">
            Cost segregation studies accelerated by Super Intelligence — a
            technology-led approach designed to streamline property cost analysis
            and support professional review.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-lime">
              Explore
            </p>
            <ul className="mt-3 space-y-2 text-sm text-hero-muted">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-lime">
              Legal
            </p>
            <ul className="mt-3 space-y-2 text-sm text-hero-muted">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms / Disclaimers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-4 text-xs text-hero-muted">
          <p>
            Educational information only — not individualized tax advice. ©
            2026 CostSeg SI.
          </p>
        </Container>
      </div>
    </footer>
  );
}
