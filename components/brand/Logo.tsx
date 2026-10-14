import Image from "next/image";
import Link from "next/link";
import { brand } from "@/config/brand";
import { cn } from "@/lib/cn";

const variants = {
  "on-dark": brand.assets.lockupOnDark,
  "on-light": brand.assets.lockupOnLight,
  "stacked-dark": brand.assets.stackedOnDark,
  "stacked-light": brand.assets.stackedOnLight,
} as const;

type LogoVariant = keyof typeof variants;

type LogoProps = {
  variant?: LogoVariant;
  className?: string;
  priority?: boolean;
  href?: string | null;
};

export function Logo({
  variant = "on-dark",
  className,
  priority = false,
  href = "/",
}: LogoProps) {
  const stacked = variant.startsWith("stacked");
  const onDark = variant === "on-dark" || variant === "stacked-dark";
  const image = (
    <Image
      src={variants[variant]}
      alt={brand.name}
      width={stacked ? 140 : 180}
      height={stacked ? 120 : 40}
      priority={priority}
      className={cn(
        stacked ? "h-auto w-[120px]" : "h-8 w-auto max-w-full sm:h-9",
        // Official on-dark PNGs ship with an opaque near-black plate; lighten
        // blends that plate into ink headers without editing the asset.
        onDark && "mix-blend-lighten",
        className,
      )}
    />
  );

  if (href === null) return image;

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 bg-transparent outline-none [-webkit-tap-highlight-color:transparent] focus-visible:rounded-[8px]"
      aria-label={brand.name}
    >
      {image}
    </Link>
  );
}
