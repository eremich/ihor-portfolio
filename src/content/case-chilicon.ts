// Case study content: Chilicon Power, solar monitoring for microinverter systems.
// Sources: the 2021 mobile app screens, the 2026 brief and working prototype (chilicon-power repo),
// the "Chilicon Power mobile redesign 2026" Miro board, and public facts about the company
// (chiliconpower.com, SolarReviews, pv magazine). Outcome numbers describe the prototype; success
// metrics are targets for launch, labelled as such. No invented results.

import type { Fact, Lesson, Shot } from "@/content/case-pms";
import type { PhonePair, RoleFlow } from "@/content/case-patronim";

// Phone screens are 390 × 844 points, exported at 2× (780 × 1688).
const phone = (dir: "after" | "dark" | "v1", file: string, alt: string, caption: string, height = 1688): Shot => ({
  src: `/case-chilicon/${dir}/${file}.webp`,
  alt,
  caption,
  width: 780,
  height,
});
export const after = (file: string, alt: string, caption: string) => phone("after", file, alt, caption);
export const dark = (file: string, alt: string, caption: string) => phone("dark", file, alt, caption);
export const v1 = (file: string, alt: string, caption: string, height = 1689) => phone("v1", file, alt, caption, height);

export type Target = { metric: string; target: string; why: string };

export const chiliconLinks = {
  demo: "https://chilicon-power.vercel.app/o",
  storybook: "https://chilicon-power.vercel.app/storybook/",
};

