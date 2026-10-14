import {
  ClipboardList,
  Settings2,
  ShieldCheck,
  Users,
} from "lucide-react";
import { cn } from "@/lib/cn";

const icons = [ShieldCheck, ClipboardList, Settings2, Users];

type TrustItem = { title: string; body?: string };

/** Split "Engineer-reviewed delivery" → ["Engineer-reviewed", "delivery"] for the board-style two-line label. */
function splitTitle(title: string): [string, string] {
  const trimmed = title.trim();
  const i = trimmed.lastIndexOf(" ");
  if (i <= 0) return [trimmed, ""];
  return [trimmed.slice(0, i), trimmed.slice(i + 1)];
}

/** Glass trust strip at hero foot (design-board style). Soft labels only. */
export function TrustBar({
  items,
  className,
}: {
  items: readonly TrustItem[];
  className?: string;
}) {
  return (
    <div className={cn("relative z-10 px-3 pt-2 pb-8 sm:px-5 sm:pb-10 lg:px-8 lg:pb-12", className)}>
      <div className="mx-auto w-full max-w-[1120px]">
        <ul
          className={cn(
            "grid grid-cols-2 lg:grid-cols-4",
            "overflow-hidden rounded-2xl border border-white/12 sm:rounded-[1.25rem]",
            "bg-[#141618]/85 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md",
            "divide-x divide-y divide-white/10 lg:divide-y-0",
          )}
        >
          {items.map((item, index) => {
            const Icon = icons[index % icons.length];
            const [line1, line2] = splitTitle(item.title);
            return (
              <li
                key={item.title}
                className="flex items-center gap-3 px-4 py-4 sm:gap-3.5 sm:px-5 sm:py-5"
              >
                <Icon
                  className="size-5 shrink-0 text-lime sm:size-[22px]"
                  aria-hidden
                  strokeWidth={1.75}
                />
                <p className="text-[12px] font-semibold leading-[1.25] tracking-tight text-white sm:text-[13px]">
                  <span className="block">{line1}</span>
                  {line2 ? <span className="block">{line2}</span> : null}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
