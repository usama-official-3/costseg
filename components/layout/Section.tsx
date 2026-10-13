import { cn } from "@/lib/cn";

const surfaces = {
  ink: "bg-ink text-white",
  paper: "bg-paper text-ink",
  soft: "bg-soft text-ink",
} as const;

type SectionProps = {
  children: React.ReactNode;
  surface?: keyof typeof surfaces;
  className?: string;
  id?: string;
};

export function Section({
  children,
  surface = "paper",
  className,
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn(surfaces[surface], className)}>
      {children}
    </section>
  );
}
