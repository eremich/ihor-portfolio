import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cases, getCase } from "@/content/cases";
import { Placeholder } from "@/components/placeholder";
import { PmsBody } from "@/components/case-pms-body";
import { regulateBody } from "@/content/case-regulate";
import {
  HeroMock,
  DashboardMock,
  DualThemeMock,
  FlowMock,
  LibraryMock,
} from "@/components/case-mocks";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return { title: "Case not found" };
  return {
    title: `${c.title} — Ihor Yeromich`,
    description: c.summary,
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  const isRegulate = slug === "regulate";
  const isPms = slug === "patient-management";
  // The PMS case has a side "Story" navigation, so its page is wider on desktop.
  const wide = isPms ? "max-w-[1180px]" : isRegulate ? "max-w-[960px]" : "max-w-[880px]";

  return (
    <article className={`mx-auto ${wide} px-6 pt-16 pb-24 sm:px-10`}>
      <Link
        href="/#case-studies"
        className="mb-16 inline-block text-[14px] text-ink-muted transition-colors hover:text-ink"
      >
        ← Back to case studies
      </Link>

      {c.headline ? (
        <RichHeader c={c} />
      ) : (
      <header className="mb-20 border-b border-line pb-14">
        <p className="mb-6 text-[13px] tracking-[0.14em] text-ink-muted uppercase">
          {c.tags.join(" · ")}
        </p>
        <h1 className="text-[44px] leading-[1.02] tracking-[-0.03em] text-ink sm:text-[64px]">
          {c.title}
        </h1>
        <p className="mt-8 max-w-[54ch] text-[19px] leading-[1.6] text-ink-muted">
          {c.summary}
        </p>

        <dl className="mt-12 grid grid-cols-2 gap-y-4 text-[14px] sm:grid-cols-3">
          <div>
            <dt className="text-ink-faint">Role</dt>
            <dd className="mt-1 text-ink">{c.role}</dd>
          </div>
          <div>
            <dt className="text-ink-faint">Company</dt>
            <dd className="mt-1 text-ink">{c.company}</dd>
          </div>
          <div>
            <dt className="text-ink-faint">Year</dt>
            <dd className="mt-1 tabular-nums text-ink">{c.year}</dd>
          </div>
        </dl>
      </header>
      )}

      {isRegulate ? <RegulateBody /> : isPms ? <PmsBody /> : <PlaceholderBody />}

      <div className="mt-32 border-t border-line pt-10">
        <Link
          href="/#case-studies"
          className="text-[14px] text-ink-muted transition-colors hover:text-ink"
        >
          ← Back to case studies
        </Link>
      </div>
    </article>
  );
}

