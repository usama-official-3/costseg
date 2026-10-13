import {
  FileSearch,
  MessageSquare,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

const icons = [Workflow, ShieldCheck, MessageSquare, FileSearch];

type TrustItem = { title: string; body?: string };

/** Slim trust strip inside hero (design-board foot bar). Soft labels only. */
export function TrustBar({
  items,
  className,
}: {
  items: readonly TrustItem[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative z-10 border-t border-white/10 bg-ink/90 backdrop-blur-sm",
        className,
      )}
    >
      <Container>
        <ul className="grid grid-cols-2 justify-items-center gap-x-4 gap-y-6 py-6 md:grid-cols-4 md:gap-x-6 lg:justify-items-stretch lg:gap-8 lg:py-6">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <li
                key={item.title}
                className="flex max-w-[11rem] flex-col items-center gap-2 text-center md:max-w-none lg:max-w-none lg:flex-row lg:items-center lg:gap-3 lg:text-left"
              >
                <Icon
                  className="size-[18px] shrink-0 text-lime"
                  aria-hidden
                  strokeWidth={2}
                />
                <p className="text-[12px] font-medium leading-snug text-white/95 sm:text-[13px]">
                  {item.title}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}
