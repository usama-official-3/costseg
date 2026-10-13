import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-lime text-ink hover:brightness-95 border border-transparent",
  secondary:
    "bg-transparent text-white border border-[#64686b] hover:border-hero-muted",
  secondaryLight:
    "bg-transparent text-ink border border-line hover:bg-soft",
  ghost: "bg-transparent text-ink hover:bg-soft border border-transparent",
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
        "inline-flex items-center justify-center gap-2 rounded-[8px] font-bold transition disabled:cursor-not-allowed disabled:opacity-50",
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