export const chiliconBody = {
  cover: [
    after("05-home-ok", "Home: all 24 panels producing, a live energy flow drawn as a house, and today's numbers", "Homeowner: the answer first"),
    after("13-panel-detail-cause", "Panel detail: panel 7 is producing 40% less, with the likely cause and what to do", "A problem, with its cause"),
    after("16-installer-sites", "Installer's sites list: one offline, two with issues, seventeen OK", "Installer: problems first"),
  ],

  highlights: [
    { number: "1 s", label: "to know the system is fine: the status card comes first" },
    { number: "2", label: "roles in one app, one data model" },
    { number: "0", label: "codes to type in setup: scan the gateway" },
    { number: "AA", label: "contrast in light and dark, 0 axe violations" },
  ] as Fact[],

  overview: {
    kicker: "Overview",
    headline: "The data told engineers everything. It told homeowners nothing.",
    paragraphs: [
      "Chilicon Power, founded in 2009 in Southern California and part of Generac since 2021, makes microinverters: small boxes behind the solar panels. Its CP-720 serves two panels at once, so a roof reports output for every pair, not just a total. That makes it possible to spot one failing panel on a roof of twenty-four.",
      "All of that lived in a desktop dashboard built for engineers: gauges, heatmaps, per-device line charts. The warranty depends on the system staying connected, yet owners had no reason to open a tool that never answered their question.",
      "In 2021 I was the only UX/UI designer on a team of six that brought monitoring to mobile for the first time. In 2026 I audited that app, redesigned it around one question, is my system OK, and built it with AI as a working prototype for homeowners and installers.",
    ],
  },

  users: {
    kicker: "Who it is for",
    headline: "Two people look at the same roof for different reasons.",
    personas: [
      { name: "Homeowner", context: "Checks once a day or less; more often right after installation or when the bill arrives. Does not know what a microinverter is.", need: "Reassurance that it works, proof of what it saves, and a heads-up only when something needs doing." },
      { name: "Installer", context: "Maintains dozens of sites, often on the road. Commissions new systems standing on a driveway with a phone.", need: "Problems first, sorted by severity, with enough detail to fix remotely before rolling a truck." },
    ],
  },

  audit: {
    kicker: "Research",
    headline: "Our 2021 app moved the dashboard to a phone. It never answered the question.",
    intro:
      "I went back to our 2021 screens and the desktop dashboard they came from, and reviewed them against what an owner and an installer actually need to know.",
    findings: [
      { title: "No answer to “is it working?”", desc: "Home showed instant power in small labels, but not whether the system was fine, what it made today or what it saved." },
      { title: "Live or stale looked the same", desc: "The desktop's “last update” was lost, so nobody could tell if the numbers were current." },
      { title: "The flow had no direction", desc: "Grid, home and solar nodes, but no grid value and no arrow: importing or exporting was a guess." },
      { title: "Per-panel data stayed on desktop", desc: "The reason microinverters exist, seeing each panel, was never designed for mobile." },
      { title: "Setup meant copying codes", desc: "Gateway IDs and authentication codes typed by hand, plus four separate location pickers." },
      { title: "Charts that misled", desc: "Energy totals drawn as lines, a “month” view showing a week, units written as “Kw”, grey primary buttons that looked disabled." },
    ],
  },

  define: {
    kicker: "Define",
    idea: {
      headline: "Answer first, details on demand.",
      body: "Every screen starts with a sentence, then numbers, then charts. Home says “All 24 panels producing · Updated 2 min ago” before anything else. The roof map shows which pair is weak without reading a chart, and a panel's detail says the likely cause and the next step.",
      shots: [
        after("05-home-ok", "Home with the status card first and the energy flow below", "A sentence, then numbers"),
        after("12-panels-roof", "Roof map: panels coloured by output, panel 7 lighter with a warning mark", "The roof as a health view"),
        after("13-panel-detail-cause", "Panel 7 detail with a cause card: microinverter not reporting", "Cause and next step"),
      ],
    },
    e2e: {
      headline: "I mapped the fault before the screens.",
      body: "One weak panel crosses both roles. The flow shows the three likely causes, when an owner is told, and where the installer takes over, including owners with no installer linked.",
      board: {
        src: "/case-chilicon/flows/e2e.webp",
        label: "Miro · panel issue, from alert to fix",
        caption: "The scenario the prototype can be clicked through end to end: panel 7 drops, the owner reports it, the installer restarts the microinverter remotely and resolves it, the owner sees all panels OK. Scroll sideways, or open it full size.",
        alt: "Flow: a push says panel 7 produces 40% less than its neighbors; the owner opens the panel detail; likely cause is shade or dirt (tips and a reminder in 3 days), weather (whole system low, no action, resolved) or the device (microinverter not reporting). For the device, if an installer is linked the owner contacts them with a report, otherwise finds a certified installer nearby. The installer sees the alert and the technical view and restarts the device or visits. If output is back to normal it is resolved with a note and the owner sees all panels OK; otherwise it loops back to the installer.",
      },
    },
    alerts: {
      headline: "Alert only when there is something to do.",
      body: "A cloudy day is not an alert. A silent microinverter is. I wrote down what each situation looks like in the data and what each role should see, so the app never cries wolf.",
      highlight: "What the owner sees",
      columns: ["", "Night", "Cloudy day", "Shade or dirt", "Silent microinverter", "Gateway offline"],
      rows: [
        ["In the data", "No output, sun is down", "Every panel low by the same amount", "One panel low, mostly afternoons", "One device drops out", "No data at all"],
        ["2021 app", "Numbers fall to zero, no reason", "Looks like a fault", "Unnoticed for weeks", "Visible only on desktop", "Stale numbers, no timestamp"],
        ["What the owner sees", "“Night. Panels start around 6:12 am”", "“Cloudy day. Nothing to fix”", "Likely shade or dirt, 3 steps, reminder", "Not reporting, contact installer", "What to check: power, Wi-Fi, retry"],
        ["Installer", "Nothing", "Nothing", "Alert with the likely cause", "Alert, tagged if the owner reported it; remote restart", "Offline site on top; visit"],
        ["Push notification", "No", "No", "Yes, once", "Yes", "Yes, after an hour"],
      ],
    },
  },

  compare: {
    kicker: "Before and after",
    headline: "Every finding, next to what replaced it.",
    pairs: [
      {
        finding: "Home showed numbers, never an answer",
        fix: "A status card comes first, with how fresh the data is. The energy flow became a house with a value and a direction on every line: “Exporting 1.6 kW”, battery “Charging”.",
        before: v1("home", "Our 2021 home screen with the house label, the grid node and the chart marked", "① “0.5 Kw”: tiny, wrong unit, no status ② grid with no value or direction ③ no “updated” time"),
        after: [
          after("05-home-ok", "The 2026 home screen: status card, energy flow house, today's numbers", "Answer, then the flow"),
          after("07-home-issue", "The 2026 home screen with panel 7 producing 40% less", "The same card when a panel is weak"),
        ],
      },
      {
        finding: "Charts looked right and weren't",
        fix: "Energy totals are bars in kWh, power is a curve in kW, never mixed. The running period is hatched, and tapping a bar opens exact values with the weather that day.",
        before: v1("month", "Our 2021 month view with the Month tab, the axis and the line chart marked", "① “Month” selected ② the axis shows one week ③ energy totals drawn as a line"),
        after: [
          after("10-energy-month", "The 2026 month view with daily bars, produced and used", "A real month, in bars"),
          after("11-energy-bar-sheet", "The 2026 bar detail sheet with produced, used, exported and saved", "Tap a bar for exact values"),
        ],
      },
      {
        finding: "Setup meant copying codes",
        fix: "Scan the QR on the gateway; manual entry is the fallback, with the sticker drawn and the line you are typing highlighted. One address search replaces four pickers.",
        before: v1("setup", "Our 2021 new installation form with the location pickers, the gateway codes and the grey button marked", "① four location pickers ② gateway ID and code typed by hand ③ a grey primary button that looks disabled", 1887),
        after: [
          after("02-scan-qr", "The 2026 gateway scan with a camera viewfinder", "Scan the gateway"),
          after("03-manual-code", "The 2026 manual entry with the sticker and the code line highlighted", "Fallback: copy from the sticker"),
        ],
      },
      {
        finding: "Sign-up hid what mattered",
        fix: "Real labels, password rules that tick as you type, and the role as the first real choice, because it decides the whole app.",
        before: v1("signup", "Our 2021 registration form with the fields, the role checkboxes and the Register button marked", "① “Placeholder” instead of a hint ② the role as small checkboxes at the bottom ③ a grey Register button", 2338),
        after: [
          after("21-signup", "The 2026 sign-up with labels and password rules", "Rules that tick as you type"),
          after("22-who-are-you", "The 2026 role choice: homeowner or installer", "The role, first and clear"),
        ],
      },
    ] as PhonePair[],
  },

  flows: {
    kicker: "Key flows",
    headline: "Two roles and a setup, clicked through end to end.",
    roles: [
      {
        role: "Homeowner",
        title: "Check, understand, act",
        desc: "Home answers in a second; Energy explains any day, week, month or year; Panels shows the roof. Savings use the owner's own rate and export credit, and ask for it only where the number would be.",
        flow: "/case-chilicon/flows/owner.webp",
        flowAlt: "Homeowner flow: open Home; switch system if there is more than one; status card; if not OK go to the panel issue flow, otherwise today's numbers and the live energy flow; from there Energy with day, week, month and year bars, tap a bar for exact values, share a monthly report; or Panels with the roof map and a panel's detail versus its neighbors.",
        shots: [
          after("09-energy-day", "Energy by hour with produced and used bars", "Energy, by hour"),
          after("14-contact-installer", "Report to the installer with panel, device ID and chart attached", "Report in one tap"),
          after("20-home-resolved", "Home after the fix: all 24 panels producing", "Fixed, and told so"),
        ],
      },
      {
        role: "Installer",
        title: "Fleet first, fix remotely",
        desc: "Sites sorted by status, alerts across the fleet, and a technical view per site. Restart a device or update firmware from the phone; schedule a visit when the gateway is offline; resolve with a note the owner will read.",
        flow: "/case-chilicon/flows/installer.webp",
        flowAlt: "Installer flow: open Sites sorted by status; search and filter; open a site with owner and technical views; microinverters list; device chart versus the roof average; if a remote fix is possible restart or update firmware, otherwise schedule a visit; resolve with a note. Separately: add a site, scan the gateway, map the roof and invite the owner.",
        shots: [
          after("17-installer-alerts", "Alerts across the fleet with an owner report on top", "Owner reports come tagged"),
          after("18-installer-technical", "Technical view: firmware update and microinverters, the weak one first", "Every microinverter"),
          after("19-installer-restart", "Restarting a microinverter remotely, with progress", "Restart, no truck roll"),
        ],
      },
      {
        role: "Setup",
        title: "From the box to the first numbers",
        desc: "Sign up, choose a role, scan the gateway, confirm the address and size, connect. If the gateway cannot be reached, the app lists what to check instead of failing. Invited owners skip all of it.",
        flow: "/case-chilicon/flows/onboarding.webp",
        flowAlt: "Setup flow: open the app; log in or sign up; choose homeowner or installer; verify email; new or invited system; scan the gateway QR, or enter the code manually if the camera is denied; address; size and battery prefilled from the gateway; if the gateway is online wait for the first data, otherwise check and retry; Home. Invited owners accept the invite and go straight to Home.",
        shots: [
          after("01-welcome", "Welcome: see every panel, every day", "Welcome"),
          after("04-connecting-offline", "Connecting failed with three things to check and Try again", "Offline: what to check"),
          after("30-invite", "Invite from the installer with the system details", "Or just accept the invite"),
        ],
      },
    ] as RoleFlow[],
  },

  states: {
    kicker: "Hard states",
    headline: "Most of the time, the right answer is “nothing to do”.",
    shots: [
      after("08-home-night", "Home at night: panels start around 6:12 am, running on battery", "Night, on battery"),
      after("23-home-cloudy", "Home on a cloudy day: low output, nothing to fix", "Cloudy: not an alert"),
      after("24-home-offline", "Home with the gateway offline since 9:14 am", "Offline: since when, what to check"),
      after("25-home-first-data", "Home right after setup, waiting for the first data", "First data on its way"),
    ],
  },

  system: {
    kicker: "Design system",
    headline: "A system built from the logo, in light and dark.",
    body: "The sun orange of the logo is the brand and solar energy; its leaf green is “all good”. Battery is blue and the grid violet, and those four energy colours never swap meaning. SF Pro, iOS large titles that collapse, a floating tab bar. Tokens live in one file and drive the app and Storybook, where every component and every real screen is documented.",
    bullets: [
      "Units are sacred: kW for power, kWh for energy, never mixed",
      "Status is always icon and words, never colour alone",
      "The dark theme is near-black and neutral; colour comes only from energy and status",
      "Every number is tabular; touch targets are 44 points",
    ],
    brand: {
      mark: "/case-chilicon/brand/logo-mark.svg",
      wordmark: "/case-chilicon/brand/logo-wordmark.svg",
      caption: "The Chilicon Power logo: a sun over a leaf. Its two colours became the two anchors of the palette.",
      palette: [
        { name: "Sun", hex: "#FBAB16", role: "Brand and solar energy: primary buttons, production bars, the flow from the roof", fromLogo: true },
        { name: "Leaf", hex: "#00AA79", role: "Status OK: “All 24 panels producing”", fromLogo: true },
        { name: "Battery", hex: "#1E7FC2", role: "Battery charge and discharge. Blue, so it never reads as the green OK", fromLogo: false },
        { name: "Grid", hex: "#6B6FD6", role: "Grid import and export", fromLogo: false },
      ],
    },
    shots: [
      dark("05-home-ok", "Home in the dark theme", "Home, dark"),
      dark("12-panels-roof", "Roof map in the dark theme", "Panels, dark"),
      dark("16-installer-sites", "Installer sites in the dark theme", "Sites, dark"),
      dark("19-installer-restart", "Device restart in the dark theme", "Restart, dark"),
    ],
  },

  outcome: {
    kicker: "Outcome",
    headline: "What exists today.",
    facts: [
      { number: "2", label: "roles connected in one clickable fault-to-fix scenario" },
      { number: "29", label: "screens, from sign-up to a remote restart, in light and dark" },
      { number: "45", label: "components documented in Storybook, plus every real screen" },
      { number: "10", label: "scenarios reachable by link: night, offline, no battery, no tariff and more" },
      { number: "102", label: "automated checks of every scenario on every screen, 0 problems" },
      { number: "0", label: "WCAG 2.1 AA violations (axe) across 28 screen checks" },
    ] as Fact[],
    measure: {
      title: "How we'll know it works",
      intro: "Targets to set with the team for launch, not results.",
      targets: [
        { metric: "Owners who finish setup without contacting support", target: "80%", why: "QR scan and a clear offline path should remove most setup calls" },
        { metric: "Time from a panel fault to owner or installer action", target: "Under 24 hours", why: "Today a weak panel can go unnoticed for weeks" },
        { metric: "Support requests per 100 systems", target: "−30%", why: "Setup and “is this normal?” are the usual questions" },
        { metric: "Issues resolved remotely by installers", target: "1 in 2", why: "Restart and firmware from the phone save a truck roll" },
        { metric: "Owners who check at least weekly", target: "60%", why: "A healthy app is checked, not stared at, and monitoring keeps the warranty valid" },
      ] as Target[],
    },
  },

  lessons: {
    kicker: "Key takeaways",
    headline: "Three things this project taught me.",
    blocks: [
      { title: "An answer beats a gauge", body: "The data was always there. Putting one sentence above it, “All 24 panels producing, updated 2 min ago”, did more than any chart." },
      { title: "Silence is a feature", body: "Writing down when not to alert, night and clouds, mattered as much as the alerts themselves. Trust comes from not crying wolf." },
      { title: "One model, two lenses", body: "Owners and installers see the same roof. Owners get meaning, installers get mechanics, and a report from one lands tagged in the other's feed." },
    ] as Lesson[],
  },

  cta: {
    title: "Try it yourself",
    sub: "Switch between homeowner and installer in the live prototype, try any scenario, or read the design system.",
    links: [
      { label: "Live demo", href: chiliconLinks.demo },
      { label: "Design system", href: chiliconLinks.storybook },
    ],
  },
};
