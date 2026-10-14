"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Home,
  Info,
  Mail,
  Route,
  X,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { primaryCta, primaryNav } from "@/config/navigation";
import { cn } from "@/lib/cn";

const navIcons: Record<(typeof primaryNav)[number]["href"], LucideIcon> = {
  "/": Home,
  "/how-cost-segregation-works": Route,
  "/knowledge-hub": BookOpen,
  "/property-types": Building2,
  "/about": Info,
  "/contact": Mail,
};

type MobileNavDrawerProps = {
  open: boolean;
  onClose: () => void;
  /** When false, backdrop taps are ignored (avoids open-tap closing the drawer). */
  backdropEnabled: boolean;
};

export function MobileNavDrawer({
  open,
  onClose,
  backdropEnabled,
}: MobileNavDrawerProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "fixed inset-0 z-[200] lg:hidden",
        open ? "visible" : "invisible pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Close menu"
        className={cn(
          "absolute inset-0 bg-ink/80 transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0",
        )}
        style={{ pointerEvents: open && backdropEnabled ? "auto" : "none" }}
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal={open}
        aria-label="Site navigation"
        className={cn(
          "absolute inset-y-0 right-0 flex w-[min(100%,19.5rem)] flex-col border-l border-white/10 bg-[#121416] text-white shadow-2xl transition-transform duration-200 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-16 shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4">
          <Logo variant="on-dark" />
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-11 items-center justify-center rounded-full bg-white/5 text-white"
            aria-label="Close menu"
          >
            <X className="size-5 pointer-events-none" aria-hidden />
          </button>
        </div>

        <nav
          aria-label="Mobile primary"
          className="drawer-scroll flex-1 overflow-y-auto overscroll-contain px-3 py-4"
        >
          <ul className="space-y-1.5">
            {primaryNav.map((item) => {
              const Icon = navIcons[item.href] ?? Home;
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex min-h-12 items-center gap-3 rounded-2xl px-3 py-2.5 text-[15px] font-semibold",
                      active
                        ? "bg-lime/10 text-lime ring-1 ring-lime/25"
                        : "text-white/85 active:bg-white/5",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    <span
                      className={cn(
                        "inline-flex size-9 shrink-0 items-center justify-center rounded-xl",
                        active ? "bg-lime text-ink" : "bg-white/5 text-lime",
                      )}
                    >
                      <Icon
                        className="size-4 pointer-events-none"
                        strokeWidth={2.25}
                        aria-hidden
                      />
                    </span>
                    <span className="flex-1">{item.label}</span>
                    <ArrowRight
                      className={cn(
                        "size-4 shrink-0 pointer-events-none",
                        active ? "text-lime" : "text-white/25",
                      )}
                      aria-hidden
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="shrink-0 border-t border-white/10 bg-[#0e1012] px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <Link
            href={primaryCta.href}
            onClick={onClose}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-lime px-5 text-sm font-extrabold text-ink"
          >
            {primaryCta.label}
            <ArrowRight className="size-4 pointer-events-none" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}
