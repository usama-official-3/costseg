import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TrustBar } from "@/components/marketing/TrustBar";
import { LinkButton } from "@/components/ui/LinkButton";
import { siteImages } from "@/lib/images";
import { cn } from "@/lib/cn";

type TrustItem = { title: string; body?: string };

type HeroMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
};

type HeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  support: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  /** Defaults to site hero photo so every page shares the homepage layout. */
  media?: HeroMedia;
  trustItems?: readonly TrustItem[];
  /** Subpages default compact; homepage passes false for the taller board hero. */
  compact?: boolean;
};

export function Hero({
  eyebrow,
  title,
  support,
  primaryHref = "/request-a-study",
  primaryLabel = "Get Started",
  secondaryHref,
  secondaryLabel,
  media = siteImages.hero,
  trustItems,
  compact = true,
}: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div
        className={cn(
          "relative flex flex-col",
          compact
            ? "min-h-[min(520px,calc(100svh-64px-72px))] lg:min-h-[480px] xl:min-h-[520px]"
            : "min-h-[calc(100svh-64px-72px)] lg:min-h-[clamp(560px,calc(100svh-64px),760px)]",
        )}
      >
        {/* Photo box keeps near-portrait proportions so the building isn't over-zoomed */}
        <div className="absolute inset-x-0 bottom-0 h-[62%] sm:left-auto sm:h-full sm:w-[60%] lg:w-[58%] xl:w-[55%]">
          <Image
            src={media.src}
            alt={media.alt}
            fill
            priority
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 72vw, 58vw"
            className="object-cover object-[center_30%]"
          />
          {/* Mobile: fade photo top into ink */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-ink/40 via-[45%] to-ink/10 sm:hidden"
            aria-hidden
          />
          {/* sm+: fade photo left edge into ink so there is no seam */}
          <div
            className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-ink via-ink/60 via-[30%] to-transparent to-[65%] sm:block"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink to-transparent"
            aria-hidden
          />
        </div>
        {/* Tablet: extra veil behind copy where it overlaps the photo */}
        <div
          className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-ink/80 via-ink/50 via-[50%] to-transparent sm:block lg:hidden"
          aria-hidden
        />

        <div
          className={cn(
            "hero-gutter relative z-10 flex flex-1 items-start sm:items-center",
            compact
              ? "pt-10 pb-40 sm:py-12 lg:py-14"
              : "pt-10 pb-56 sm:py-10 lg:py-16",
          )}
        >
          <div className="cs-reveal w-full max-w-[600px] pr-5 sm:max-w-[480px] lg:max-w-[600px] lg:pr-8">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-lime lg:text-[12px]">
              {eyebrow}
            </p>
            <h1
              className={cn(
                "mt-4 font-extrabold leading-[1.06] tracking-[-0.045em]",
                compact
                  ? "text-[clamp(1.85rem,6vw,2.5rem)] lg:mt-4 lg:text-[clamp(2.25rem,3.4vw,3.25rem)]"
                  : "text-[clamp(2.1rem,8vw,2.75rem)] lg:mt-5 lg:text-[clamp(2.75rem,4vw,3.75rem)]",
              )}
            >
              {title}
            </h1>
            <p
              className={cn(
                "mt-4 max-w-md leading-relaxed text-hero-muted",
                compact
                  ? "text-[15px] lg:mt-4 lg:text-base"
                  : "text-[15px] lg:mt-5 lg:text-lg",
              )}
            >
              {support}
            </p>
            <div
              className={cn(
                "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center",
                !compact && "lg:mt-9",
              )}
            >
              <LinkButton href={primaryHref} size="lg" pill>
                {primaryLabel}
              </LinkButton>
              {secondaryHref && secondaryLabel ? (
                <LinkButton href={secondaryHref} variant="secondary" size="lg" pill>
                  {secondaryLabel}
                  <ArrowRight
                    className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </LinkButton>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {trustItems && trustItems.length > 0 ? (
        <TrustBar items={trustItems} />
      ) : null}
    </section>
  );
}
