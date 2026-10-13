import { BrandMark } from "@/components/brand/BrandMark";
import { Skeleton, SkeletonCard } from "@/components/loaders/Skeleton";
import { cn } from "@/lib/cn";

type PageSkeletonProps = {
  className?: string;
  label?: string;
  /** Show thin trust strip under hero (homepage-style) */
  showTrust?: boolean;
};

/**
 * Full-page marketing skeleton — mirrors hero + card grid.
 * SiteHeader/Footer stay from the root layout; this is page content only.
 */
export function PageSkeleton({
  className,
  label = "Loading CostSeg SI",
  showTrust = true,
}: PageSkeletonProps) {
  return (
    <div
      className={cn(
        "relative min-h-[calc(100svh-4rem)] bg-paper pb-[calc(72px+env(safe-area-inset-bottom))] lg:pb-0",
        className,
      )}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={label}
    >
      {/* Secondary brand accent — not the primary UI */}
      <div
        className="pointer-events-none absolute top-4 right-4 z-10 opacity-70 sm:top-6 sm:right-6"
        aria-hidden
      >
        <div className="cs-loader-tile inline-flex rounded-[9px] bg-ink/80 p-1.5 ring-1 ring-lime/30">
          <BrandMark variant="on-dark" size={22} />
        </div>
      </div>

      {/* Dark hero — split on desktop, stacked on mobile */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="container-content grid gap-10 py-12 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 lg:py-16 xl:min-h-[420px]">
          <div className="max-w-xl">
            <Skeleton tone="ink" className="mb-5 h-3 w-44 sm:w-52" />
            <Skeleton tone="ink" className="mb-3 h-10 w-full max-w-lg sm:h-11" />
            <Skeleton tone="ink" className="mb-3 h-10 w-[92%] max-w-md sm:h-11" />
            <Skeleton tone="ink" className="mb-3 h-10 w-[70%] max-w-sm sm:h-11" />
            <Skeleton tone="ink" className="mt-6 h-4 w-full max-w-md" />
            <Skeleton tone="ink" className="mt-2 h-4 w-4/5 max-w-sm" />
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Skeleton tone="lime" className="h-12 w-full rounded-full sm:w-36" />
              <Skeleton tone="ink" className="h-12 w-full rounded-full sm:w-44" />
            </div>
          </div>

          <Skeleton
            tone="ink"
            className="aspect-[4/3] w-full rounded-[13px] sm:aspect-[16/11] lg:aspect-auto lg:min-h-[320px] xl:min-h-[380px]"
          />
        </div>

        {showTrust ? (
          <div className="border-t border-white/10 bg-ink/90">
            <div className="container-content grid grid-cols-2 gap-4 py-5 md:grid-cols-4 md:gap-6 lg:py-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 lg:flex-row lg:items-center lg:justify-start"
                >
                  <Skeleton tone="lime" className="size-[18px] shrink-0 rounded-[4px]" />
                  <Skeleton tone="ink" className="h-3 w-24 sm:w-28" />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      {/* Light content — responsive card grid */}
      <section className="bg-soft/60 py-10 sm:py-12">
        <div className="container-content">
          <Skeleton className="mb-3 h-3 w-28" />
          <Skeleton className="mb-2 h-8 w-full max-w-md" />
          <Skeleton className="mb-8 h-4 w-full max-w-lg" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-10 sm:py-12">
        <div className="container-content">
          <Skeleton className="mb-3 h-3 w-24" />
          <Skeleton className="mb-8 h-8 w-full max-w-sm" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
