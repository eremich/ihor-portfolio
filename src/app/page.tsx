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
            <span>Senior Product Designer — Berlin</span>
          </div>

          <h1
            id="hero-heading"
            className="rise rise-2 max-w-[14ch] text-[52px] leading-[1.02] tracking-[-0.03em] text-ink sm:text-[80px] md:text-[104px]"
          >
            Ihor Yeromich
          </h1>

          <p className="rise rise-3 mt-12 max-w-[58ch] text-[19px] leading-[1.6] text-ink-muted sm:text-[20px]">
            Senior product designer with eight years across B2B SaaS, agency,
            and in-house teams. Sole designer at{" "}
            <span className="text-ink">API Nation</span> — a real-estate
            automation platform with 4,000+ clients and 45M tasks a month —
            where I own the design system, onboarding, workflow builder, and
            AI-agent interfaces. Formerly design lead at{" "}
            <span className="text-ink">A-Development</span> in London, shipping
            30+ products across 10+ countries. Based in Berlin.
          </p>
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
          <p>
            I&rsquo;ve spent the last eight years shaping software — from
            fintech and healthcare to workflow automation. Two chapters have
            defined the work: leading design at{" "}
            <span className="text-ink">A-Development</span> in London
            (2015&ndash;2020), and being the sole designer at{" "}
            <span className="text-ink">API Nation</span> in California
            (2020&ndash;now).
          </p>
          <p>
            At API Nation I built the design system from scratch, redesigned
            the full platform, and now design conversational UI for an
            autonomous AI lead agent. Along the way I taught UX/UI at Hillel
            IT School and mentored a handful of designers.
          </p>
          <p>
            I care about calm, decisive interfaces — the kind that feel
            typographic rather than templated. Currently open to senior /
            product-lead roles from Q1 2026.
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-y-8 self-start text-[14px] sm:grid-cols-2 md:grid-cols-1">
          <MetaRow label="Currently">
            Sole Product Designer at{" "}
            <span className="text-ink">API Nation</span> — B2B SaaS, remote from
            Berlin
          </MetaRow>
          <MetaRow label="Previously">
            Lead UX/UI Designer at{" "}
            <span className="text-ink">A-Development</span>, London
          </MetaRow>
          <MetaRow label="Teaching">
            UX/UI Lecturer at Hillel IT School, 2022&ndash;2023
          </MetaRow>
          <MetaRow label="Studying">
            Design Systems & AI at cimdata Bildungsakademie, Berlin
          </MetaRow>
          <MetaRow label="Languages">
            German B2/C1 · English B2/C1 · Ukrainian · Russian
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
          <span>Available from Q1 2026</span>
        </span>
      </div>

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
