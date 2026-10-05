export type Lang = "en" | "de";

export const langs: Lang[] = ["en", "de"];

/** Prefixes an absolute site path with the language segment. English lives at the root. */
export function localePath(lang: Lang, path: string): string {
  if (lang === "en") return path;
  return path === "/" ? "/de" : `/de${path}`;
}

/** Same page in the other language: "/work/x#y" <-> "/de/work/x#y". */
export function switchLangPath(pathname: string, to: Lang): string {
  const bare = pathname === "/de" ? "/" : pathname.startsWith("/de/") ? pathname.slice(3) : pathname;
  // The Impressum and Datenschutzerklärung exist in German only.
  if (germanOnly.includes(bare)) return localePath("de", bare);
  return localePath(to, bare);
}

const germanOnly = ["/impressum", "/datenschutz"];

// Short interface strings shared by the site shell. Case-study copy lives in src/content.
export const ui = {
  en: {
    nav: { cases: "Case studies", concepts: "Concepts", about: "About me", contacts: "Contacts" },
    navLabel: "Main",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
    language: "Language",
    footerBuilt: "Built in Berlin — Next.js, Tailwind",
    casesHeading: "Case studies",
    comingSoon: "Coming soon",
    conceptsHeading: "Concepts",
    unofficialConcept: "Unofficial concept",
    opensNewTab: "(opens in a new tab)",
    back: "← Back to case studies",
    caseStudy: "case study",
    tocTitle: "Story",
    tocLabel: "Case study sections",
    facts: {
      role: "Role",
      timeline: "Timeline",
      year: "Year",
      company: "Company",
      location: "Location",
      team: "Team",
      deliverables: "Deliverables",
    },
  },
  de: {
    nav: { cases: "Case Studies", concepts: "Konzepte", about: "Über mich", contacts: "Kontakt" },
    navLabel: "Hauptnavigation",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    toLight: "Zum hellen Design wechseln",
    toDark: "Zum dunklen Design wechseln",
    language: "Sprache",
    footerBuilt: "Entwickelt in Berlin — Next.js, Tailwind",
    casesHeading: "Case Studies",
    comingSoon: "Demnächst",
    conceptsHeading: "Konzepte",
    unofficialConcept: "Inoffizielles Konzept",
    opensNewTab: "(öffnet in neuem Tab)",
    back: "← Zurück zu den Case Studies",
    caseStudy: "Case Study",
    tocTitle: "Inhalt",
    tocLabel: "Abschnitte der Case Study",
    facts: {
      role: "Rolle",
      timeline: "Zeitraum",
      year: "Jahr",
      company: "Unternehmen",
      location: "Standort",
      team: "Team",
      deliverables: "Ergebnisse",
    },
  },
} satisfies Record<Lang, unknown>;
