/**
 * Primary navigation — aligned to client 6-item tree (Default A URLs).
 * Tools remain available via footer + mobile bottom nav (OQ-14).
 */
export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/how-cost-segregation-works", label: "How It Works" },
  { href: "/knowledge-hub", label: "Knowledge Hub" },
  { href: "/property-types", label: "Property Types" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const mobileBottomNav = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/knowledge-hub", label: "Research", icon: "search" },
  { href: "/tools", label: "Tools", icon: "wrench" },
  { href: "/contact", label: "Contact", icon: "mail" },
] as const;

export const footerToolsNav = [
  { href: "/tools", label: "Tools" },
  { href: "/tools/questionnaire", label: "Questionnaire" },
  { href: "/tools/workflow-explorer", label: "Workflow explorer" },
] as const;

export const primaryCta = {
  href: "/request-a-study",
  label: "Get Started",
} as const;
