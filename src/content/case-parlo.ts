// Case study content: Parlo, doctor booking in your language for Germany.
// Sources: the 2019 doctor-booking marketplace Ihor led design for, the 2026 brief and working prototype
// (D:\doctorlar), the Miro board "Doctor booking platform, Germany: user flows". Facts describe the
// prototype; success metrics are launch targets, labelled as such. No invented research results.

import type { Fact, Lesson, Shot } from "@/content/case-pms";
import type { Target } from "@/content/case-chilicon";

// Phone screens are 390 × 844 points, exported at 2× (780 × 1688). Web screens are 1440 × 900, shown at 2400 × 1500.
const phone = (dir: "patient" | "doctor" | "dark", file: string, alt: string, caption: string): Shot => ({
  src: `/case-parlo/${dir}/${file}.webp`,
  alt,
  caption,
  width: 780,
  height: 1688,
});
export const patient = (file: string, alt: string, caption: string) => phone("patient", file, alt, caption);
export const doctor = (file: string, alt: string, caption: string) => phone("doctor", file, alt, caption);
export const dark = (file: string, alt: string, caption: string) => phone("dark", file, alt, caption);
export const web = (dir: "staff" | "storybook", file: string, alt: string, caption: string): Shot => ({
  src: `/case-parlo/${dir}/${file}.webp`,
  alt,
  caption,
  width: 2400,
  height: 1500,
});

export type Decision = { title: string; why: string; shot: Shot };
export type ParloFlow = { role: string; title: string; desc: string; flow: string; shots: Shot[]; web?: boolean };
export type Pain = { role: string; items: string[] };

/** Live links; null hides the button until the prototype is deployed. */
export const parloLinks: { demo: string | null; storybook: string | null } = {
  demo: "https://parlo-health.vercel.app",
  storybook: "https://parlo-health.vercel.app/storybook/",
};

