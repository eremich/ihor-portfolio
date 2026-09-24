export type Case = {
  slug: string;
  title: string;
  role: string;
  company: string;
  year: string;
  tags: string[];
  summary: string;
};

// TODO: verify company/year/tags/summary for every non-API-Nation case.
// Only API Nation is grounded in the CV; the others are placeholders
// waiting for real details from Ihor.

export const cases: Case[] = [
  {
    slug: "regulate",
    title: "Regulate",
    role: "Product Designer",
    company: "Preview / demo case",
    year: "2024",
    tags: ["Healthcare", "Mobile", "Design System"],
    summary:
      "A personalized metabolic health platform powered by continuous glucose monitoring. Preview content used only to showcase the case-page layout.",
  },
  {
    slug: "apination",
    title: "API Nation",
    role: "Sole Product Designer",
    company: "API Nation",
    year: "2020 — 2026",
    tags: ["B2B SaaS", "Real Estate", "AI"],
    summary:
      "A real-estate automation platform with 4,000+ clients and 45M tasks a month. Design system from scratch, full platform redesign, onboarding, a no-code workflow builder, and conversational UI for an autonomous AI lead agent.",
  },
  {
    slug: "patient-management",
    title: "Patient Management System",
    role: "Product Designer",
    company: "New Malden Diagnostic Centre",
    year: "2020",
    tags: ["Healthcare", "Web app", "Design system"],
    summary:
      "A staff system for a busy diagnostic clinic, redesigned from a UX audit: one clear priority and status language, task lists that show what needs action now, and role-aware views. Built as a working prototype on a documented design system.",
  },
  {
    slug: "eticket",
    title: "Eticket",
    role: "UX / UI Designer",
    company: "A-Development",
    year: "2018",
    tags: ["Ticketing", "Web", "iOS"],
    summary:
      "The ticket-buying flow for a European events platform — from search to checkout on mobile and web.",
  },
  {
    slug: "hadron-solar",
    title: "Hadron Solar",
    role: "UX / UI Designer",
    company: "A-Development",
    year: "2019",
    tags: ["Energy", "Dashboard", "Web"],
    summary:
      "Field-technician tooling for solar installations — surveys, wiring diagrams, and site reports.",
  },
  {
    slug: "konto",
    title: "Konto",
    role: "Product Designer",
    company: "Independent",
    year: "2022",
    tags: ["Fintech", "Web", "iOS"],
    summary:
      "A personal-finance interface that turns bank feeds into a calm, monthly picture.",
  },
  {
    slug: "wandr",
    title: "Wandr",
    role: "Product Designer",
    company: "Independent",
    year: "2021",
    tags: ["Travel", "Mobile"],
    summary:
      "A trip-planning app for people who hate trip planning — itineraries built from a few gentle prompts.",
  },
  {
    slug: "pokecollect",
    title: "PokeCollect",
    role: "Product Designer",
    company: "Independent",
    year: "2022",
    tags: ["Consumer", "Mobile", "Community"],
    summary:
      "A collector-first app for tracking, valuing, and trading Pokémon cards.",
  },
];

export function getCase(slug: string): Case | undefined {
  return cases.find((c) => c.slug === slug);
}
