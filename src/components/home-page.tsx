import { ConceptGrid } from "@/components/concept-grid";
import { WorkList } from "@/components/work-list";
import { HeroMetaballs } from "@/components/hero-metaballs";
import type { Lang } from "@/i18n";

const A = ({ children }: { children: React.ReactNode }) => <span className="text-ink">{children}</span>;

// Homepage copy. Rich lines are JSX so emphasis stays with the words in each language.
const copy = {
  en: {
    badge: "Product Designer · Berlin",
    title: <>I design complex products&nbsp;— and build them with&nbsp;AI.</>,
    lead: (
      <>
        Product designer for SaaS and AI teams. For six years I was the sole designer of <A>API Nation</A>, a
        real-estate automation platform with 4,000+ clients and 45M tasks a month, from its design system to the
        interface of an autonomous AI agent.
      </>
    ),
    ctaCases: "View case studies",
    ctaContact: "Get in touch",
    about: {
      heading: "About me",
      tagline: "Product designer. Systems thinker. AI-native builder.",
      paragraphs: [
        <>
          I build B2B software: I started as a front-end developer, then became a designer and design lead. At{" "}
          <A>API Nation</A> I owned the whole product: a design system that made design and development 20% faster,
          a platform redesign that cut task time by 30%, onboarding that lifted conversion by 22%, a no-code workflow
          builder, and the conversational UI for an AI lead agent.
        </>,
        <>
          Today I design with AI as much as for it. I prototype in code on a documented design system, so ideas
          become working products that engineers can pick up, not static mockups.
        </>,
        <>
          Before that, I led a design team at <A>A-Development</A> in London, delivering 30+ products for clients
          in 10+ countries, and taught UX/UI at Hillel IT School.
        </>,
      ],
      meta: [
        { label: "Recently", value: <>Senior Product Designer at <A>API Nation</A> · 2020&ndash;2026</> },
        { label: "Previously", value: <>Lead UX/UI Designer at <A>A-Development</A>, London · 2017&ndash;2020</> },
        { label: "AI tools I use daily", value: <>Claude Code · Cursor · Figma AI / Figma Make · ChatGPT · MCP</> },
        { label: "Teaching", value: <>UX/UI Lecturer at Hillel IT School · 2 cohorts</> },
        {
          label: "Learning",
          value: (
            <>
              Design Systems &amp; Service Design with AI, cimdata Berlin ·{" "}
              <span className="whitespace-nowrap">2025&ndash;2026</span>
            </>
          ),
        },
        { label: "Languages", value: <>German B2 · English fluent · Ukrainian, Russian native</> },
      ],
    },
    contacts: {
      heading: "Contacts",
      status: "Open to new roles",
      title: <>Let&rsquo;s build something clear.</>,
      text: "Open to product design roles in AI and SaaS teams.",
      email: "Email",
      basedIn: "Based in",
      location: "Berlin, Germany",
    },
  },
  de: {
    badge: "Product Designer · Berlin",
    title: <>Ich gestalte komplexe Produkte&nbsp;– und baue sie mit&nbsp;KI.</>,
    lead: (
      <>
        Product Designer für SaaS- und KI-Teams. Sechs Jahre lang war ich der einzige Designer bei <A>API Nation</A>,
        einer Automatisierungsplattform für die Immobilienbranche mit über 4.000 Kunden und 45 Mio. Aufgaben pro
        Monat&nbsp;– vom Designsystem bis zur Oberfläche eines autonomen KI-Agenten.
      </>
    ),
    ctaCases: "Case Studies ansehen",
    ctaContact: "Kontakt aufnehmen",
    about: {
      heading: "Über mich",
      tagline: "Product Designer. Denkt in Systemen. Baut mit KI.",
      paragraphs: [
        <>
          Ich entwickle B2B-Software: Angefangen habe ich als Frontend-Entwickler, dann wurde ich Designer und Design
          Lead. Bei <A>API Nation</A> habe ich das gesamte Produkt verantwortet: ein Designsystem, das Design und
          Entwicklung um 20&nbsp;% beschleunigt hat, ein Redesign der Plattform, das die Bearbeitungszeit von Aufgaben
          um 30&nbsp;% verkürzt hat, ein Onboarding, das die Conversion um 22&nbsp;% gesteigert hat, einen
          No-Code-Workflow-Builder und die Conversational UI für einen KI-Lead-Agenten.
        </>,
        <>
          Heute gestalte ich ebenso mit KI wie für KI. Ich prototype direkt im Code auf Basis eines dokumentierten
          Designsystems&nbsp;– so werden aus Ideen funktionierende Produkte, die Entwickler übernehmen können, statt
          statischer Mockups.
        </>,
        <>
          Davor habe ich bei <A>A-Development</A> in London ein Designteam geleitet, über 30 Produkte für Kunden in
          mehr als 10 Ländern umgesetzt und UX/UI an der Hillel IT School unterrichtet.
        </>,
      ],
      meta: [
        { label: "Zuletzt", value: <>Senior Product Designer bei <A>API Nation</A> · 2020&ndash;2026</> },
        { label: "Davor", value: <>Lead UX/UI Designer bei <A>A-Development</A>, London · 2017&ndash;2020</> },
        { label: "KI-Tools im Alltag", value: <>Claude Code · Cursor · Figma AI / Figma Make · ChatGPT · MCP</> },
        { label: "Lehre", value: <>UX/UI-Dozent an der Hillel IT School · 2 Jahrgänge</> },
        {
          label: "Weiterbildung",
          value: (
            <>
              Design Systems &amp; Service Design mit KI, cimdata Berlin ·{" "}
              <span className="whitespace-nowrap">2025&ndash;2026</span>
            </>
          ),
        },
        { label: "Sprachen", value: <>Deutsch B2 · Englisch fließend · Ukrainisch, Russisch Muttersprache</> },
      ],
    },
    contacts: {
      heading: "Kontakt",
      status: "Offen für neue Rollen",
      title: <>Lassen Sie uns gemeinsam etwas Klares bauen.</>,
      text: "Ich suche Product-Design-Rollen in KI- und SaaS-Teams.",
      email: "E-Mail",
      basedIn: "Standort",
      location: "Berlin, Deutschland",
    },
  },
} satisfies Record<Lang, unknown>;

