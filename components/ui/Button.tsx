import { cn } from "@/lib/cn";

const variants = {
  primary:
    "border border-transparent bg-lime text-ink hover:brightness-[0.96] hover:shadow-[0_6px_18px_rgba(214,255,67,0.28)]",
  /** Outline on dark — stays distinct from solid lime primary (never fills lime). */
  secondary:
    "border border-white/40 bg-transparent text-white hover:border-white hover:bg-white hover:text-ink hover:shadow-[0_8px_22px_rgba(255,255,255,0.14)]",
  /** Outline on light — soft lime wash, not the solid primary fill. */
  secondaryLight:
    "border border-line bg-transparent text-ink hover:border-ink/20 hover:bg-[#f0f4df] hover:text-ink",
  ghost:
    "border border-transparent bg-transparent text-ink hover:bg-soft hover:text-muted",
} as const;

const sizes = {
  sm: "min-h-10 px-3 py-2 text-xs",
  md: "min-h-11 px-4 py-3 text-sm",
  lg: "min-h-12 px-5 py-3.5 text-sm",
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "group inline-flex items-center justify-center gap-2 font-bold",
        "transition-[color,background-color,border-color,box-shadow,filter,transform,gap] duration-300 ease-out",
        "hover:gap-2.5 active:scale-[0.98]",
        "rounded-[8px] disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100",
        variants[variant],
        sizes[size],
        className,
      )}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <span className="text-xs tracking-wide">Loading…</span> : children}
    </button>
  );
}