export const parloBody = {
  cover: [
    patient("01-search", "Parlo home: Good morning, Anna, Find a doctor, search, popular specialties", "Search, in your language"),
    patient("02-results", "GPs near Kreuzberg: each card shows the doctor, the languages Anna speaks and the earliest bookable times", "Earliest real slot first"),
    patient("12-waitlist-offer", "A push and a card offering an earlier slot: Tomorrow 09:00, 29:59 left to take it", "A freed slot, offered"),
  ],

  highlights: [
    { number: "3", label: "roles on one schedule: patient, doctor, practice" },
    { number: "10", label: "spoken languages to search by, never flags" },
    { number: "1 tap", label: "to take a cancelled slot from the waitlist" },
    { number: "0", label: "phone calls to refill a cancelled appointment" },
  ] as Fact[],

  overview: {
    kicker: "Overview",
    headline: "Finding a free slot is solved. Finding a doctor who understands you isn't.",
    paragraphs: [
      "Booking a doctor online is normal in Germany: insurance filters, reminders and waitlists are table stakes. For the many people who moved to Berlin, the hard part is different. A visit only helps if the doctor can explain things in a language you understand, and that is the one thing the usual booking flow treats as a footnote.",
      "In 2019 I was the lead designer of a doctor-booking marketplace that put patients, doctors and clinics on one platform. We interviewed patients and clinic staff and tested the booking flow with them. What held up became the core of this project: bookable times right in the search results, separate ratings for the doctor and the practice, one calendar for the whole practice.",
      "In 2026 I took those ideas to Germany and rebuilt everything: brand, flows, interface and design system. With AI as my build partner, it became a working prototype where three roles share one schedule, and every change is true for all of them at once.",
    ],
  },

  users: {
    headline: "Who it is for",
    personas: [
      { name: "Anna, 32", context: "Moved to Berlin two years ago. Public insurance. English and Russian, basic German. Books for herself and her daughter Mia.", need: "A GP who speaks English, near Kreuzberg, this week." },
      { name: "Omar, 41", context: "Engineer, public insurance, English and Arabic. Booked a specialist three weeks out.", need: "Any earlier slot, without calling the practice every morning." },
      { name: "Sabine, practice manager", context: "Runs reception for three doctors. Lives in the calendar and on the phone.", need: "Fewer calls, no empty chairs after cancellations, a day that tells her what to do." },
      { name: "Dr. Emre Aydın, GP", context: "Speaks German, Turkish and English. Sees 15 to 20 patients a day.", need: "Who is next, why, and in which language, before the door opens." },
    ],
  },

  research: {
    kicker: "Research",
    headline: "Booking was solved. Language and lost slots weren't.",
    intro:
      "I started from what our 2019 research had shown and checked it against the German setting: two insurance systems, referrals, strict health-data rules and a large international population. The gaps were not in the booking form. They were before it and after it.",
    findings: [
      { title: "Language decides whether a visit helps", desc: "Patients pick a doctor they can talk to, but languages sit deep in a profile, if anywhere." },
      { title: "Insurance and referrals confuse newcomers", desc: "Public or private, which specialist needs a referral: questions people ask at the wrong moment." },
      { title: "The earliest slot hides behind profiles", desc: "Lists rank by rating or distance; the time you can actually go takes three taps and a call." },
      { title: "Cancelled slots stay empty", desc: "Someone cancels at 8 pm, someone else waits three weeks for the same doctor. Nobody connects the two." },
      { title: "Reception lives on the phone", desc: "Bookings, moves and cancellations arrive by phone, and the calendar shows status, not what to do." },
      { title: "Doctors meet patients cold", desc: "The first time a doctor learns the reason for a visit, or that the patient prefers English, is in the room." },
    ],
    pains: [
      { role: "Patients", items: ["Hard to find a doctor who speaks my language and takes my insurance", "The earliest slot is buried", "A freed slot somewhere is invisible to me"] },
      { role: "Practices", items: ["Phones ring all day", "Cancellations leave empty chairs", "No-shows and late patients break the day"] },
      { role: "Doctors", items: ["Little context about the next patient", "Schedule changes ripple through the day"] },
    ] as Pain[],
  },

  define: {
    kicker: "Define",
    goalsTitle: "Goals",
    goals: [
      { role: "Patients", items: ["Find a doctor who speaks my language and takes my insurance in under a minute", "Get the earliest real slot, and an earlier one if it frees up"] },
      { role: "Practices", items: ["Fewer calls for booking and moving appointments", "Refill cancelled slots", "Fewer no-shows"] },
      { role: "Doctors", items: ["Know who is next and why, at a glance"] },
    ] as Pain[],
    principlesTitle: "Principles",
    principles: [
      { title: "Earliest real slot first", body: "Time beats ratings in a results list. The card books in one tap." },
      { title: "Language is visible everywhere", body: "As words and codes, never flags: flags are countries, not languages." },
      { title: "Tell staff what to do now", body: "The practice day starts with “Needs attention”, not a grid of links." },
      { title: "One schedule, three views", body: "A change is instantly true for the patient, the doctor and reception." },
      { title: "Consent is explicit and reversible", body: "Patients see which practices have their data and can withdraw it." },
    ],
    e2e: {
      headline: "I mapped one cancellation across all three roles first.",
      body: "The scenario that proves the product: Anna cancels, Omar on the waitlist gets the slot, reception never picks up the phone, the doctor sees Omar's brief, and the practice counts one more slot saved. Every screen in the prototype serves a step in it.",
      board: {
        src: "/case-parlo/flows/e2e.webp",
        label: "Miro · hero scenario across roles",
        caption: "A cancellation travels from one patient to another, to reception, to the doctor and back into the practice's numbers. Scroll sideways, or open it full size.",
        alt: "Flow: patient A cancels Thursday 9:00; the platform frees the slot and updates the calendar for everyone; if anyone is on the waitlist the slot is offered to the first match on doctor, insurance and language; patient B gets a push with 30 minutes to take it; if not accepted it goes to the next person, otherwise patient B is booked in one tap and the old slot is released. Reception sees Filled from waitlist with no phone call; the doctor sees the new patient in My day with a brief; after the visit patient B reviews “Spoke my language”; insights count one more empty slot filled. If nobody is waiting, the slot goes back to public search.",
      },
    },
  },

  decisions: {
    kicker: "Key decisions",
    headline: "Six decisions that carry the product.",
    items: [
      { title: "The card leads with the earliest slot", why: "Three bookable times sit on every result. The first one is coral: the one colour that means “soonest”.", shot: patient("02-results", "Results with three bookable times per doctor, the earliest in coral", "Times on the card") },
      { title: "Language is a saved filter, shown as words", why: "Anna sets English and Russian once. Every card says which of them the doctor speaks.", shot: patient("03-filters", "Filters: insurance, doctor speaks, earliest appointment, distance, visit", "Filters, saved as defaults") },
      { title: "Book for anyone in the family", why: "A pull-down instead of tabs: it works for one child or five relatives, each with their own insurance.", shot: patient("07-booking-for-family", "Booking step with a menu: Anna Petrova (you), Mia Petrova (child, 6 years)", "For you, or for Mia") },
      { title: "Consent before the first visit, reversible", why: "A new practice sees nothing until the patient agrees, and the list of what is shared is right there.", shot: patient("08b-booking-consent", "Share your details with the practice: what is shared, a checkbox, GDPR note", "What the practice sees") },
      { title: "A freed slot is offered, not posted", why: "Matched by doctor, insurance and language, with 30 minutes to take it. No refreshing, no calling.", shot: patient("12-waitlist-offer", "Earlier slot offer with a countdown and Take Tomorrow 09:00", "30 minutes to take it") },
      { title: "The day-before check lives in the card", why: "“Are you coming tomorrow?” sits inside the appointment, with one clear yes and a quiet way out.", shot: patient("10-appointments", "Appointments: tomorrow 09:00 with Are you coming tomorrow, I'm coming, Cancel", "One yes, one quiet no") },
    ] as Decision[],
  },

  flows: {
    kicker: "Key flows",
    headline: "Four journeys, clicked through end to end.",
    roles: [
      {
        role: "Patient",
        title: "Find and book",
        desc: "Search by specialty, symptom or name; results lead with the earliest real slot; booking is three or four short steps, with an account created inside the flow and consent only when a practice is new.",
        flow: "/case-parlo/flows/patient-book.webp",
        shots: [
          patient("05-doctor-profile", "Doctor profile with photo, rating, a day picker and times, languages", "Pick any day and time"),
          patient("06-booking-who", "Booking step 1: who is it for and what kind of visit", "Who and what kind"),
          patient("09-booked", "Booked: tomorrow 10:00, add to calendar, directions", "Booked, with what's next"),
        ],
      },
      {
        role: "Patient",
        title: "Manage, wait, review",
        desc: "Reschedule or cancel without calling; join the waitlist for an earlier slot; confirm the day before, say you are running late, check in; afterwards rate the doctor and the practice separately, with reasons as chips.",
        flow: "/case-parlo/flows/patient-manage.webp",
        shots: [
          patient("11-appointment", "Appointment detail: change time, get an earlier slot, where, reason, cancel", "Everything about one visit"),
          patient("13-review", "Rate your visit: doctor and practice stars, reason chips like Spoke my language", "Two ratings, real reasons"),
          patient("14-family", "Family: Anna and Mia with insurance and languages, Book for Mia", "A household, one account"),
        ],
      },
      {
        role: "Doctor",
        title: "My day",
        desc: "The next patient on top with time, languages and reason; a brief before the visit; start, complete, book a follow-up. If the day slips, one tap tells reception and the patients who are waiting.",
        flow: "/case-parlo/flows/doctor.webp",
        shots: [
          doctor("01-my-day", "My day: next patient Ines Vogel with languages and reason, then the timeline", "Who is next, and why"),
          doctor("02-patient-brief", "Patient brief: Omar Khalil, first visit, filled from waitlist, you both speak English", "The brief before the door opens"),
          doctor("04-schedule-conflict", "Schedule: blocked time with 5 patients affected, reception is moving them", "Blocking time, safely"),
        ],
      },
      {
        role: "Practice",
        title: "Run the day",
        desc: "Today starts with what needs attention: requests to confirm, doctors who blocked time, late patients. The calendar shows every doctor side by side; phone bookings take three fields; moving patients notifies them in the same step.",
        flow: "/case-parlo/flows/staff.webp",
        web: true,
        shots: [
          web("staff", "01-today", "Practice Today: Needs attention with four cards, counters, and the day for three doctors", "Today: what needs doing now"),
          web("staff", "02-calendar-filled", "Calendar with Omar Khalil's 09:00 marked Filled from waitlist", "Filled from waitlist, no call"),
          web("staff", "03-phone-booking", "Phone booking panel: existing or new patient, doctor, date, visit type", "A phone booking in three fields"),
          web("staff", "04-conflict", "Resolve conflict: three patients with new times, Move 3 and notify", "Move patients and tell them, at once"),
        ],
      },
    ] as ParloFlow[],
    more: {
      title: "Also mapped and built",
      items: [
        { title: "Practice onboarding", body: "Sign up, verification, services, invite doctors, a checklist until the practice goes live in search.", flow: "/case-parlo/flows/onboarding.webp" },
        { title: "Patient account", body: "Insurance, family, languages as a default filter, notifications, privacy with download and delete.", flow: "/case-parlo/flows/account.webp" },
      ],
    },
  },

  practice: {
    kicker: "The practice",
    headline: "The same schedule, seen from reception.",
    shots: [
      web("staff", "08-insights", "Insights: 7 slots filled from waitlist this week, no-show rate, occupancy, new patients by language, reviews", "Insights: refills, no-shows, languages"),
      web("staff", "06-doctors-services", "Doctors and services: languages, visit types, insurance rules, accepts new patients", "Doctors, services, languages"),
      web("staff", "07-team", "Team and roles: what a practice manager, reception and a doctor can do", "Roles and permissions"),
      web("staff", "09-reviews", "Reviews with reason chips and public replies", "Reviews with reasons"),
    ],
  },

  states: {
    kicker: "Hard states",
    headline: "The screens nobody plans, planned.",
    shots: [
      patient("17-no-match", "No doctor matches all filters, with the nearest fix: show doctors speaking English within 3 km", "No match: the nearest fix"),
      patient("19-offline", "Offline: saved appointments shown, booking works again when back online", "Offline, still useful"),
      patient("20-search-de", "The home screen in German: Guten Morgen, Anna, Arzt finden", "German, first-class"),
      patient("21-results-de", "Results in German: Hausärzte, Frühester Termin, Spricht Englisch", "Long words, no overflow"),
    ],
  },

  system: {
    kicker: "Design system",
    headline: "One token file drives the app, the web and Storybook.",
    body: "Brand green for what is yours, selected or navigation; coral, from the dot in the logo, only for “earliest”; everything else stays ink and grey, so colour keeps its meaning. iOS type scale with Inter, Instrument Sans for the wordmark. 35 components and patterns live in Storybook, with the real screens they come from.",
    bullets: [
      "Languages as codes and names, never flags",
      "Status is always icon and words, never colour alone",
      "Text tokens for every status colour, so text passes WCAG AA on light and dark",
      "One icon size per role in a row, 44-point touch targets, tabular numbers for times",
    ],
    brand: {
      mark: "/case-parlo/brand/logo-mark.svg",
      caption: "The Parlo mark: a “p” whose counter is a speech bubble, with a coral dot. Talking is the product.",
      palette: [
        { name: "Parlo green", hex: "#0F6B5C", role: "Brand, selected, navigation, the home header", fromLogo: true },
        { name: "Coral", hex: "#E4704F", role: "The earliest slot. Nothing else is coral", fromLogo: true },
        { name: "Confirmed", hex: "#1E7F4B", role: "Status: confirmed, done, all good", fromLogo: false },
        { name: "Waiting", hex: "#B8740A", role: "Status: pending, running late", fromLogo: false },
        { name: "Offer", hex: "#2D62B8", role: "Waitlist offers and information", fromLogo: false },
      ],
    },
    storybook: [
      web("storybook", "01-colors", "Storybook: colour tokens with live WCAG contrast checks", "Tokens with live contrast checks"),
      web("storybook", "04-doctor-result-card", "Storybook: the DoctorResultCard pattern with controls", "Patterns, with real data"),
      web("storybook", "06-calendar-grid", "Storybook: the CalendarGrid pattern with every appointment status", "The practice calendar, as a pattern"),
      web("storybook", "07-appointment-card", "Storybook: AppointmentCard with the day-before check", "Every state of a component"),
    ],
    darkShots: [
      dark("01-search", "Home in the dark theme", "Home, dark"),
      dark("02-results", "Results in the dark theme", "Results, dark"),
      dark("05-doctor-profile", "Doctor profile in the dark theme", "Profile, dark"),
      dark("10-appointments", "Appointments in the dark theme", "Appointments, dark"),
    ],
  },

  validation: {
    kicker: "Validation",
    headline: "How I checked it.",
    intro: "The prototype is the spec, so I tested the prototype, not the mockups.",
    items: [
      { title: "The hero scenario, end to end", body: "Clicked across all three roles from a fresh load: cancel, offer, accept, filled from waitlist, brief, visit, review, insights. State is shared, nothing is faked between screens." },
      { title: "Every edge case by link", body: "13 scenarios open straight from a URL: offer, filled, running late, conflict, no match, offline, onboarding, empty. Reviews and demos start from the same state every time." },
      { title: "Contrast in light and dark", body: "Colour tokens are checked against WCAG 2.1 AA in both themes; status colours got separate text tokens where the fill was too light for text." },
      { title: "German on every screen", body: "Every screen checked in German for overflow and truncation. Long compound words and longer labels shaped several layouts." },
    ],
  },

  outcome: {
    kicker: "Outcome",
    headline: "What exists today.",
    facts: [
      { number: "3", label: "roles in one clickable scenario, sharing one schedule" },
      { number: "30+", label: "screens on phone and web, in light and dark" },
      { number: "35", label: "components and patterns documented in Storybook" },
      { number: "13", label: "scenarios reachable by link" },
      { number: "2", label: "interface languages: English and German" },
      { number: "42", label: "screens shot automatically from the prototype for this case" },
    ] as Fact[],
    measure: {
      title: "How we'll know it works",
      intro: "Targets to set with pilot practices for launch, not results.",
      targets: [
        { metric: "Time from search to a booked appointment", target: "< 2 min", why: "Earliest slot on the card and booking without a separate sign-up should make this fast" },
        { metric: "Cancelled slots refilled from the waitlist", target: "50%", why: "Matched offers with a 30-minute window instead of an empty chair" },
        { metric: "Bookings and moves without a phone call", target: "70%", why: "Phone time is reception's biggest cost" },
        { metric: "No-show rate", target: "−30%", why: "Day-before check, running-late and check-in in the same app" },
        { metric: "Reviews that mention “Spoke my language”", target: "Tracked", why: "The promise of the product, measured in patients' own words" },
      ] as Target[],
    },
  },

  lessons: {
    kicker: "Key takeaways",
    headline: "Three things this project taught me.",
    blocks: [
      { title: "Language is a feature, not a filter", body: "Once language sat on every card, matched to the patient, the rest of the flow could stay ordinary. One attribute, shown everywhere, changed the product." },
      { title: "Design the handoffs, not the screens", body: "The hardest part was the space between roles: a cancellation becoming someone else's appointment without anyone calling anyone." },
      { title: "AI moved the work from pictures to behaviour", body: "Building with AI let me test timing, shared state and edge cases instead of describing them. The questions changed from “does it look right” to “does it behave right”." },
    ] as Lesson[],
  },

  cta: {
    title: "Try it yourself",
    sub: "Switch between patient, doctor and practice in the live prototype, play the waitlist scenario, or read the design system.",
  },
};
