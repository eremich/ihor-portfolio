import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { SiteChrome } from "@/components/site-chrome";
import { SITE_NAME, siteCopy } from "@/lib/site";

export const metadata: Metadata = {
  title: siteCopy.de.title,
  description: siteCopy.de.description,
  alternates: { canonical: "/de", languages: { en: "/", de: "/de" } },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: siteCopy.de.title,
    description: siteCopy.de.description,
    locale: siteCopy.de.ogLocale,
    url: "/de",
  },
};

export default function Page() {
  return (
    <SiteChrome lang="de">
      <HomePage lang="de" />
    </SiteChrome>
  );
}
