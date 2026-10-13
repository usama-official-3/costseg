import { cn } from "@/lib/cn";

type SkeletonProps = {
  className?: string;
  /** ink = translucent on dark hero; soft = default on paper */
  tone?: "soft" | "ink" | "lime";
};

export function Skeleton({ className, tone = "soft" }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-[8px]",
        tone === "soft" && "bg-soft",
        tone === "ink" && "bg-white/10",
        tone === "lime" && "bg-lime/35",
        className,
      )}
      aria-hidden
    />
  );
}

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-[13px] border border-line bg-paper p-5",
        className,
      )}
    >
      <Skeleton className="mb-4 size-9 rounded-[9px]" />
      <Skeleton className="mb-2 h-5 w-2/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-5/6" />
    </div>
  );
}

/** Compact search + result list for knowledge routes */
export function SkeletonKnowledge() {
  return (
    <div className="min-h-[50vh] bg-paper pb-[calc(72px+env(safe-area-inset-bottom))] lg:pb-0">
      <div className="bg-ink">
        <div className="container-content py-12 sm:py-14">
          <Skeleton tone="ink" className="mb-4 h-3 w-36" />
          <Skeleton tone="ink" className="mb-3 h-9 w-full max-w-lg" />
          <Skeleton tone="ink" className="h-4 w-full max-w-md" />
          <Skeleton tone="ink" className="mt-3 h-4 w-3/4 max-w-sm" />
        </div>
      </div>
      <div className="container-content space-y-6 py-10">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Skeleton className="h-11 flex-1 rounded-[8px]" />
          <Skeleton className="h-11 w-full sm:w-32" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Tools index / panel layout */
export function SkeletonTools() {
  return (
    <div className="min-h-[50vh] bg-paper pb-[calc(72px+env(safe-area-inset-bottom))] lg:pb-0">
      <div className="bg-ink">
        <div className="container-content grid gap-8 py-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-14">
          <div>
            <Skeleton tone="ink" className="mb-4 h-3 w-28" />
            <Skeleton tone="ink" className="mb-3 h-9 w-full max-w-md" />
            <Skeleton tone="ink" className="h-4 w-full max-w-sm" />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Skeleton tone="lime" className="h-12 w-36 rounded-full" />
              <Skeleton tone="ink" className="h-12 w-32 rounded-full" />
            </div>
          </div>
          <Skeleton
            tone="ink"
            className="hidden h-48 w-full rounded-[13px] lg:block"
          />
        </div>
      </div>
      <div className="container-content py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-[13px] border border-line bg-paper p-6"
            >
              <Skeleton className="mb-4 size-10 rounded-[9px]" />
              <Skeleton className="mb-2 h-5 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="mt-2 h-4 w-5/6" />
              <Skeleton className="mt-6 h-10 w-28 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Contact / lead form skeleton */
export function SkeletonForm() {
  return (
    <div className="min-h-[50vh] bg-paper pb-[calc(72px+env(safe-area-inset-bottom))] lg:pb-0">
      <div className="bg-ink">
        <div className="container-content py-12 sm:py-14">
          <Skeleton tone="ink" className="mb-4 h-3 w-28" />
          <Skeleton tone="ink" className="mb-3 h-9 w-full max-w-lg" />
          <Skeleton tone="ink" className="h-4 w-full max-w-md" />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Skeleton tone="lime" className="h-12 w-36 rounded-full" />
            <Skeleton tone="ink" className="h-12 w-36 rounded-full" />
          </div>
        </div>
      </div>
      <div className="container-content max-w-2xl py-10">
        <div className="space-y-5 rounded-[13px] border border-line bg-paper p-6 sm:p-8">
          <Skeleton className="h-6 w-48" />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-11 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-11 w-full" />
            </div>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-11 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-28 w-full" />
          </div>
          <Skeleton tone="lime" className="h-12 w-full max-w-xs rounded-full" />
        </div>
      </div>
    </div>
  );
}
