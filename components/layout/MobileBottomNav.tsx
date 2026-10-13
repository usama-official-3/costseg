"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Wrench, Mail } from "lucide-react";
import { mobileBottomNav } from "@/config/navigation";
import { cn } from "@/lib/cn";

const icons = {
  home: Home,
  search: Search,
  wrench: Wrench,
  mail: Mail,
} as const;

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      <ul className="grid w-full grid-cols-4">
        {mobileBottomNav.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons] ?? Home;
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "relative flex min-h-[60px] min-w-[44px] flex-col items-center justify-center gap-1 px-1 pt-2.5 pb-2 text-[11px] font-semibold transition",
                  active ? "text-lime" : "text-hero-muted hover:text-white",
                )}
                aria-current={active ? "page" : undefined}
              >
                {active ? (
                  <span
                    className="absolute inset-x-4 top-0 h-0.5 rounded-full bg-lime"
                    aria-hidden
                  />
                ) : null}
                <Icon
                  className={cn("size-5", active && "stroke-[2.25]")}
                  aria-hidden
                />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
