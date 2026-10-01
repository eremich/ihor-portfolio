// Case study content: Eticket, the electronic travel card app for Kharkiv public transport.
// Source: the approved case draft (D:\E-ticket\docs\case-draft.md), the 2020 research slides and the
// "Eticket redesign 2026: user flows" Miro board. Targets are labelled as targets; no invented metrics.

import type { Fact, Lesson, Shot } from "@/content/case-pms";
import type { PhonePair } from "@/content/case-patronim";

// Phone screens are 390 × 844 points, exported at 2× (780 × 1688).
export const phone = (dir: "after" | "dark" | "v1", file: string, alt: string, caption: string): Shot => ({
  src: `/case-eticket/${dir}/${file}.webp`,
  alt,
  caption,
  width: 780,
  height: 1688,
});
export const after = (file: string, alt: string, caption: string) => phone("after", file, alt, caption);
export const dark = (file: string, alt: string, caption: string) => phone("dark", file, alt, caption);
export const v1 = (file: string, alt: string, caption: string) => phone("v1", file, alt, caption);

export type Slide = Shot & { label: string };
export type Quote = { text: string };
export type FlowImage = { title: string; alt: string; src: string; width: number; height: number; wide?: boolean };

export const eticketLinks = {
  demo: "https://e-ticket-six-taupe.vercel.app",
  storybook: "https://e-ticket-six-taupe.vercel.app/storybook/",
  miro: "https://miro.com/app/board/uXjVHhQTOfI=/",
};

export const slide = (file: string, label: string, alt: string, caption: string, height: number): Slide => ({
  src: `/case-eticket/research/${file}.webp`,
  label,
  alt,
  caption,
  width: 1600,
  height,
});

