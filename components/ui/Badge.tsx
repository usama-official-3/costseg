import { cn } from "@/lib/cn";

const variants = {
  lime: "bg-[#f0f4df] text-ink",
  muted: "bg-soft text-muted border border-line",
  warning: "bg-[#fafcef] text-ink border border-[#d4ed57]",
} as const;

type BadgeProps = {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

export function Badge({ children, variant = "lime", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-extrabold tracking-wide",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
