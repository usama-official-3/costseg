import Image from "next/image";
import { brand } from "@/config/brand";
import { cn } from "@/lib/cn";

const variants = {
  "on-dark": brand.assets.markOnDark,
  "on-light": brand.assets.markOnLight,
} as const;

type BrandMarkProps = {
  variant?: keyof typeof variants;
  size?: number;
  className?: string;
  alt?: string;
};

export function BrandMark({
  variant = "on-dark",
  size = 32,
  className,
  alt = `${brand.name} mark`,
}: BrandMarkProps) {
  return (
    <Image
      src={variants[variant]}
      alt={alt}
      width={size}
      height={size}
      className={cn("h-auto w-auto", className)}
      style={{ width: size, height: size }}
    />
  );
}