// Hero for cases with an outcome headline: kicker, headline, summary, and a facts card
// (role, timeline, team, deliverables) beside it on wide screens.
function RichHeader({ c }: { c: NonNullable<ReturnType<typeof getCase>> }) {
  const facts = [
    { label: "Role", value: c.role },
    { label: "Timeline", value: c.year },
    { label: "Company", value: c.company },
    { label: "Team", value: c.team },
  ].filter((f) => f.value);
  return (
    <header className="mb-16 grid grid-cols-1 gap-12 border-b border-line pb-14 lg:grid-cols-[1fr_320px] lg:items-end">
      <div>
        <ul className="mb-6 flex flex-wrap gap-2">
          {c.tags.map((t) => (
            <li key={t} className="rounded-full border border-line-strong px-3 py-1 text-[12px] text-ink-muted">
              {t}
            </li>
          ))}
        </ul>
        <p className="mb-4 text-[13px] tracking-[0.14em] text-accent uppercase">{c.title} · case study</p>
        <h1 className="max-w-[18ch] text-[40px] leading-[1.04] tracking-[-0.03em] text-ink sm:text-[56px]">{c.headline}</h1>
        <p className="mt-8 max-w-[54ch] text-[18px] leading-[1.6] text-ink-muted">{c.summary}</p>
      </div>
      <div className="rounded-xl border border-line bg-paper-raised/60 p-5">
        <dl className="grid grid-cols-2 gap-x-4 gap-y-5 text-[14px]">
          {facts.map((f) => (
            <div key={f.label} className={f.label === "Team" ? "col-span-2" : ""}>
              <dt className="text-[12px] text-ink-faint">{f.label}</dt>
              <dd className="mt-1 leading-[1.45] text-ink">{f.value}</dd>
            </div>
          ))}
        </dl>
        {c.deliverables && (
          <>
            <p className="mt-6 text-[12px] text-ink-faint">Deliverables</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {c.deliverables.map((d) => (
                <li key={d} className="rounded-full bg-line px-3 py-1 text-[12px] text-ink-muted">
                  {d}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </header>
  );
}

// ---------------------------------------------------------------------------
// Regulate — rich sample layout to preview the case-study styling
// ---------------------------------------------------------------------------

function RegulateBody() {
  const b = regulateBody;
  return (
    <>
      <div className="mb-16 rounded-md border border-dashed border-line bg-paper-raised/40 px-4 py-3 text-[13px] leading-[1.55] text-ink-faint">
        {b.disclaimer}
      </div>

      <SectionBlock kicker={b.overview.kicker}>
        <h2 className="max-w-[24ch] text-[26px] leading-[1.2] tracking-tight text-ink sm:text-[32px]">
          {b.overview.headline}
        </h2>
        <div className="mt-8 max-w-[62ch] space-y-4 text-[17px] leading-[1.65] text-ink-muted">
          {b.overview.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <HeroMock />
      </SectionBlock>

      <SectionBlock kicker={b.challenge.kicker}>
        <h2 className="max-w-[26ch] text-[26px] leading-[1.2] tracking-tight text-ink sm:text-[32px]">
          {b.challenge.headline}
        </h2>
        <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.65] text-ink-muted">
          {b.challenge.intro}
        </p>
        <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {b.challenge.problems.map((p, i) => (
            <li
              key={i}
              className="border-t border-line pt-6"
            >
              <div className="mb-3 flex items-baseline gap-4">
                <span className="text-[32px] tabular-nums leading-none text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[18px] tracking-tight text-ink">
                  {p.title}
                </span>
              </div>
              <p className="text-[15px] leading-[1.6] text-ink-muted">
                {p.desc}
              </p>
            </li>
          ))}
        </ol>
      </SectionBlock>

      <SectionBlock kicker={b.role.kicker}>
        <ul className="grid grid-cols-1 gap-3">
          {b.role.bullets.map((r, i) => (
            <li
              key={i}
              className="flex items-baseline gap-4 border-t border-line py-3 text-[16px] leading-[1.55] text-ink"
            >
              <span className="text-[12px] tabular-nums text-ink-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </SectionBlock>

      <SectionBlock kicker={b.process.kicker}>
        <h2 className="max-w-[26ch] text-[26px] leading-[1.2] tracking-tight text-ink sm:text-[32px]">
          {b.process.headline}
        </h2>

        {b.process.phases.map((phase, i) => (
          <div
            key={i}
            className="mt-14 grid grid-cols-1 gap-8 border-t border-line pt-8 md:grid-cols-[180px_1fr] md:gap-12"
          >
            <p className="text-[13px] tracking-[0.14em] text-ink-faint uppercase">
              {phase.label}
            </p>
            <div>
              <h3 className="text-[22px] tracking-tight text-ink">
                {phase.title}
              </h3>
              <p className="mt-4 max-w-[52ch] text-[16px] leading-[1.65] text-ink-muted">
                {phase.intro}
              </p>
              {phase.bullets.length > 0 && (
                <ul className="mt-6 space-y-2">
                  {phase.bullets.map((bl, j) => (
                    <li
                      key={j}
                      className="flex items-baseline gap-3 text-[15px] leading-[1.6] text-ink-muted"
                    >
                      <span className="text-ink-faint">•</span>
                      <span>{bl}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {b.process.tokens.map((t, i) => (
            <div key={i} className="border-t border-line pt-5">
              <p className="text-[14px] tracking-tight text-ink">{t.title}</p>
              <p className="mt-2 text-[13px] leading-[1.55] text-ink-muted">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <DashboardMock />

      <SectionBlock kicker={b.dualTheme.kicker}>
        <h2 className="max-w-[28ch] text-[26px] leading-[1.2] tracking-tight text-ink sm:text-[32px]">
          {b.dualTheme.headline}
        </h2>
        <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.65] text-ink-muted">
          {b.dualTheme.intro}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="border-t border-line pt-5">
            <p className="text-[13px] tracking-[0.14em] text-ink-faint uppercase">
              Light Theme
            </p>
            <p className="mt-3 text-[15px] leading-[1.65] text-ink-muted">
              {b.dualTheme.light}
            </p>
          </div>
          <div className="border-t border-line pt-5">
            <p className="text-[13px] tracking-[0.14em] text-ink-faint uppercase">
              Dark Theme
            </p>
            <p className="mt-3 text-[15px] leading-[1.65] text-ink-muted">
              {b.dualTheme.dark}
            </p>
          </div>
        </div>
        <DualThemeMock />
        <p className="mt-8 text-[13px] text-ink-faint">{b.dualTheme.a11y}</p>
      </SectionBlock>

      <SectionBlock kicker={b.flow.kicker}>
        <h2 className="max-w-[28ch] text-[26px] leading-[1.2] tracking-tight text-ink sm:text-[32px]">
          {b.flow.headline}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <FlowStep step={b.flow.before} />
          <FlowStep step={b.flow.after} />
        </div>
        <div className="mt-12 border-t border-line pt-8">
          <div className="flex items-baseline gap-6">
            <span className="text-[72px] leading-none tabular-nums tracking-tight text-ink sm:text-[96px]">
              {b.flow.highlight.number}
            </span>
            <span className="max-w-[24ch] text-[15px] leading-[1.55] text-ink-muted">
              {b.flow.highlight.label}
            </span>
          </div>
        </div>
        <FlowMock />
      </SectionBlock>

      <SectionBlock kicker={b.features.kicker}>
        <h2 className="max-w-[28ch] text-[26px] leading-[1.2] tracking-tight text-ink sm:text-[32px]">
          {b.features.headline}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          {b.features.blocks.map((f, i) => (
            <div key={i} className="border-t border-line pt-6">
              <p className="text-[18px] tracking-tight text-ink">{f.title}</p>
              <ul className="mt-4 space-y-2">
                {f.items.map((it, j) => (
                  <li
                    key={j}
                    className="flex items-baseline gap-3 text-[15px] leading-[1.6] text-ink-muted"
                  >
                    <span className="text-ink-faint">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionBlock>

      <LibraryMock />

      <SectionBlock kicker={b.library.kicker}>
        <h2 className="max-w-[22ch] text-[26px] leading-[1.2] tracking-tight text-ink sm:text-[32px]">
          {b.library.headline}
        </h2>
        <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.65] text-ink-muted">
          {b.library.body}
        </p>
      </SectionBlock>

      <SectionBlock kicker={b.impact.kicker}>
        <h2 className="max-w-[30ch] text-[26px] leading-[1.2] tracking-tight text-ink sm:text-[32px]">
          {b.impact.headline}
        </h2>

        <div className="mt-14">
          <p className="mb-6 text-[13px] tracking-[0.14em] text-ink-faint uppercase">
            {b.impact.user.title}
          </p>
          <MetricGrid metrics={b.impact.user.metrics} />
        </div>
        <div className="mt-14">
          <p className="mb-6 text-[13px] tracking-[0.14em] text-ink-faint uppercase">
            {b.impact.team.title}
          </p>
          <MetricGrid metrics={b.impact.team.metrics} />
        </div>
      </SectionBlock>

      <SectionBlock kicker={b.lessons.kicker}>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {b.lessons.blocks.map((l, i) => (
            <div key={i} className="border-t border-line pt-6">
              <p className="text-[18px] tracking-tight text-ink">{l.title}</p>
              <p className="mt-3 text-[15px] leading-[1.65] text-ink-muted">
                {l.body}
              </p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock kicker={b.reviews.kicker}>
        <div className="mb-8 flex items-baseline gap-4 border-t border-line pt-6">
          <span className="text-[40px] leading-none tabular-nums text-ink">
            {b.reviews.rating}
          </span>
          <span className="text-[13px] text-ink-muted">{b.reviews.count}</span>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {b.reviews.quotes.map((q, i) => (
            <blockquote key={i} className="border-t border-line pt-5">
              <p className="text-[16px] leading-[1.5] tracking-tight text-ink">
                &ldquo;{q.headline}&rdquo;
              </p>
              <p className="mt-3 text-[13px] text-ink-muted">{q.sub}</p>
              <p className="mt-4 text-[12px] text-ink-faint">{q.author}</p>
            </blockquote>
          ))}
        </div>
      </SectionBlock>

      <section className="mt-24 border-t border-line pt-12">
        <h2 className="text-[26px] tracking-tight text-ink sm:text-[32px]">
          {b.cta.title}
        </h2>
        <p className="mt-3 text-[15px] text-ink-muted">{b.cta.sub}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {b.cta.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2 text-[14px] text-ink transition-[background-color,border-color,color] duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-ink hover:bg-ink hover:text-paper"
            >
              {link.label}
              <span
                aria-hidden
                className="inline-block transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

function SectionBlock({
  kicker,
  children,
}: {
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-24 md:mt-32">
      <p className="mb-8 text-[13px] tracking-[0.14em] text-ink-muted uppercase">
        {kicker}
      </p>
      {children}
    </section>
  );
}

function FlowStep({
  step,
}: {
  step: { title: string; desc: string; metric: string };
}) {
  return (
    <div className="border-t border-line pt-6">
      <p className="text-[13px] tracking-[0.14em] text-ink-faint uppercase">
        {step.title}
      </p>
      <p className="mt-3 text-[15px] leading-[1.6] text-ink-muted">
        {step.desc}
      </p>
      <p className="mt-6 text-[28px] tabular-nums tracking-tight text-ink">
        {step.metric}
      </p>
    </div>
  );
}

function MetricGrid({
  metrics,
}: {
  metrics: { number: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {metrics.map((m, i) => (
        <div key={i} className="border-t border-line pt-5">
          <p className="text-[36px] leading-none tabular-nums tracking-tight text-ink sm:text-[44px]">
            {m.number}
          </p>
          <p className="mt-3 text-[13px] leading-[1.4] text-ink-muted">
            {m.label}
          </p>
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Placeholder skeleton — for cases that don't have full content yet
// ---------------------------------------------------------------------------

function PlaceholderBody() {
  return (
    <>
      <Section title="Overview">
        <p>
          A short paragraph describing the product, who it is for, and where in
          its lifecycle the work happened. Placeholder copy — replace when the
          case is written up.
        </p>
      </Section>

      <Placeholder label="Hero image" ratio="wide" />

      <Section title="Problem">
        <p>
          What was broken, unclear, or missing when the project started. What
          the team needed to change and why it was worth doing. Placeholder
          copy.
        </p>
      </Section>

      <Section title="Approach">
        <p>
          The moves that shaped the outcome — research, structure, prototypes,
          the choices that were made and the ones that were let go. Placeholder
          copy.
        </p>
      </Section>

      <Placeholder label="Process artifact" ratio="wide" />

      <Section title="Outcome">
        <p>
          What shipped, how it landed, and what changed for the people using it.
          Numbers when they exist, honesty when they don&rsquo;t. Placeholder
          copy.
        </p>
      </Section>

      <Placeholder label="Final screen" ratio="wide" />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="my-12">
      <h2 className="mb-4 text-[13px] tracking-[0.14em] text-ink-muted uppercase">
        {title}
      </h2>
      <div className="max-w-[60ch] text-[17px] leading-[1.65] text-ink">
        {children}
      </div>
    </section>
  );
}
