import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { LinkTracker } from "@/components/link-tracker";
import { UMAMI_WEBSITE_ID } from "@/lib/analytics";
import { SITE_NAME, SITE_URL, siteCopy } from "@/lib/site";
import "./globals.css";

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

export const metadata: Metadata = {
  // Turns relative canonical / hreflang / image paths into full URLs.
  metadataBase: new URL(SITE_URL),
  title: siteCopy.en.title,
  description: siteCopy.en.description,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: siteCopy.en.title,
    description: siteCopy.en.description,
    locale: siteCopy.en.ogLocale,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

// Inlined in <head> so data-theme is set before the browser paints — no dark
// flash for users whose saved choice is light. Also marks German pages with lang="de".
const themeInitScript = `
(function() {
  if (location.pathname === '/de' || location.pathname.indexOf('/de/') === 0) {
    document.documentElement.setAttribute('lang', 'de');
  }
  try {
    var saved = localStorage.getItem('theme');
    var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    var theme = saved === 'light' || saved === 'dark' ? saved : (prefersLight ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen bg-paper text-ink antialiased">
        {children}
        <LinkTracker />
        {/* Production only, so local development visits stay out of the stats. */}
        {process.env.NODE_ENV === "production" && (
          <Script src="https://cloud.umami.is/script.js" data-website-id={UMAMI_WEBSITE_ID} strategy="afterInteractive" />
        )}
      </body>
    </html>
  );
}
