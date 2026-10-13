import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CostSeg SI | Cost Segregation, Accelerated by Super Intelligence",
    template: "%s | CostSeg SI",
  },
  description:
    "Cost segregation studies accelerated by Super Intelligence. Technology-led property cost analysis supporting professional review.",
  metadataBase: new URL("https://costseg.si"),
  applicationName: "CostSeg SI",
  keywords: [
    "cost segregation",
    "Super Intelligence",
    "MACRS",
    "depreciation",
    "real estate tax",
  ],
  authors: [{ name: "CostSeg SI" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://costseg.si",
    siteName: "CostSeg SI",
    title: "CostSeg SI | Cost Segregation, Accelerated by Super Intelligence",
    description:
      "Technology-led cost segregation study preparation with professional review.",
    images: [
      {
        url: "/brand/costseg-si-lockup-on-dark.png",
        width: 1200,
        height: 630,
        alt: "CostSeg SI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CostSeg SI",
    description:
      "Cost segregation studies accelerated by Super Intelligence.",
    images: ["/brand/costseg-si-lockup-on-dark.png"],
  },
  icons: {
    icon: "/brand/favicon.png",
    apple: "/brand/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#17191B",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip bg-paper font-sans text-ink">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
