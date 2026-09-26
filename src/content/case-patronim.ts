// Case study content: Patronim, a mobile app for a Tel Aviv short-term rental cleaning company.
// Sources: the 2019 case study PDF (team, hours, result), the redesign brief and prototype
// (patronim-prototype repo), and the "Patronim — Redesign 2026" Miro board. No invented metrics.

import type { Fact, Lesson, Shot } from "@/content/case-pms";

// Phone screens are 390 × 844 points, exported at 2× (780 × 1688).
const phone = (dir: "after" | "dark" | "v1", file: string, alt: string, caption: string, height = 1688): Shot => ({
  src: `/case-patronim/${dir}/${file}.webp`,
  alt,
  caption,
  width: 780,
  height,
});
const after = (file: string, alt: string, caption: string) => phone("after", file, alt, caption);
const dark = (file: string, alt: string, caption: string) => phone("dark", file, alt, caption);
const v1 = (file: string, alt: string, caption: string) => phone("v1", file, alt, caption, 1680);

export type PhonePair = { finding: string; fix: string; before: Shot; after: Shot[] };
export type RoleFlow = { role: string; title: string; desc: string; flow: string; flowAlt: string; shots: Shot[] };

export const patronimLinks = {
  demo: "https://patronim-prototype.vercel.app/m",
  storybook: "https://patronim-prototype.vercel.app/storybook",
};

