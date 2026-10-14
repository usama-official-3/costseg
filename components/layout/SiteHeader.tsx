"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { LinkButton } from "@/components/ui/LinkButton";
import { Container } from "@/components/layout/Container";
import { MobileNavDrawer } from "@/components/layout/MobileNavDrawer";
import { primaryCta, primaryNav } from "@/config/navigation";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const [backdropEnabled, setBackdropEnabled] = useState(false);

  // Close the drawer when the route changes (adjust state during render).
  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setOpen(false);
  }
  if (!open && backdropEnabled) {
    setBackdropEnabled(false);
  }

  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => setBackdropEnabled(true), 400);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const y = window.scrollY;
    const body = document.body;
    const prev = body.style.cssText;
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${y}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    return () => {
      body.style.cssText = prev;
      window.scrollTo(0, y);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-[80] border-b border-white/10 bg-ink text-white">
        <Container className="flex h-16 min-h-16 items-center gap-3">
          <div className="min-w-0 flex-1 overflow-x-clip">
            <Logo variant="on-dark" priority className="max-w-full" />
          </div>

          <nav
            aria-label="Primary"
            className="hidden flex-nowrap items-center justify-end gap-0.5 whitespace-nowrap lg:flex"
          >
            {primaryNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-[8px] px-2.5 py-2 text-sm font-medium text-hero-muted transition hover:text-white xl:px-3",
                    active && "bg-white/5 text-white",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 lg:block">
            <LinkButton href={primaryCta.href} size="sm">
              {primaryCta.label}
            </LinkButton>
          </div>

          <button
            type="button"
            className="relative z-[90] -mr-2 flex size-12 shrink-0 items-center justify-center text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="pointer-events-none size-6" strokeWidth={2} aria-hidden />
            ) : (
              <Menu className="pointer-events-none size-6" strokeWidth={2} aria-hidden />
            )}
          </button>
        </Container>
      </header>

      <MobileNavDrawer
        open={open}
        onClose={() => setOpen(false)}
        backdropEnabled={backdropEnabled}
      />
    </>
  );
}