export const eticketBody = {
  cover: [
    after("05-home", "Home screen: the nearest metro station and nearby stops, each with live arrivals", "Home: arrivals, not just stops"),
    after("11-tap-success", "Tap result: Paid, fare, new balance and a free transfer window", "One tap: paid, with the transfer window"),
    after("17-route-live", "Live trip on the metro map with the next station and a transfer prompt", "Live trip on the metro map"),
  ],

  highlights: [
    { number: "5 → 1", label: "steps to pay at the turnstile, now a single tap with the phone" },
    { number: "68.8%", label: "of the riders we researched in 2020 rode with a plastic card" },
    { number: "3 lines, 30 stations", label: "of the Kharkiv metro, with the current names after the 2022–2024 renaming" },
    { number: "14", label: "scenarios, clickable end to end, from a declined tap to a lost card" },
  ] as Fact[],

  overview: {
    kicker: "Overview",
    headline: "In 2020 we put Kharkiv's travel card into a phone. In 2026 I made paying take one tap.",
    paragraphs: [
      "Eticket is Kharkiv's electronic travel card for the metro, trams, trolleybuses and buses. You top it up, and each ride is charged at the turnstile or the validator.",
      "In 2020 I was the product designer on a team of three, with two developers. We shipped the first Eticket app: the card in your phone, top-ups, nearby stops, route search and trip history.",
      "In 2026 I audited our own app and redesigned it around the two moments a rider actually cares about: getting through the turnstile, and knowing when the next tram comes. I built the redesign as a working prototype with AI, with the design system in Storybook.",
    ],
  },

  problem: {
    kicker: "The problem",
    headline: "Riders had four problems. Our app solved them on paper, not at the turnstile.",
    riderTitle: "What riders told us in interviews, 2020",
    riders: [
      { title: "Cash and queues", desc: "Topping up a plastic card meant a line at a terminal." },
      { title: "Paper and plastic", desc: "Paper tickets and cards, used once and thrown away." },
      { title: "Visitors", desc: "If you are not local, buying a ticket is hard." },
      { title: "Waiting", desc: "Long, unpredictable waits at stops." },
    ],
    auditTitle: "What I found in our own app (audit, 2026)",
    findings: [
      { title: "Paying took five steps", desc: "On \"Pay for Travel\": pick the transport type, passengers, bags, check the total, confirm, then hold the phone to the terminal. At the turnstile, the moment with the least patience." },
      { title: "Stops without arrivals", desc: "Home listed nearby stops but not when the next vehicle comes, although waiting was one of the four problems." },
      { title: "Visitors could not start", desc: "Onboarding asked for the number of a plastic card they don't have." },
      { title: "No Apple Pay or Google Pay", desc: "Top-up offered a linked bank card and a custom keypad, while our research showed riders already pay by phone." },
      { title: "Two places to search a route", desc: "Home and \"A to B\"; tabs named \"Cards\" and \"Payments\" for the same thing." },
    ],
  },

  research: {
    kicker: "Research",
    headline: "We started with riders, not screens.",
    intro:
      "In 2020, before designing the first app, we interviewed Kharkiv riders and mapped a morning commute from home to work. The four problems above came from those conversations.",
    quotesTitle: "Key interview quotes",
    quotes: [
      { text: "I have no way of knowing my card's balance, I usually need to guess." },
      { text: "I hate the huge queue to the ticket terminal in the morning!" },
      { text: "I'm constantly late for work because I was fumbling with my card and cash, then spent a lot of time near the ticket terminal!" },
      { text: "I always forget to top up my Eticket card." },
    ] as Quote[],
    journey: {
      title: "Customer journey: getting to work",
      columns: ["", "Goal", "Route", "Transport", "Payment", "Service"],
      rows: [
        ["Doing", "Often late, rushing to catch transport", "Decides how to get to work, checks Google Maps", "Waits at the trolleybus stop, changes to the metro", "Pays in the trolleybus and the metro", "Buys a single ticket or tops up at a terminal"],
        ["Pain", "Trams and trolleybuses break down; walks to the metro", "No schedule and no routes on the Eticket website", "Can't check the card balance at the stop; crowds at the door", "Top-up only at a terminal", "Slow, difficult processes"],
        ["Feels", "Late and irritable all day", "Doesn't know the route", "Struggles to get on", "Can't pay, or struggles to", "Loses time buying and topping up"],
      ],
    },
    slidesTitle: "The original 2020 research slides",
    slides: [
      slide("quotes", "Interview quotes", "Original 2020 slide with the key interview quotes from Kharkiv riders", "Key interview quotes, 2020", 979),
      slide("problems", "Defining problems", "Original 2020 slide defining the four rider problems: cash and queues, paper and plastic, visitors, waiting", "Defining the problems, 2020", 1143),
      slide("journey", "Customer journey map", "Original 2020 customer journey map of a morning commute to work", "Customer journey map, 2020", 1108),
    ] as Slide[],
    whoTitle: "Who we designed for",
    who: [
      "Riders who use public transport and a smartphone every day, mostly students and office workers.",
      "68.8% of them rode with a plastic card: the green Eticket or the student travel card.",
      "Card and phone payments were common next to cash; the metro and buses were used most.",
    ],
    stat: { number: "68.8%", label: "of the riders we researched rode with a plastic card" } as Fact,
    priority:
      "The priority we set in 2020: easy payment and top-up, no cash and no paper tickets; see the travel balance; pay by smartphone; link a bank card; move money to another Eticket card; track transport, see schedules, find the nearest stops and build a route from A to B.",
    closing: "In 2026 I went back to these findings and audited our shipped app against them, screen by screen.",
  },

  users: {
    kicker: "Who it is for",
    headline: "Three riders, three very different mornings.",
    personas: [
      { name: "Daily commuter", context: "Same two or three routes every day.", need: "Through the turnstile fast, and not to miss the tram." },
      { name: "Student with a reduced fare", context: "Price-sensitive, rides daily.", need: "The reduced fare to just work, and to know when it expires." },
      { name: "Visitor", context: "No card, may not read Ukrainian.", need: "A ticket in two minutes and simple directions." },
    ],
  },

  goals: {
    kicker: "Goals",
    headline: "What the redesign has to do, for riders and for the city.",
    riderTitle: "For riders",
    riders: [
      "Pay in one tap, even offline, without unlocking the phone.",
      "See when the next metro, tram or bus comes, right on Home.",
      "Never get stuck at the turnstile with no balance.",
      "Ride as a visitor without an account or a plastic card.",
    ],
    cityTitle: "For the city and the operator",
    city: [
      "Fewer paper tickets and shorter lines at top-up terminals.",
      "More rides paid digitally.",
      "Higher satisfaction through predictable arrivals.",
    ],
    targetsTitle: "Launch targets, to set with the operator",
    targets: [
      { metric: "Share of rides paid by phone", target: "Target: 60% in the first year" },
      { metric: "Declined taps per 1,000 rides", target: "Target: down by half" },
      { metric: "Top-ups in the app vs terminals", target: "Target: 70% in the app" },
      { metric: "Visitor time from install to first ride", target: "Target: under 2 minutes" },
    ],
  },

  principles: {
    kicker: "Principles",
    headline: "Four rules that decided every screen.",
    items: [
      { title: "The turnstile moment is sacred", desc: "Nothing between the person and the gate." },
      { title: "Arrivals, not stops", desc: "A stop is only useful with the time of the next vehicle." },
      { title: "Money is visible", desc: "Balance, fare and trips left, one glance away." },
      { title: "Works for someone who just arrived", desc: "English, no account, no card." },
    ],
  },

  flows: {
    kicker: "Flows",
    headline: "Eight flows, mapped before a screen was drawn.",
    body: "Onboarding, paying for a ride, cards and top-up, nearby stops and live arrivals, route from A to B, the visitor, trips and account, and problems and special cases. Yellow is a step, blue a decision, green a start or an end.",
    items: [
      { title: "1. Onboarding", alt: "Onboarding flow: language, sign in, card or virtual card, reduced fare check, Wallet, location permission and home stop, then Home", src: "/case-eticket/flows/onboarding.webp", width: 1682, height: 2714 },
      { title: "2. Pay for a ride", alt: "Pay flow: hold phone to the validator, balance check with a declined branch and one-tap top-up, transfer window, success, extra passengers", src: "/case-eticket/flows/pay.webp", width: 1768, height: 2040 },
      { title: "3. Cards, top-up, auto top-up and transfer", alt: "Cards flow: swipe between cards, top up with amount chips and Apple or Google Pay, auto top-up, transfer to another card with Face ID", src: "/case-eticket/flows/cards.webp", width: 2188, height: 2198 },
      { title: "4. Nearby, live arrivals, map and timetable", alt: "Nearby flow: Home with live arrivals, list or map, stop detail, live data or scheduled times, line detail, timetable, notify me, favorites", src: "/case-eticket/flows/nearby.webp", width: 1510, height: 2872 },
      { title: "5. Route from A to B", alt: "Route flow: where to, from and to, filters, options with the total fare, route detail, balance check and top-up, live trip, service change alert, save route", src: "/case-eticket/flows/route.webp", width: 1344, height: 3120 },
      { title: "6. Visitor: ride without a card", alt: "Visitor flow: skip sign-in, choose a ticket, pay with Apple or Google Pay, ticket in Wallet, hold to the validator, expired branch", src: "/case-eticket/flows/visitor.webp", width: 1606, height: 2042 },
      { title: "7. Trips, receipts and account", alt: "Account flow from Profile: trips and monthly spending, receipts, my cards with lost-card recovery, reduced fare status, payment methods, notifications, language, delete account", src: "/case-eticket/flows/account.webp", width: 4416, height: 1006, wide: true },
      { title: "8. Problems and special cases", alt: "Special cases flow: wrong charge with automatic refund, new phone, reduced fare renewal, plastic card to phone, service change", src: "/case-eticket/flows/special.webp", width: 4256, height: 1746, wide: true },
    ] as FlowImage[],
  },

  compare: {
    kicker: "Before and after",
    headline: "Every finding, next to what replaced it.",
    pairs: [
      {
        finding: "Five steps to pay",
        fix: "Hold the phone near the reader and it is done. The result screen shows Paid or Declined, and a decline carries the top-up right there.",
        before: v1("pay", "Our 2020 Pay for Travel screen: transport type, passengers, bags and a Confirm button, marked", "① pick a transport ② passengers and bags ③ confirm, then tap"),
        after: [
          after("11-tap-success", "The 2026 tap result: Paid, fare, new balance and a free transfer window", "Paid, with the transfer window"),
          after("12-tap-declined", "The 2026 declined tap: balance too low, with a one-tap top-up with Apple Pay", "Declined: the top-up is right there"),
        ],
      },
      {
        finding: "Stops without arrivals",
        fix: "Home leads with the nearest station and a live chip for every stop nearby: the next vehicle, not just the name.",
        before: v1("stops", "Our 2020 Home screen: a map and a list of nearby stops without arrival times, marked", "① stops, but no time of the next vehicle"),
        after: [
          after("05-home", "The 2026 Home: nearest station and stops with live arrival chips", "Nearest station and live chips"),
          after("08-stop-detail", "The 2026 stop detail with all lines and their next arrivals", "Stop detail: every line, next arrivals"),
        ],
      },
      {
        finding: "Onboarding needs a plastic card",
        fix: "Welcome offers \"Just visiting? Buy a ticket\", and the visitor ticket goes straight into Wallet, with no account and no card.",
        before: v1("onboarding", "Our 2020 first screen asking for a Card ID and a city, marked", "① a card number a visitor doesn't have"),
        after: [
          after("01-welcome", "The 2026 Welcome screen with a Just visiting option to buy a ticket", "\"Just visiting? Buy a ticket\""),
          after("19-visitor-tickets", "The 2026 visitor tickets: single ride, 1 day and 3 days", "Single ride, 1 day, 3 days"),
        ],
      },
      {
        finding: "Top-up with a custom keypad",
        fix: "Amount chips and Apple Pay replace typing on a custom keypad, so a top-up is one choice and one tap.",
        before: v1("topup", "Our 2020 Top-up screen with an amount field and a custom numeric keypad, marked", "① typing an amount on a keypad"),
        after: [after("14-top-up", "The 2026 Top-up with amount chips and Apple Pay", "Amount chips and Apple Pay")],
      },
      {
        finding: "Two places to search a route",
        fix: "One \"Where to?\" on Home opens Routes, and the options show the total fare, so the search happens in one place.",
        before: v1("route", "Our 2020 Route Building screen, a second search separate from Home, with a tab named Payments, marked", "① a second search ② \"Payments\" for what Home calls Cards"),
        after: [after("16-routes-options", "The 2026 Routes options with time, transfers, walking and the total fare", "One search, options with the fare")],
      },
    ] as PhonePair[],
  },

  commute: {
    kicker: "The morning commute",
    headline: "The morning commute, clicked end to end.",
    body: "₴6 on the card. Routes to Work: metro line 2, a transfer, line 1, 24 minutes, ₴8, and a warning that the balance doesn't cover the trip. Tap at Saltivska: declined. Top up ₴100 with Apple Pay and tap again: paid, ₴98, free transfer until 09:14. The live trip follows on the metro map: \"Transfer at Istorychnyi Muzei to line 1\" with no new tap, then \"Vokzalna is next\". At the exit, Home suggests \"Tram 7 · 4 min\".",
    shots: [
      after("05-home", "Home with the low balance and the nearest station", "Home, ₴6 on the card"),
      after("16-routes-options", "Routes options to Work with the fare and a balance warning", "Routes: 24 min, ₴8, balance too low"),
      after("12-tap-declined", "Declined tap with a one-tap top-up", "Tap: declined, top up ₴100"),
      after("11-tap-success", "Paid, ₴98 left, free transfer until 09:14", "Tap again: paid, ₴98"),
      after("17-route-live", "Live trip on the metro map with the transfer prompt", "Live trip, no new tap"),
    ],
  },

  decisions: {
    kicker: "Key decisions",
    headline: "Eight decisions that shaped the app.",
    items: [
      { title: "Tap to pay through Wallet express mode", desc: "No app to open, no unlock, works offline. Premise: validators on all transport accept NFC." },
      { title: "A declined tap is also the fix", desc: "\"₴6 left, fare ₴8\" with \"Top up ₴100 with Apple Pay\" right there, then tap again." },
      { title: "Live arrivals on Home", desc: "The nearest metro station first, then \"Tram 27 · 3 min\" for each stop nearby, with \"Notify me 5 min before\"." },
      { title: "The transfer window after paying", desc: "\"Free transfer until 09:14\" removes a common worry." },
      { title: "Routes show the total fare", desc: "The balance is checked before you leave: \"Your balance doesn't cover this trip\"." },
      { title: "Visitor tickets without an account", desc: "Straight into Wallet: single ride, 1 day, 3 days." },
      { title: "Auto top-up and lost-card recovery", desc: "So the balance never becomes a problem." },
      { title: "Four clear tabs", desc: "Home, Routes, Card, Profile. One place to search a route." },
    ],
  },

  states: {
    kicker: "Hard states",
    headline: "The screens nobody asks for are the ones that build trust.",
    shots: [
      after("12-tap-declined", "Declined tap with the fare, the balance and a one-tap top-up", "Declined tap"),
      after("18-route-service-change", "Route service change alert with an alternative route", "Service change, with an alternative"),
      after("23-refund-done", "Charged twice: the duplicate is refunded instantly", "Charged twice, refunded instantly"),
      after("26-lost-card", "Lost card: the balance is moved to a virtual card", "Lost card, balance moved to a virtual card"),
      after("25-fare-renewal", "Reduced fare expiring, with a renewal prompt", "Reduced fare expiring"),
      after("20-visitor-ticket-wallet", "Visitor ticket in Wallet with the validity and rides", "Visitor ticket in Wallet"),
    ],
  },

  system: {
    kicker: "Design system",
    headline: "Quiet interface, loud transport.",
    body: "Near black and white with one blue accent. The transport code is the only other colour, and it always comes with an icon and a number.",
    bullets: [
      "Metro lines: 1 red, 2 blue, 3 green; trams, trolleybuses and buses by colour",
      "A true black dark theme with the vivid iOS system colours",
      "iOS patterns: large titles, a floating glass tab bar, sheets with detents, inset grouped lists",
      "Onest for Latin and Cyrillic; every component in Storybook, in both themes and both languages",
    ],
    shots: [
      dark("home", "Home in the dark theme with the nearest station and live arrivals", "Home, dark"),
      dark("card", "Card tab in the dark theme with a low balance and quick actions", "Card, dark"),
      dark("routes-options", "Routes options in the dark theme with the fare", "Routes, dark"),
      dark("tap-success", "Tap result in the dark theme: Paid, new balance, transfer window", "Tap result, dark"),
      dark("metro-map", "Metro map in the dark theme with the three coloured lines", "Metro map, dark"),
    ],
  },

  outcome: {
    kicker: "Outcome",
    headline: "What the redesign delivers.",
    facts: [
      { number: "5 → 1", label: "steps to pay at the turnstile, now a single tap with the phone" },
      { number: "68.8%", label: "of the riders we researched in 2020 rode with a plastic card" },
      { number: "3 lines, 30 stations", label: "of the Kharkiv metro, with the current names" },
      { number: "14", label: "scenarios, clickable end to end" },
      { number: "2 × 2", label: "two themes, light and dark, and two languages, Ukrainian and English" },
      { number: "29", label: "key screens" },
    ] as Fact[],
  },

  lessons: {
    kicker: "Key takeaways",
    headline: "Three things this project taught me.",
    blocks: [
      { title: "Design for the turnstile moment", body: "Nothing between the person and the gate. Paying went from five steps to one tap, because that is the moment with the least patience." },
      { title: "Arrivals, not stops", body: "A list of stops answers where. Riders were asking when. Home now leads with the time of the next vehicle." },
      { title: "A decline should be the fix", body: "A declined tap that only says no leaves someone stuck at the gate. Showing the fare, the balance and the top-up in the same screen turns it into one more tap." },
    ] as Lesson[],
  },

  cta: {
    title: "Try it yourself",
    sub: "Tap at the turnstile, build a route and ride as a visitor in the live prototype, or read the design system.",
    links: [
      { label: "Live demo", href: eticketLinks.demo },
      { label: "Design system", href: eticketLinks.storybook },
    ],
  },
};
