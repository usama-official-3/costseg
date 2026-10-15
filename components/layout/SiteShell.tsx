import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";
import { SkipToContent } from "@/components/layout/SkipToContent";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <SkipToContent />
      <SiteHeader />
      {/* No bottom padding here — white gap was caused by paper bg + pb under dark footer */}
      <div className="flex min-h-0 flex-1 flex-col">
        {children}
        <SiteFooter />
      </div>
      <MobileBottomNav />
      <ScrollToTopButton />
    </>
  );
}
