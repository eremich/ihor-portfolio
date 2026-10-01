import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { SiteChrome } from "@/components/site-chrome";

export const metadata: Metadata = {
  alternates: { canonical: "/", languages: { en: "/", de: "/de" } },
};

export default function Page() {
  return (
    <SiteChrome lang="en">
      <HomePage lang="en" />
    </SiteChrome>
  );
}
