// Case study content: Patient Management System redesign for New Malden Diagnostic Centre.
// Every fact here comes from the project itself (audit, flows, prototype, design system).
// No invented metrics or reviews.

export type Shot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type Finding = { title: string; desc: string };
export type Persona = { name: string; tagline: string; goals: string; context: string };
export type Phase = { label: string; title: string; intro: string; bullets: string[] };
export type Decision = { title: string; why: string };
export type Pair = { finding: string; fix: string; before: Shot | null; after: Shot[] };
export type Flow = { title: string; desc: string; shots: Shot[] };
export type Fact = { number: string; label: string };
export type Lesson = { title: string; body: string };

const after = (file: string, alt: string, caption: string): Shot => ({
  src: `/case-pms/after/${file}.webp`,
  alt,
  caption,
  width: 2400,
  height: 1500,
});

// One version 1 screen per finding, cropped and marked; numbers in the image match the caption.
const before = (file: string, width: number, height: number, alt: string, caption: string): Shot => ({
  src: `/case-pms/before/${file}.webp`,
  alt,
  caption,
  width,
  height,
});

export const pmsLinks = {
  demo: "https://nmdc-patient-management.vercel.app",
  storybook: "https://nmdc-patient-management.vercel.app/storybook",
};

export const pmsBody = {
  tldr: [
    {
      label: "The problem",
      text: "In our 2020 version, staff at a busy diagnostic clinic could not tell what needed action now. Priority was invisible, status was colour-only, and two core flows did not exist.",
    },
    {
      label: "What I did",
      text: "Audited our own first version, defined the pathway, task states and roles, redesigned the key flows, and built a working prototype on a documented design system.",
    },
    {
      label: "The result",
      text: "A clickable product covering referral to billing for three roles, in light and dark, with every component documented in Storybook.",
    },
  ],

  overview: {
    kicker: "Project Overview",
    headline: "We shipped it in 2020. Six years later, I could see where it failed.",
    paragraphs: [
      "New Malden Diagnostic Centre is a private outpatient and diagnostics clinic in South London: imaging, specialist clinics and a paediatric department, six days a week.",
      "Its staff system registers patients, books clinics, tracks results and reports activity for billing, linked to Myorb for radiology, an on-site lab and Healthcode for insurers.",
      "In 2026 I audited our own first version and redesigned the parts that matter most.",
    ],
  },

  goals: {
    kicker: "Goals",
    product: {
      title: "Product goals, from the brief",
      items: [
        "Register patients and find existing records, adding a new episode of care rather than a duplicate",
        "Schedule appointments into clinics",
        "Check patients in on arrival so clinicians can see who is here",
        "Manage tasks in worklists, each with a priority and a full log of who did what and when",
        "Report activity by time frame and funding source, for billing",
      ],
    },
    design: {
      title: "Design goals",
      items: [
        "Staff see in seconds what needs action now, without scanning a table",
        "Priority and status can never be misread, including by colour-blind users",
        "Each role sees exactly what they may act on",
        "Mistakes are prevented, not fixed afterwards",
      ],
    },
  },

  users: {
    kicker: "Who it is for",
    headline: "Nobody here gets to use the system in peace.",
    intro:
      "Phones ring, patients walk in, a consultant waits. Personas come only from the roles in the brief, with no invented characters.",
    personas: [
      {
        name: "Admin / Reception",
        tagline: "Keeps the day moving",
        goals: "Register patients, keep clinics booked, check patients in, keep worklists clear.",
        context: "Front desk and back office, high interruption. Some also hold the Finance capability.",
      },
      {
        name: "Consultant",
        tagline: "Sees only their patients",
        goals: "Run clinic efficiently, request a test in one step mid-consultation, get results back with little admin.",
        context: "Consulting or scanning room, patient present, time-boxed.",
      },
      {
        name: "Consultant Secretary",
        tagline: "Acts for one consultant",
        goals: "Book and manage their consultant's patients quickly, keep the list clean.",
        context: "Office, working for a named consultant. Cannot see unrelated tasks.",
      },
    ] as Persona[],
  },

  role: {
    kicker: "My Role",
    bullets: [
      "Turned the brief into a domain model and the lifecycle of a booking task",
      "Audited the existing screens against usability heuristics and WCAG",
      "Defined information architecture and flows for each role",
      "Designed the visual language and every screen, in light and dark",
      "Built the design system: tokens, components, documentation in Storybook",
      "Built the clickable prototype in code, so the flows can be tried, not just viewed",
    ],
  },

  research: {
    kicker: "Research",
    headline: "Before redrawing anything, I audited what we had shipped.",
    intro:
      "Sources: the client's proposal, the pathway diagram, paper referral forms and our 2020 screens, eleven for admins and six for doctors.",
    method:
      "Five screens reviewed against Nielsen's heuristics and WCAG 2.1 AA, each finding rated by severity.",
    critical: [
      { title: "Priority was invisible", desc: "The brief makes routine, urgent and red flag core, yet the booking list had no priority column. Staff could not triage." },
      { title: "No patient name in results", desc: "The admin results list had twelve columns, but none said whose result you were chasing." },
      { title: "Check-in was hidden", desc: "Marking a patient as arrived is a core daily task for reception, yet it lived only in a row menu in the doctor's view." },
      { title: "No online referral form", desc: "Daily intake still depended on paper." },
    ] as Finding[],
    other: [
      "Status shown by colour alone; two states read as near-identical green",
      "No “what needs me now” view: flat lists, no default sort or grouping",
      "Role-blind: the same interface for every role",
      "Placeholder content everywhere, hiding real edge cases",
    ],
  },

  define: {
    kicker: "Define",
    pathway: {
      headline: "I turned the clinic's pathway into a flow the product could follow.",
      body: "Three audit gaps became explicit steps: register with a duplicate check, check-in as a first-class step, and a referral request as a second way to create a booking task.",
      diagram: "patient-pathway",
      // The real Miro working board, exported as an image. Shown only once the file exists.
      board: {
        src: "/case-pms/process/miro-board.webp",
        label: "Miro · working board",
        caption:
          "Two of eight flows on the working board: the patient pathway, with the diagnostic-or-consultation split and the loop back for a further test, and radiology across our system and Myorb. The board also holds the results pathway and five flows I proposed where the brief had only text.",
        alt: "Two frames from the Miro board. Patient Pathway: referral received, existing record check, create patient record, episode of care, create task, schedule appointment, patient arrives, then a diagnostic appointment decision: a test is carried out and confirmed by the clinician, which is logged for billing, or the patient sees a consultant; a further test decision loops back to create task. Radiology Flow: swim lanes for Patient Management and Myorb, from booking task to report link received.",
      },
      alt: "Flow diagram of the patient pathway: referral received, patient record check, register with duplicate check, episode of care, booking task, schedule appointment, check-in, consultation or test, clinician confirms, test logged for billing and results tracking task, result sent to referrer.",
    },
    status: {
      headline: "A status model settled most arguments before they started.",
      body: "Every state and allowed move is written down, so a button never offers something the process does not allow.",
      bullets: [
        "Priority (routine, urgent, red flag) is separate from status and shows as a column, a sort and a filter on every list",
        "Deactivating a task always needs a reason; “no longer required” needs it in writing",
        "Every status and priority is icon, label and colour, never colour alone",
        "Statuses group by meaning: needs action, waiting, done, closed. This fixed the two look-alike greens from the audit",
      ],
      diagram: "task-lifecycle",
      alt: "State diagram of a booking task. Pending moves to Scheduled when an appointment is booked, and Pending or Scheduled can be marked Complete, No longer required or Created in error. Complete and No longer required can be reactivated to Reactivate pending, which returns to Pending.",
    },
    ia: {
      headline: "Each role sees only what it can act on.",
      body: "One navigation, filtered by role: a secretary sees their consultant's list, a consultant sees their own patients.",
      columns: ["Area", "Admin / Reception", "Consultant", "Secretary"],
      rows: [
        ["Dashboard", "Triage across all lists", "My patients, arrivals, results awaited", "My consultant's list and clinics"],
        ["Booking tasks", "All", "Request from clinic", "Scoped to their consultant"],
        ["Results", "All", "My patients only", "Scoped"],
        ["Billing and reports", "Finance capability only", "No", "No"],
      ],
    },
  },

  design: {
    kicker: "Design",
    phases: [
      {
        label: "Direction",
        title: "Calm, precise, unflashy",
        intro:
          "The brief was a well-run reception desk, not a cold hospital portal and not a consumer health app. Colour is reserved for meaning, so status is the only thing that shouts. A rule I kept: red is reserved for system errors, so a clinical red flag can never be mistaken for a validation error.",
        bullets: [
          "A first direction with a deep-blue sidebar was rejected in review as too heavy",
          "The final look: a light canvas, a white work panel, bordered tables, initials avatars and soft tinted status pills with icons",
          "DM Sans, one type scale from 12 to 28 px, one blue for action",
        ],
      },
      {
        label: "Prototype",
        title: "A product you can use",
        intro:
          "I built the redesign as a clickable prototype with seeded data and a role switcher instead of a login. This was a deliberate cut: a reviewer judges screens and flows, so the effort went into the interface, not a database. State changes are real within a session: creating an episode adds a task, scheduling moves it to Scheduled, logging billing marks the episode paid or invoiced.",
        bullets: [],
      },
      {
        label: "Design system",
        title: "From screens to a system",
        intro:
          "Once the screens existed I turned them into a system, so the next screen would be faster and consistent. Three token tiers, light and dark themes from the same tokens, and every component documented with variants, states, do and don't, and accessibility notes.",
        bullets: [],
      },
    ] as Phase[],
  },

  compare: {
    kicker: "Audit findings and the redesign",
    headline: "What our first version got wrong, and what replaced it.",
    pairs: [
      {
        finding: "Priority invisible, status by colour alone, no “what needs me now”",
        fix: "A priority tag and an icon-and-label status on every task, filters by priority, and a dashboard that lists what needs attention first.",
        before: before("v1-task-worklist", 1440, 1024, "Our 2020 booking task list, with the status column and the header row marked", "Version 1 task list. 1: status by colour alone. 2: no priority column."),
        after: [
          after("tasks-light", "The redesigned task list with priority and status pills, search and filters", "Task list: priority, status with icon and label, filters"),
          after("tasks-red-flag-light", "The redesigned task list filtered to red flag tasks", "Filtered to red flag: one click to what is most urgent"),
        ],
      },
      {
        finding: "Registration with no duplicate check, and a disabled submit that explains nothing",
        fix: "A form that warns of a possible duplicate and lets the clinic register anyway, with a message under each field that is wrong and a submit that always works.",
        before: before("v1-registration", 1440, 1024, "Our 2020 patient registration, with the collapsed steps two to five and the greyed-out submit marked", "Version 1 registration. 1: four more steps waiting below, with no sense of progress. 2: submit greyed out with no reason."),
        after: [
          after("register-errors-light", "The register patient dialog showing errors under three empty required fields", "Errors under the fields that need fixing"),
          after("register-duplicate-light", "The register patient dialog warning of a possible duplicate patient", "A possible duplicate is flagged, not blocked"),
        ],
      },
      {
        finding: "Two overlapping calendars and no clear way to book",
        fix: "Scheduling lives in the task, with date, time and location, and the task moves to Scheduled on its own. An appointments page lists everything booked.",
        before: before("v1-clinic-scheduling", 2928, 1024, "Two of our 2020 screens side by side: the Clinic Page calendar and the Appointments day view, both a rooms by hours grid", "Version 1. 1: the Clinic Page calendar. 2: the Appointments calendar. The same rooms-by-hours grid, in two places."),
        after: [
          after("task-scheduled-light", "The task dialog showing a booked appointment and allowed next actions", "Scheduling inside the task"),
          after("appointments-light", "The appointments table", "All appointments in one place"),
        ],
      },
      {
        finding: "Admin results list with twelve columns and no patient name",
        fix: "Results sit in the task next to the appointment and the referral form, always under the patient's name, with one clear next step.",
        before: before("v1-results-tracking", 1920, 1080, "Our 2020 results list, with the header row and the status column marked", "Version 1 results list. 1: twelve columns, none of them the patient's name. 2: status by colour alone."),
        after: [after("task-result-light", "The task dialog showing a received result with a send to referrer action", "Result, referral and appointment together")],
      },
      {
        finding: "Referral form never designed; intake still on paper",
        fix: "A referral form per category, added from the task and linked to it, with structured fields instead of scanned free text.",
        before: null,
        after: [after("task-referral-form-light", "The task dialog with a referral form being filled in", "Structured referral form, linked to the task")],
      },
    ] as Pair[],
  },

  decisions: {
    kicker: "Design decisions",
    items: [
      { title: "Status is colour, icon and label", why: "Readable for colour-blind users and in greyscale." },
      { title: "One primary action per screen or dialog", why: "Staff are triaging, not browsing." },
      { title: "Hover only on clickable things", why: "Hover always means “you can click this”." },
      { title: "Submit is never disabled to hide a reason", why: "A greyed button explains nothing; show what to fix." },
      { title: "Controls a role cannot use are omitted", why: "Nobody meets an error after clicking." },
    ] as Decision[],
  },

  flows: {
    kicker: "Key flows",
    headline: "Built in code, so you can click through it, not just look at it.",
    items: [
      {
        title: "Dashboard: what needs attention",
        desc: "The primary tile counts active tasks. A list underneath puts red flag and urgent tasks first.",
        shots: [
          after("dashboard-light", "The dashboard in the light theme", "Dashboard, light"),
          after("dashboard-dark", "The dashboard in the dark theme", "Dashboard, dark"),
        ],
      },
      {
        title: "Patients and episodes",
        desc: "Search patients, open a record, and see every referral as an episode with its tasks and billing.",
        shots: [
          after("patients-light", "The patients list", "Patients"),
          after("patient-detail-light", "A patient record with episodes and tasks", "A patient, grouped by episode"),
        ],
      },
      {
        title: "Task lifecycle",
        desc: "Staff move a task only along allowed transitions. Each move is logged with who and when.",
        shots: [
          after("task-detail-pending-light", "A pending task in the task dialog", "A red flag task, pending"),
          after("task-schedule-error-light", "The schedule form showing an error for a missing date", "The scheduling form explains what is missing"),
        ],
      },
      {
        title: "Three roles, three views",
        desc: "A role switcher steps into each role. A consultant sees only their own tasks and no billing.",
        shots: [
          after("role-switcher-menu-light", "The role switcher menu listing the demo staff", "Role switcher"),
          after("tasks-consultant-light", "The task list as a consultant, showing only that consultant's two tasks", "Consultant view"),
        ],
      },
      {
        title: "Billing, Admin only",
        desc: "Self-pay is marked paid, an insurer is marked invoiced, and the report totals both.",
        shots: [after("billing-light", "The billing report for Admin", "Billing report")],
      },
      {
        title: "Dark theme",
        desc: "Designed with the light theme from the same tokens, and checked for contrast.",
        shots: [
          after("tasks-dark", "The task list in the dark theme", "Task list, dark"),
          after("task-detail-dark", "The task dialog in the dark theme", "Task dialog, dark"),
        ],
      },
    ] as Flow[],
  },

  system: {
    kicker: "Design system",
    headline: "I made the next screen cheaper to build.",
    body: "Three tiers of tokens: raw palette, purpose-named semantic tokens, component tokens. Every semantic token has a light and a dark value, and a check fails on any raw colour.",
    bullets: [
      "Every component documented with live examples, all variants and states",
      "When to use it, and do and don't, with real examples",
      "Tokens used and accessibility notes",
      "A matrix showing every interactive component in every state",
    ],
    shots: [
      after("storybook-introduction", "The Storybook introduction page of the design system", "Introduction: tiers, principles, how to contribute"),
      after("storybook-button-docs", "The Button documentation page in Storybook", "A component page: examples, props, guidance"),
      after("storybook-colors-semantic", "The semantic colour tokens page in Storybook", "Semantic tokens, resolved per theme"),
      after("storybook-states", "The interaction states matrix in Storybook", "Every component in every state"),
    ] as Shot[],
  },

  // Short versions of the outcome facts, shown as a strip right under the cover image.
  highlights: [
    { number: "3", label: "roles, each with its own view" },
    { number: "6", label: "task states with allowed moves" },
    { number: "60+", label: "documented Storybook stories" },
    { number: "AA", label: "text contrast in both themes" },
  ] as Fact[],

  outcome: {
    kicker: "Outcome",
    headline: "What exists today.",
    facts: [
      { number: "6", label: "screens and 4 dialogs, covering the pathway from referral to billing" },
      { number: "3", label: "roles with different views and permissions" },
      { number: "6", label: "task states with an explicit set of allowed moves" },
      { number: "60+", label: "Storybook stories, with documentation for every component" },
      { number: "3", label: "token tiers, about 100 colour tokens, light and dark themes" },
      { number: "AA", label: "text contrast on every screen and dialog in both themes; field borders are still below 3:1" },
    ] as Fact[],
    notDone: {
      title: "What is not done",
      items: [
        "Check-in is an action on the appointment (“Mark attended”); the arrivals board and the clinic calendar exist only as wireframes",
        "Hi-fi work in Figma covered the foundations (colour variables, text styles, priority tags, status chips, buttons), not every screen",
        "No usage data or client feedback: this is a design case, not a shipped product",
      ],
    },
  },

  lessons: {
    kicker: "Lessons Learned",
    blocks: [
      { title: "Revisit your own work", body: "Years later, the problems in our first version were obvious: priority hidden, status by colour alone. Auditing my own screens was harder than auditing someone else's, and more useful." },
      { title: "Start from the evidence", body: "The audit turned “it feels wrong” into a ranked list, and the ranking decided what to design first." },
      { title: "A status model is a design tool", body: "Writing the states and allowed moves before any screen removed most later arguments about what a button should do." },
      { title: "Cut the backend, keep the flows", body: "The first prototype plan had a database and real login. Removing them left all the effort on screens and flows." },
      { title: "Tokens before components", body: "Defining token tiers first, then components that only compose them, made themes, states and documentation follow naturally." },
      { title: "Show the hard states", body: "Error, empty, disabled and duplicate cases took more thought than the happy path, and they are where a clinical tool earns trust." },
    ] as Lesson[],
  },

  cta: {
    title: "Try it yourself",
    sub: "Switch between roles in the demo, or read the design system.",
    links: [
      { label: "Live demo", href: pmsLinks.demo },
      { label: "Design system", href: pmsLinks.storybook },
    ],
  },
};
