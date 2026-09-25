import { WorkList } from "@/components/work-list";
import { HeroMetaballs } from "@/components/hero-metaballs";

export default function HomePage() {
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
            <span>Product Designer · Berlin</span>
          </div>

          <h1
            id="hero-heading"
            className="rise rise-2 max-w-[18ch] text-[44px] leading-[1.04] tracking-[-0.03em] text-ink sm:text-[64px] md:text-[80px]"
          >
            I design complex products&nbsp;— and build them with&nbsp;AI.
          </h1>

          <p className="rise rise-3 mt-12 max-w-[58ch] text-[19px] leading-[1.6] text-ink-muted sm:text-[20px]">
            Product designer for SaaS and AI teams. For six years I was
            the sole designer of <span className="text-ink">API Nation</span>, a
            real-estate automation platform with 4,000+ clients and 45M tasks a
            month, from its design system to the interface of an autonomous AI
            agent.
          </p>

          <div className="rise rise-3 mt-10 flex flex-wrap gap-3">
            <a
              href="#case-studies"
              className="inline-flex min-h-11 items-center rounded-full border border-ink bg-ink px-5 py-2 text-[14px] text-paper! transition-colors duration-200 hover:bg-transparent hover:text-ink! focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >
              View case studies
            </a>
            <a
              href="#contacts"
              className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-5 py-2 text-[14px] text-ink transition-colors duration-200 hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 pb-24 sm:px-10">
        <section id="case-studies" className="scroll-mt-24 pt-16">
          <WorkList />
        </section>

        <AboutSection />
        <ContactsSection />
      </div>
    </>
  );
}

function AboutSection() {
  return (
    <section id="about" className="mt-40 scroll-mt-24 md:mt-56">
      <div className="mb-10 flex items-baseline justify-between border-b border-line pb-3">
        <h2 className="text-[12px] font-medium tracking-[0.14em] text-ink-muted uppercase">
          About me
        </h2>
        <span className="text-[12px] tabular-nums text-ink-faint">Berlin</span>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr] md:gap-20">
        <div className="space-y-6 text-[17px] leading-[1.65] text-ink-muted">
          <p className="text-[22px] leading-[1.3] tracking-tight text-ink sm:text-[26px]">
            Product designer. Systems thinker. AI-native builder.
          </p>
          <p>
            I build B2B software: I started as a front-end developer, then
            became a designer and design lead. At{" "}
            <span className="text-ink">API Nation</span> I owned the whole
            product: a design system that made design and development 20%
            faster, a platform redesign that cut task time by 30%, onboarding
            that lifted conversion by 22%, a no-code workflow builder, and the
            conversational UI for an AI lead agent.
          </p>
          <p>
            Today I design with AI as much as for it. I prototype in code on a
            documented design system, so ideas become working products that
            engineers can pick up, not static mockups.
          </p>
          <p>
            Before that, I led a design team at{" "}
            <span className="text-ink">A-Development</span> in London,
            delivering 30+ products for clients in 10+ countries, and taught
            UX/UI at Hillel IT School.
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-y-8 self-start text-[14px] sm:grid-cols-2 md:grid-cols-1">
          <MetaRow label="Recently">
            Senior Product Designer at{" "}
            <span className="text-ink">API Nation</span> · 2020&ndash;2026
          </MetaRow>
          <MetaRow label="Previously">
            Lead UX/UI Designer at{" "}
            <span className="text-ink">A-Development</span>, London ·
            2017&ndash;2020
          </MetaRow>
          <MetaRow label="AI tools I use daily">
            Claude Code · Cursor · Figma AI / Figma Make · ChatGPT · MCP
          </MetaRow>
          <MetaRow label="Teaching">
            UX/UI Lecturer at Hillel IT School · 2 cohorts
          </MetaRow>
          <MetaRow label="Learning">
            Design Systems &amp; Service Design with AI, cimdata Berlin ·{" "}
            <span className="whitespace-nowrap">2025&ndash;2026</span>
          </MetaRow>
          <MetaRow label="Languages">
            German B2 · English fluent · Ukrainian, Russian native
          </MetaRow>
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

function ContactsSection() {
  return (
    <section id="contacts" className="mt-40 scroll-mt-24 md:mt-56">
      <div className="mb-10 flex items-baseline justify-between border-b border-line pb-3">
        <h2 className="text-[12px] font-medium tracking-[0.14em] text-ink-muted uppercase">
          Contacts
        </h2>
        <span className="flex items-center gap-2 text-[12px] text-ink-faint">
          <span className="dot-live" aria-hidden />
          <span>Open to new roles</span>
        </span>
      </div>

      <h3 className="mb-3 text-[26px] leading-[1.2] tracking-tight text-ink sm:text-[32px]">
        Let&rsquo;s build something clear.
      </h3>
      <p className="mb-10 max-w-[56ch] text-[17px] leading-[1.6] text-ink-muted">
        Open to product design roles in AI and SaaS teams.
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <ContactCard
          label="Email"
          value="igor.eryomich@gmail.com"
          href="mailto:igor.eryomich@gmail.com"
        />
        <ContactCard
          label="LinkedIn"
          value="in/erema"
          href="https://www.linkedin.com/in/erema/"
          external
        />
        <ContactCard label="Based in" value="Berlin, Germany" />
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
