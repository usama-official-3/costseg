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
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-[80] border-b bg-ink text-white",
          "transition-[border-color,box-shadow] duration-300 ease-out",
          scrolled
            ? "border-white/12 shadow-[0_1px_0_rgba(214,255,67,0.08)]"
            : "border-white/10",
        )}
      >
        {/* Equal side columns keep logo / nav / CTA on one vertical center line */}
        <Container className="grid h-[4.5rem] grid-cols-[1fr_auto] items-center gap-3 lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex min-w-0 items-center justify-self-start">
            <Logo variant="on-dark" priority className="max-w-full" />
          </div>

          <nav
            aria-label="Primary"
            className="hidden h-11 items-center justify-center gap-1 lg:flex"
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
                    "relative inline-flex h-11 items-center px-3 text-[15px] font-semibold leading-none tracking-[-0.01em] xl:px-3.5",
                    "transition-colors duration-300 ease-out",
                    active
                      ? "text-white"
                      : "text-[#9AA0A4] hover:text-white",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-3 bottom-1.5 h-[2px] rounded-full bg-lime",
                      "origin-left transition-transform duration-300 ease-out",
                      active ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden h-11 items-center justify-self-end lg:flex">
            <LinkButton
              href={primaryCta.href}
              size="md"
              className="h-11 min-h-11 px-5 py-0 text-sm leading-none"
            >
              {primaryCta.label}
            </LinkButton>
          </div>

          <button
            type="button"
            className="relative z-[90] flex size-11 shrink-0 items-center justify-center justify-self-end text-white transition-colors duration-200 hover:text-lime lg:hidden"
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
