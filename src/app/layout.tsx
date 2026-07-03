import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { BackToTop } from "@/components/layout/BackToTop";
import { TooltipProvider } from "@/components/ui/tooltip";

import { LanguageProvider } from "@/context/LanguageContext";

/* ─── Fonts ─────────────────────────────────────────────────────────────── */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* ─── SEO Metadata ───────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://averroes.vercel.app"),
  title: {
    default: "Arsya Khalid Mahardika | IT Undergraduate & Web Developer",
    template: "%s | Arsya Khalid Mahardika",
  },
  description:
    "Personal portfolio of Arsya Khalid Mahardika — Information Technology undergraduate at Universitas Negeri Yogyakarta. Laravel, Next.js, Python developer available for internship opportunities.",
  keywords: [
    "Arsya Khalid Mahardika",
    "Web Developer",
    "Backend Developer",
    "Laravel Developer",
    "Software Engineer",
    "Universitas Negeri Yogyakarta",
    "UNY",
    "Yogyakarta",
    "Portfolio",
    "Next.js",
    "PHP",
    "Python",
  ],
  authors: [{ name: "Arsya Khalid Mahardika" }],
  creator: "Arsya Khalid Mahardika",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://averroes.dev",
    siteName: "Arsya Khalid Mahardika | Portfolio",
    title: "Arsya Khalid Mahardika | IT Undergraduate & Web Developer",
    description:
      "Personal portfolio of Arsya Khalid Mahardika — IT undergraduate at UNY. Available for internship and web development opportunities.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arsya Khalid Mahardika — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arsya Khalid Mahardika | Portfolio",
    description:
      "IT undergraduate & web developer from Universitas Negeri Yogyakarta.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

/* ─── Root Layout ────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            <TooltipProvider delayDuration={300}>
              <Navbar />
              <main id="main-content" className="flex-1">
                {children}
              </main>
              <BackToTop />
            </TooltipProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
