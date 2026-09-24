// Preview / demo content — layout reference from dobzha.com/case/case-regulate.
// This is a styling test to see how a full case-study structure feels in the
// portfolio's dark + sepia system. Replace with Ihor's own case data.

export type Metric = { number: string; label: string };
export type NumberedProblem = { title: string; desc: string };
export type Phase = { label: string; title: string; intro: string; bullets: string[] };
export type FeatureBlock = { title: string; items: string[] };
export type Lesson = { title: string; body: string };
export type Review = { headline: string; sub: string; author: string };

export const regulateBody = {
  disclaimer: "Preview content — layout reference from dobzha.com/case/case-regulate. Not Ihor's work.",

  overview: {
    kicker: "Project Overview",
    headline: "A personalized metabolic health platform powered by continuous glucose monitoring.",
    paragraphs: [
      "Regulate helps users understand their body's response to food, exercise, and lifestyle factors through continuous glucose monitoring (CGM) technology.",
      "The platform translates complex biometric data into actionable insights, empowering users to make informed decisions about nutrition, activity, and overall wellness.",
    ],
  },

  challenge: {
    kicker: "The Challenge",
    headline: "The product worked, but the experience needed a clearer operating system.",
    intro: "When I joined the project, Regulate had a functional product but faced several critical design and usability challenges.",
    problems: [
      { title: "Inconsistent Design Language", desc: "Visual elements lacked cohesion across different sections, creating a fragmented user experience." },
      { title: "Complex User Flows", desc: "Critical actions required too many steps, leading to user drop-off." },
      { title: "No Design System", desc: "Absence of a structured design system slowed development and created inconsistencies." },
      { title: "Limited Accessibility", desc: "Single theme mode didn't accommodate user preferences for dark/light environments." },
    ] as NumberedProblem[],
  },

  role: {
    kicker: "My Role & Contributions",
    bullets: [
      "Conducting comprehensive UX audit and identifying friction points",
      "Developing and implementing a scalable design token system",
      "Building comprehensive design system with reusable components",
      "Designing both light and dark theme modes",
      "Optimizing key user flows to reduce friction",
    ],
  },

  process: {
    kicker: "Design Process & Solutions",
    headline: "Start with the audit, then turn the findings into reusable product language.",
    phases: [
      {
        label: "Phase 1",
        title: "Comprehensive UX Audit",
        intro: "I began with a thorough examination of the existing platform, analyzing user flows, interaction patterns, and visual design.",
        bullets: [
          "Mapped complete user journeys from onboarding through daily usage",
          "Documented all UI components and current usage patterns",
          "Identified redundant steps in critical flows",
          "Catalogued inconsistencies in spacing, typography, and color usage",
        ],
      },
      {
        label: "Phase 2",
        title: "Design Token System",
        intro: "I developed a comprehensive design token system that became the foundation for all visual design decisions.",
        bullets: [],
      },
    ] as Phase[],
    tokens: [
      { title: "Color Tokens", desc: "Semantic color system with light/dark variants" },
      { title: "Typography", desc: "Consistent type scale with defined hierarchy" },
      { title: "Spacing", desc: "8-point grid system for consistent spacing" },
      { title: "Effects", desc: "Defined border radius and elevation system" },
    ],
  },

  dualTheme: {
    kicker: "Dual Theme Implementation",
    headline: "Light and dark modes were designed as one system, not two skins.",
    intro: "Designed both light and dark themes to accommodate different user preferences and usage contexts.",
    light: "Optimized for daytime use with a clean, bright aesthetic featuring a soft green primary color representing health and growth.",
    dark: "Designed for low-light environments with carefully calibrated contrast ratios ensuring data readability.",
    a11y: "Both themes maintain WCAG AA contrast standards for text and data visualization elements.",
  },

  flow: {
    kicker: "Flow Optimization",
    headline: "Event logging moved from a multi-screen chore to a focused modal action.",
    before: {
      title: "Before",
      desc: "Users needed to navigate through multiple screens, select event type, choose time, and then enter details.",
      metric: "8 clicks",
    },
    after: {
      title: "After",
      desc: "Streamlined modal interface with contextual event type selection, auto-populated timestamp, and quick-access recent meals.",
      metric: "3 clicks",
    },
    highlight: { number: "62%", label: "reduction in interaction cost" },
  },

  features: {
    kicker: "Key Features & Design Details",
    headline: "Complex health data becomes a set of readable, repeatable product patterns.",
    blocks: [
      {
        title: "Real-Time Glucose Monitoring",
        items: [
          "Large, prominent display with status indicator",
          "Interactive glucose curve (3, 6, 12, 24-hour views)",
          "Personalized contextual insights",
          "Event timeline with mini-graphs",
        ],
      },
      {
        title: "Comprehensive Reporting",
        items: [
          "Time in Range percentage indicator",
          "Average Glucose trend visualization",
          "Spike Analysis with severity indicators",
          "Glucose Variability stability metric",
        ],
      },
      {
        title: "Event Logging System",
        items: [
          "Four primary event types with distinct icons",
          "Contextual auto-populated timestamps",
          "Optional photo documentation",
          "Free-form notes field",
        ],
      },
      {
        title: "Educational Library",
        items: [
          "Curated metabolic health content",
          "Article cards with reading times",
          "Evidence-based information",
          "Accessible language presentation",
        ],
      },
    ] as FeatureBlock[],
  },

  library: {
    kicker: "Educational Library",
    headline: "Learning sits beside tracking.",
    body: "Curated content helping users understand metabolic health concepts, featuring article cards with estimated reading times and categorization. The library reinforces learning through evidence-based information presented in accessible language, making complex health concepts understandable for all users.",
  },

  impact: {
    kicker: "Impact & Results",
    headline: "Better flows for users, faster implementation for the product team.",
    user: {
      title: "User Experience Improvements",
      metrics: [
        { number: "62%", label: "reduction in clicks to complete target actions" },
        { number: "28%", label: "increase in daily event logging frequency" },
        { number: "45%", label: "easier connection to the tracker" },
        { number: "18%", label: "improvement in report view engagement" },
      ] as Metric[],
    },
    team: {
      title: "Development Efficiency Gains",
      metrics: [
        { number: "35%", label: "faster feature implementation" },
        { number: "67%", label: "reduction in handoff questions" },
        { number: "Zero", label: "visual regression issues post-implementation" },
        { number: "90%", label: "reduction in time for new component variants" },
      ] as Metric[],
    },
  },

  lessons: {
    kicker: "Lessons Learned",
    blocks: [
      { title: "Foundation Before Features", body: "Investing time in building a robust design system foundation pays exponential dividends in development velocity and product consistency." },
      { title: "Data Complexity Requires Simplicity", body: "Creating a progressive disclosure system where users can quickly grasp their current state while having access to detailed analysis when desired." },
      { title: "Dark Mode as Standard", body: "Designing both light and dark themes simultaneously resulted in more thoughtful color systems and better accessibility." },
      { title: "Micro-Interactions Matter", body: "Small interactions contribute significantly to user engagement in health tracking apps, encouraging consistent usage for meaningful data patterns." },
    ] as Lesson[],
  },

  reviews: {
    kicker: "App Store Reviews",
    headline: "Users noticed the simplicity.",
    rating: "5.0",
    count: "13 App Store ratings",
    quotes: [
      { headline: "Digestible content at your fingertips.", sub: "Comprehensive yet simple analysis", author: "AR NorCal · App Store" },
      { headline: "Easy and efficient to use.", sub: "Your Health, Simplified", author: "Abi Ashrafi · App Store" },
      { headline: "So easy to use.", sub: "Wonderful app", author: "Mahshar007 · App Store" },
    ] as Review[],
  },

  cta: {
    title: "Try Regulate Care",
    sub: "Available on iOS and Android.",
    links: [
      { label: "App Store", href: "#" },
      { label: "Google Play", href: "#" },
    ],
  },
} as const;
