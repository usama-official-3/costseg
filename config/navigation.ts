/** Primary navigation — Phase 4 will wire into Header / MobileBottomNav. */
export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/knowledge", label: "Knowledge Hub" },
  { href: "/tools", label: "Tools" },
  { href: "/property-types", label: "Property Types" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const mobileBottomNav = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/knowledge", label: "Research", icon: "search" },
  { href: "/tools", label: "Tools", icon: "wrench" },
  { href: "/contact", label: "Contact", icon: "mail" },
] as const;

export const primaryCta = {
  href: "/contact",
  label: "Get Started",
} as const;