export function HomePage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <>
      {/* Hero section spans the viewport — metaballs are free of the 1200px wrapper */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="relative min-h-[72vh] overflow-hidden pt-20 pb-16 md:min-h-[78vh] md:pt-28 md:pb-24"
      >
        <HeroMetaballs />

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-10">
          <div className="rise rise-1 mb-8 inline-flex items-center gap-3 rounded-full border border-line bg-paper/40 px-3 py-1.5 text-[12px] tracking-[0.08em] text-ink-muted uppercase backdrop-blur-md">
            <span className="dot-live" aria-hidden />
            <span>{t.badge}</span>
          </div>

          <h1
            id="hero-heading"
            className="rise rise-2 max-w-[18ch] text-[44px] leading-[1.04] tracking-[-0.03em] text-ink sm:text-[64px] md:text-[80px]"
          >
            {t.title}
          </h1>

          <p className="rise rise-3 mt-12 max-w-[58ch] text-[19px] leading-[1.6] text-ink-muted sm:text-[20px]">
            {t.lead}
          </p>

          <div className="rise rise-3 mt-10 flex flex-wrap gap-3">
            <a
              href="#case-studies"
              data-umami-event="hero-cta"
              data-umami-event-target="case-studies"
              className="inline-flex min-h-11 items-center rounded-full border border-ink bg-ink px-5 py-2 text-[14px] text-paper! transition-colors duration-200 hover:bg-transparent hover:text-ink! focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >
              {t.ctaCases}
            </a>
            <a
              href="#contacts"
              data-umami-event="hero-cta"
              data-umami-event-target="contacts"
              className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-5 py-2 text-[14px] text-ink transition-colors duration-200 hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >
              {t.ctaContact}
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 pb-24 sm:px-10">
        <section id="case-studies" className="scroll-mt-24 pt-16">
          <WorkList lang={lang} />
        </section>

        <section id="concepts" className="mt-40 scroll-mt-24 md:mt-56">
          <ConceptGrid lang={lang} />
        </section>

        <AboutSection t={t.about} />
        <ContactsSection t={t.contacts} />
      </div>
    </>
  );
}

