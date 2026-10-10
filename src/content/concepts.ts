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
  {
    slug: "bundeswehr-lobby",
    title: "Bundeswehr Lobby",
    url: "https://bundeswehr-lobby.vercel.app",
    year: "2026",
    image: "/concepts/bundeswehr-lobby.webp",
    tags: ["WebGL", "Three.js", "AI imagery"],
    summary: {
      en: "A careers site for the German armed forces, built like a game lobby: pick one of ten roles, and the character materialises on a platform with its profile, gear and way in.",
      de: "Eine Karriereseite der Bundeswehr im Stil einer Spiel-Lobby: Wähle eine von zehn Rollen, und die Figur erscheint auf einer Plattform mit Profil, Ausrüstung und Einstiegsweg.",
    },
    imageAlt: {
      en: "Character select screen: a pilot in a flight suit on a hexagonal platform, the role list on the left and her profile on the right.",
      de: "Charakterauswahl: eine Pilotin im Fliegerkombi auf einer sechseckigen Plattform, links die Rollenliste, rechts ihr Profil.",
    },
  },
  {
    slug: "vattenfall-oekostrom",
    title: "Vattenfall Ökostrom",
    url: "https://vattenfall-oekostrom.vercel.app",
    year: "2026",
    image: "/concepts/vattenfall-oekostrom.webp",
    tags: ["WebGL", "Three.js", "Live data"],
    summary: {
      en: "A green-power tariff page as one flight over night-time Europe: where the power comes from, today's live exchange price under a real sun, and back home to Berlin.",
      de: "Eine Ökostrom-Tarifseite als ein Flug über das nächtliche Europa: woher der Strom kommt, der heutige Börsenpreis unter der echten Sonne und zurück nach Hause nach Berlin.",
    },
    imageAlt: {
      en: "Europe at night seen from orbit, city lights and thin trajectories converging on one yellow point in Berlin, next to the headline “Ihr Strom kommt von weit her.”",
      de: "Europa bei Nacht aus dem Orbit, Lichter der Städte und feine Bahnen, die in einem gelben Punkt in Berlin zusammenlaufen, neben der Überschrift „Ihr Strom kommt von weit her.“",
    },
  },
];
