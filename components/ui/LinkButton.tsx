import Link from "next/link";
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

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  /** Fully rounded (design-board hero CTAs) */
  pill?: boolean;
  className?: string;
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  size = "md",
  pill = false,
  className,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-bold transition",
        pill ? "rounded-full px-6" : "rounded-[8px]",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </Link>
  );
}
