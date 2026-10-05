import type { Lang } from "@/i18n";

export type Concept = {
  slug: string;
  title: string;
  url: string;
  year: string;
  /** 16:10 still of the concept, in /public/concepts. */
  image: string;
  tags: string[];
  summary: Record<Lang, string>;
  imageAlt: Record<Lang, string>;
};

export const concepts: Concept[] = [
  {
    slug: "bvg-night-shift",
    title: "BVG Night Shift",
    url: "https://bvg-nightshift.vercel.app",
    year: "2026",
    image: "/concepts/bvg-night-shift.webp",
    tags: ["WebGL", "Three.js", "Motion"],
    summary: {
      en: "A cyberpunk careers site for Berlin's transit company: a U-Bahn tunnel that speeds up as you scroll, a split-flap departure board of open jobs, and a crowd scanner.",
      de: "Eine Karriereseite der BVG im Cyberpunk-Stil: ein U-Bahn-Tunnel, der beim Scrollen beschleunigt, eine Fallblatt-Anzeige mit offenen Stellen und ein Scanner für die Menge.",
    },
    imageAlt: {
      en: "Neon U-Bahn tunnel behind the headline “Berlin braucht dich. Auch nachts.”",
      de: "Neon-U-Bahn-Tunnel hinter der Überschrift „Berlin braucht dich. Auch nachts.“",
    },
  },
  {
    slug: "bsr-kehrwende",
    title: "BSR Kehrwende",
    url: "https://bsr-kehrwende.vercel.app",
    year: "2026",
    image: "/concepts/bsr-kehrwende.webp",
    tags: ["WebGL", "Three.js", "Motion"],
    summary: {
      en: "A careers site for Berlin's city cleaning service: autumn leaves drift with your cursor around the TV Tower, and scrolling sweeps them away.",
      de: "Eine Karriereseite der Berliner Stadtreinigung: Herbstlaub weht mit dem Cursor um den Fernsehturm, und beim Scrollen wird es weggekehrt.",
    },
    imageAlt: {
      en: "Orange autumn leaves falling around the Berlin TV Tower behind the headline “VORANGEhen.”",
      de: "Orangefarbenes Herbstlaub fällt um den Berliner Fernsehturm hinter der Überschrift „VORANGEhen.“",
    },
  },
];
