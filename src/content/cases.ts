export type Case = {
  slug: string;
  title: string;
  role: string;
  company: string;
  year: string;
  tags: string[];
  summary: string;
  // Optional richer hero: an outcome headline instead of the product name, plus a facts card.
  headline?: string;
  team?: string;
  deliverables?: string[];
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
    year: "2020 · revisited 2026",
    headline: "A clinic's worklist that says what needs doing now.",
    team: "2 designers, 1 PM, 1 front-end and 1 back-end developer",
    deliverables: ["UX audit", "Flows", "Prototype", "Design system"],
    tags: ["Healthcare", "Web app", "Design system"],
    summary:
      "A staff system for a busy diagnostic clinic. Our team designed the first version in 2020; in 2026 I audited it and redesigned it: one clear priority and status language, task lists that show what needs action now, and role-aware views. Built as a working prototype on a documented design system.",
  },
  {
    slug: "patronim",
    title: "Patronim",
    role: "UI/UX Designer",
    company: "Patronim · Tel Aviv",
    year: "2019 · revisited 2026",
    tags: ["Mobile app", "Operations", "Design system"],
    summary:
      "A mobile app for a Tel Aviv company that cleans short-term rentals. I designed it in 2019 to replace spreadsheets for six roles; in 2026 I redesigned it around one deadline, the next guest's check-in, and built it as a working prototype with AI.",
    headline: "From Excel sheets to a service that beats the guest to the door.",
    team: "The only UI/UX designer in a team of 8: 2 mobile, 1 front-end and 1 part-time web developer, 2 QA, 1 PM",
    deliverables: ["UX audit", "User flows", "Service blueprint", "Mobile prototype", "Design system"],
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