export const patronimBody = {
  cover: [
    after("01-manager-today", "Property manager's Today screen: upcoming turnovers sorted by guest check-in, each with a turnover window bar", "Property manager: today's turnovers"),
    after("07-patron-jobs", "Cleaner's Jobs screen: each job leads with time left before the guest arrives", "Cleaner: jobs by deadline"),
    after("11-inspector-queue", "Inspector's queue: apartments ready to inspect, ordered by guest check-in", "Inspector: queue by check-in"),
  ],

  highlights: [
    { number: "6", label: "roles in the 2019 app, replacing spreadsheets" },
    { number: "69%", label: "of clients said the app made working together easier" },
    { number: "3", label: "roles in one clickable 2026 prototype" },
    { number: "1", label: "deadline drives every screen: the guest's check-in" },
  ] as Fact[],

  overview: {
    kicker: "Overview",
    headline: "In 2019 we replaced Excel. In 2026 I made the app keep its promise.",
    paragraphs: [
      "Patronim cleans short-term rental apartments in Tel Aviv for Airbnb hosts and property managers. Between one guest's checkout and the next guest's check-in there are a few hours. If the flat is not ready, the host loses a review and Patronim loses a client.",
      "In 2019 I was the only UI/UX designer on a team of eight that replaced the company's spreadsheets with a mobile and web app for six roles, with payments, dynamic pricing and refunds. It was used every day.",
      "In 2026 I audited our own screens, redesigned the app around that turnover window and built it as a working prototype with AI, for the three roles who do the work.",
    ],
  },

  users: {
    kicker: "Who it is for",
    headline: "Three people, three very different contexts.",
    personas: [
      { name: "Property manager", context: "On a phone between guests. Orders, pays, tracks.", need: "Know the flat will be ready before the guest arrives, and what it costs." },
      { name: "Cleaner", context: "Mid-job in a bright apartment, wet hands, one thumb.", need: "See how much time is left and what counts as done." },
      { name: "Quality inspector", context: "Walking between buildings, checking several flats a day.", need: "Judge the work from evidence and send back one thing, not the whole flat." },
    ],
  },

  audit: {
    kicker: "Research",
    headline: "Our 2019 app tracked orders. It never promised the flat would be ready.",
    intro:
      "I went back to our 2019 screens and the original case study, and reviewed them against the real job: a cleaning that has to fit between two guests.",
    findings: [
      { title: "The deadline was optional", desc: "\"Set check-in time: Unknown\". The one time the whole service depends on could be skipped." },
      { title: "The price appeared last", desc: "A \"Total\" row at the bottom, with dynamic pricing (holidays, demand, late booking) never explained." },
      { title: "Services spoke our jargon", desc: "\"Mid Holiday NoSheets\", \"Pre-Checkin 2h Refresh\": no description, duration or scope." },
      { title: "The cleaner couldn't see the clock", desc: "The job card led with the zip code. Checkout and check-in were two plain lines." },
      { title: "Inspection had no evidence", desc: "A list of addresses and a flat checklist. No photos, no way to send one item back." },
      { title: "One blue for everything", desc: "No hierarchy or states, grey text on blue, five unlabelled tab icons, no empty or error states." },
    ],
  },

  define: {
    kicker: "Define",
    idea: {
      headline: "One element carries the whole product: the turnover window.",
      body: "A bar from checkout to the next check-in, with the cleaning block inside and a \"now\" marker. The same bar appears for the manager, the cleaner and the inspector, and its colour and label say whether the job is on track, at risk or late.",
      shots: [
        after("06-manager-tracking", "Job tracking with the turnover window bar, the now marker and the projected finish before check-in", "Tracking: on time, with time to spare"),
      ],
    },
    e2e: {
      headline: "I mapped the hand-offs before drawing a screen.",
      body: "One job crosses three people. The flow shows where work passes from one role to the next, and where each role sees what the others did.",
      board: {
        src: "/case-patronim/flows/e2e.webp",
        label: "Miro · end-to-end flow",
        caption: "The end-to-end scenario the prototype can be clicked through: booked, cleaned with photos, one item sent back, fixed, ready, rated. Scroll sideways, or open it full size.",
        alt: "Swim-lane flow across property manager, cleaner and quality inspector: the manager books a turnover clean and tracks it; the cleaner cleans, adds photos, reports a missing towel and submits; the inspector marks mirror streaks as needs redo; the cleaner fixes and resubmits; the inspector marks as ready; the manager sees ready and rates the job.",
      },
    },
    blueprint: {
      headline: "The service blueprint keeps all six roles in view.",
      body: "The prototype covers three roles. The dispatcher, administrator and client still shape each step, so the blueprint shows them, and the last two rows turn 2019's pain points into the redesign's answers.",
      columns: ["", "Book", "Assign and prepare", "Clean", "Inspect", "Handover"],
      rows: [
        ["Turnover window", "Guest checks out at 11:00", "Window opens", "Cleaning runs inside the window", "Inspection before check-in", "Next guest checks in at 15:00"],
        ["Property manager", "Books, sets guest check-in, pays", "Gets next steps", "Follows rooms and photos", "Sees rework if needed", "Sees Ready, rates the job"],
        ["Cleaner", "", "Gets the job, sorted by deadline", "Room checklist with photos", "Fixes items sent back", "Earnings updated"],
        ["Dispatcher", "", "Delivers linen and amenities", "Delivers reported missing items", "", ""],
        ["Quality inspector", "", "", "Sees cleaning progress", "Pass or needs redo, per item", "Marks as ready"],
        ["Administrator", "Sets pricing rules", "Plans work, manages users", "Monitors performance", "Handles disputes", "Reviews feedback"],
        ["Pain point in 2019", "Check-in optional, price hidden, jargon", "No clear next steps", "Zip code, not the deadline", "No photos, no item-level redo", "Ready status not explicit"],
        ["Redesign answer", "Required check-in, live price with reasons, plain names", "Four-step what happens next", "Window bar and time left on every job", "Photo proof and item-level redo", "Explicit Ready for guest, then rating"],
      ],
    },
  },

  compare: {
    kicker: "Before and after",
    headline: "Every finding, next to what replaced it.",
    pairs: [
      {
        finding: "The guest's check-in was optional",
        fix: "Check-in is required, and the window previews live while you book. If the service won't fit, the app says so and offers the earliest safe option.",
        before: v1("checkin", "Our 2019 booking form with the check-in time set to Unknown, marked", "① check-in time \"Unknown\""),
        after: [
          after("02-manager-book", "The 2026 booking form with required check-in and a live turnover window", "Required check-in, live window"),
          after("03-manager-book-at-risk", "The 2026 booking form warning that the window is too short", "Not enough time: the fix is one tap"),
        ],
      },
      {
        finding: "The price appeared only at the end",
        fix: "A live total sits in the footer from the first choice. Tapping it explains every adjustment in plain words, and points to a cheaper time when there is one.",
        before: v1("price", "Our 2019 booking form with the Total row at the very bottom, marked", "① the total, last and unexplained"),
        after: [after("04-manager-price-breakdown", "The 2026 price breakdown with holiday and late-booking adjustments explained and a cheaper option", "Why the price is higher today, and how to save")],
      },
      {
        finding: "Service names were internal jargon",
        fix: "Plain names, what's included, how long it takes and the price, so a new host can choose without asking.",
        before: v1("services", "Our 2019 service picker with internal names such as Mid Holiday No Sheets, marked", "① names only the team understood"),
        after: [after("16-manager-services", "The 2026 service cards with plain names, scope, duration and price", "Plain names, scope, duration, price")],
      },
      {
        finding: "The cleaner couldn't see the deadline",
        fix: "Jobs are ordered by deadline and lead with the time left before the guest arrives. The zip code moved to the second line.",
        before: v1("patron-jobs", "Our 2019 cleaner job list leading with the zip code, marked", "① zip code first ② the deadline as plain text"),
        after: [after("07-patron-jobs", "The 2026 cleaner job list leading with time left before the guest arrives", "\"Guest arrives in 2 h 35 min\"")],
      },
      {
        finding: "Inspection had no evidence",
        fix: "The inspector sees the cleaner's photos room by room, passes or sends back single items with a note and a photo.",
        before: v1("quality", "Our 2019 inspection screen, a plain list of dates and addresses, marked", "① addresses, nothing to judge by"),
        after: [
          after("11-inspector-queue", "The 2026 inspection queue with turnover window bars", "Queue by guest check-in"),
          after("12-inspector-needs-redo", "The 2026 needs-redo sheet with a note and photo for one item", "Send back one item, with a note"),
        ],
      },
    ] as PhonePair[],
  },

  flows: {
    kicker: "Key flows",
    headline: "Three roles, one job, clicked through end to end.",
    roles: [
      {
        role: "Property manager",
        title: "Book, pay, track, rate",
        desc: "From an empty Today to a rated job. Payment errors say what happened and how to fix it; rework shows as a status, not a surprise.",
        flow: "/case-patronim/flows/manager.webp",
        flowAlt: "Property manager flow: open app, empty state or today, book a cleaning, pick property and service, set required check-in, window check with an at-risk branch, extras, live total and price breakdown, review and pay with a declined-card branch, confirmation, tracking, rework or ready, rate.",
        shots: [
          after("05-manager-confirmed", "Booking confirmed with a four-step timeline of what happens next", "What happens next, in four steps"),
          after("06-manager-tracking", "Job tracking with window bar, cleaner and room progress", "Tracking, room by room"),
          after("13-manager-ready-rate", "Ready for guest with a rating form", "Ready, then rate"),
        ],
      },
      {
        role: "Cleaner",
        title: "Clean with proof",
        desc: "Rooms are sections with a short checklist and a required after photo. Missing items are reported from the job, and anything sent back returns to the top of the list.",
        flow: "/case-patronim/flows/patron.webp",
        flowAlt: "Cleaner flow: open jobs, empty state or jobs sorted by deadline, job detail, start cleaning, room checklist with after photos, report missing item, submit for inspection when all rooms have photos, rework card with note and photo, fix and resubmit, job done.",
        shots: [
          after("08-patron-checklist", "Room checklist with an after photo required to finish the room", "3 of 4 rooms done"),
          after("09-patron-missing-item", "Report missing item sheet", "Report a missing towel"),
          after("10-patron-rework", "Job list with a rework card on top showing the inspector's note", "One item to redo, on top"),
        ],
      },
      {
        role: "Quality inspector",
        title: "Inspect and decide",
        desc: "Room by room, item by item. One failed item sends the job back with a note; all passed marks it ready and tells the manager.",
        flow: "/case-patronim/flows/inspector.webp",
        flowAlt: "Inspector flow: open queue sorted by guest check-in, open inspection, per room check photos and checklist, pass or needs redo with note and photo, send back to cleaner or mark as ready, manager sees ready.",
        shots: [
          after("11-inspector-queue", "Inspection queue with window bars", "Queue by check-in"),
          after("12-inspector-needs-redo", "Needs redo sheet with a note and photo", "Needs redo, with evidence"),
        ],
      },
    ] as RoleFlow[],
  },

  states: {
    kicker: "Hard states",
    headline: "The screens nobody asks for are the ones that build trust.",
    shots: [
      after("14-manager-empty", "Empty Today screen that guides the manager to book a cleaning", "Empty: a next step, not a blank"),
      after("15-payment-error", "Payment declined with a clear fix: another card or invoice", "Declined: what happened, how to fix"),
    ],
  },

  system: {
    kicker: "Design system",
    headline: "Built on a system, in light and dark.",
    body: "Tokens for colour, type, radius and spacing live in one file and drive both the app and Storybook, where every component is documented. The dark theme uses neutral graphite with blue only for actions: my first dark palette drifted into purple, and I rebuilt it.",
    bullets: [
      "Status is always colour, icon and label, never colour alone",
      "Separate text colours for success and risk, so labels pass AA contrast",
      "Touch targets of at least 44 points for wet hands and one thumb",
      "Tabular numbers for every time and price",
    ],
    shots: [
      dark("01-manager-today", "Today screen in the dark theme", "Today, dark"),
      dark("06-manager-tracking", "Tracking in the dark theme", "Tracking, dark"),
      dark("07-patron-jobs", "Cleaner jobs in the dark theme", "Jobs, dark"),
      dark("12-inspector-needs-redo", "Needs redo sheet in the dark theme", "Needs redo, dark"),
    ],
  },

  outcome: {
    kicker: "Outcome",
    headline: "What 2019 delivered, and what 2026 adds.",
    facts: [
      { number: "8", label: "people in the 2019 team, with me as the only UI/UX designer" },
      { number: "1,460", label: "hours of development for the 2019 app" },
      { number: "69%", label: "of clients said the app made working together easier" },
      { number: "3", label: "roles connected in one clickable 2026 scenario" },
      { number: "15", label: "key screens, in light and dark" },
      { number: "6", label: "hard states: empty, loading, error, at risk, offline, rework" },
    ] as Fact[],
    // The client's review of the 2019 project; the agency's name is replaced in brackets.
    review: {
      quote:
        "We are happy with the app we got. [The team] are very proactive and provide recommendations before we even ask them. Some other companies we worked with waited for our instructions instead of making suggestions. [They] went above and beyond to meet all our needs.",
      name: "Ilan Cohen",
      role: "CEO, Patronim",
      note: "On the 2019 app",
    },
    notDone: {
      title: "What is not done",
      items: [
        "The administrator panel, dispatcher and client appear in the service blueprint, not in the prototype",
        "Mock data: no real payments, maps or chat",
        "The redesign has not been tested with the company's staff yet",
      ],
    },
  },

  lessons: {
    kicker: "Key takeaways",
    headline: "Three things this project taught me.",
    blocks: [
      { title: "Design around the deadline", body: "Guest check-in was an optional field. Making it required and visible to every role turned an order tracker into a promise." },
      { title: "Explain the price before it's a question", body: "Dynamic pricing feels unfair when it's hidden. Explaining each adjustment, and offering the cheaper time, turns a surprise into a choice." },
      { title: "Proof beats a checkbox", body: "Photos per room and item-level redo let the inspector send back one mirror, not a whole apartment." },
    ] as Lesson[],
  },

  cta: {
    title: "Try it yourself",
    sub: "Switch between the manager, cleaner and inspector in the live prototype, or read the design system.",
    links: [
      { label: "Live demo", href: patronimLinks.demo },
      { label: "Design system", href: patronimLinks.storybook },
    ],
  },
};
