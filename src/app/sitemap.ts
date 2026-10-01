import type { MetadataRoute } from "next";
import { cases } from "@/content/cases";
import { SITE_URL } from "@/lib/site";

// Every page in both languages, each pointing at its translation.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", ...cases.map((c) => `/work/${c.slug}`)];
  return pages.flatMap((path) => {
    const en = `${SITE_URL}${path || "/"}`;
    const de = `${SITE_URL}/de${path}`;
    const languages = { en, de };
    const priority = path ? 0.8 : 1;
    return [
      { url: en, alternates: { languages }, priority },
      { url: de, alternates: { languages }, priority },
    ];
  });
}
