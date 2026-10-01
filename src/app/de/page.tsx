import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { SiteChrome } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Ihor Yeromich — Product Designer",
  description:
    "Product Designer für SaaS- und KI-Teams in Berlin. Ich gestalte komplexe Produkte und baue sie mit KI: vom Designsystem bis zur Oberfläche eines autonomen KI-Agenten bei API Nation.",
  alternates: { canonical: "/de", languages: { en: "/", de: "/de" } },
};

export default function Page() {
  return (
    <SiteChrome lang="de">
      <HomePage lang="de" />
    </SiteChrome>
  );
}