function AboutSection({ t }: { t: (typeof copy)["en"]["about"] }) {
  return (
    <section id="about" className="mt-40 scroll-mt-24 md:mt-56">
      <div className="mb-10 flex items-baseline justify-between border-b border-line pb-3">
        <h2 className="text-[12px] font-medium tracking-[0.14em] text-ink-muted uppercase">
          {t.heading}
        </h2>
        <span className="text-[12px] tabular-nums text-ink-faint">Berlin</span>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr] md:gap-20">
        <div className="space-y-6 text-[17px] leading-[1.65] text-ink-muted">
          <p className="text-[22px] leading-[1.3] tracking-tight text-ink sm:text-[26px]">
            {t.tagline}
          </p>
          {t.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <dl className="grid grid-cols-1 gap-y-8 self-start text-[14px] sm:grid-cols-2 md:grid-cols-1">
          {t.meta.map((m) => (
            <MetaRow key={m.label} label={m.label}>
              {m.value}
            </MetaRow>
          ))}
        </dl>
      </div>
    </section>
  );
}

function MetaRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="mb-1 text-[12px] tracking-[0.12em] text-ink-faint uppercase">
        {label}
      </dt>
      <dd className="text-ink-muted">{children}</dd>
    </div>
  );
}

function ContactsSection({ t }: { t: (typeof copy)["en"]["contacts"] }) {
  return (
    <section id="contacts" className="mt-40 scroll-mt-24 md:mt-56">
      <div className="mb-10 flex items-baseline justify-between border-b border-line pb-3">
        <h2 className="text-[12px] font-medium tracking-[0.14em] text-ink-muted uppercase">
          {t.heading}
        </h2>
        <span className="flex items-center gap-2 text-[12px] text-ink-faint">
          <span className="dot-live" aria-hidden />
          <span>{t.status}</span>
        </span>
      </div>

      <h3 className="mb-3 text-[26px] leading-[1.2] tracking-tight text-ink sm:text-[32px]">
        {t.title}
      </h3>
      <p className="mb-10 max-w-[56ch] text-[17px] leading-[1.6] text-ink-muted">
        {t.text}
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <ContactCard
          label={t.email}
          value="igor.eryomich@gmail.com"
          href="mailto:igor.eryomich@gmail.com"
        />
        <ContactCard
          label="LinkedIn"
          value="in/erema"
          href="https://www.linkedin.com/in/erema/"
          external
        />
        <ContactCard label={t.basedIn} value={t.location} />
      </div>
    </section>
  );
}

function ContactCard({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <span className="text-[12px] tracking-[0.12em] text-ink-faint uppercase">
        {label}
      </span>
      <span className="mt-2 inline-flex items-baseline gap-2 text-[22px] tracking-tight text-ink sm:text-[26px]">
        {value}
        {href && (
          <span
            aria-hidden
            className="text-[16px] text-ink-muted transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            ↗
          </span>
        )}
      </span>
    </>
  );

  if (!href) {
    return (
      <div className="flex flex-col rounded-lg border border-line p-6">
        {inner}
      </div>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex flex-col rounded-lg border border-line p-6 transition-[background-color,border-color] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-line-strong hover:bg-white/[0.03]"
    >
      {inner}
    </a>
  );
}
