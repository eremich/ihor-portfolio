import Image from "next/image";
import { readFileSync } from "node:fs";
import path from "node:path";
import { pmsBody as b, pmsLinks, type Shot } from "@/content/case-pms";

// Body of the Patient Management System case study. Server component: diagrams are inlined
// from public/case-pms/diagrams so they inherit the page's text colour.

const link =
  "group inline-flex min-h-11 items-center gap-2 rounded-full border px-5 py-2 text-[14px] transition-[background-color,border-color,color] duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

export function PmsBody() {
  return (
    <>
      <div className="-mt-6 mb-16 flex flex-wrap gap-3">
        <a
          href={pmsLinks.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link} border-ink bg-ink text-paper! hover:bg-transparent hover:text-ink!`}
        >
          Live demo <Arrow />
        </a>
        <a
          href={pmsLinks.storybook}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link} border-line-strong text-ink hover:border-ink`}
        >
          Design system <Arrow />
        </a>
      </div>

      <dl className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {b.tldr.map((t) => (
          <div key={t.label} className="border-t border-line pt-5">
            <dt className="text-[13px] tracking-[0.14em] text-ink-faint uppercase">{t.label}</dt>
            <dd className="mt-3 text-[15px] leading-[1.6] text-ink-muted">{t.text}</dd>
          </div>
        ))}
      </dl>

      <Figure shot={b.flows.items[0].shots[0]} priority className="mt-16" />

      {/* Headline numbers straight after the cover: roles, task states, stories, contrast. */}
      <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-4">
        {b.highlights.map((f) => (
          <div key={f.label} className="flex flex-col-reverse justify-end gap-2 bg-paper p-5">
            <dt className="text-[13px] leading-[1.4] text-ink-muted">{f.label}</dt>
            <dd className="text-[32px] leading-none tabular-nums tracking-tight text-accent">{f.number}</dd>
          </div>
        ))}
      </dl>

      <Block kicker={b.overview.kicker}>
        <Headline>{b.overview.headline}</Headline>
        <Prose>
          {b.overview.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Prose>
      </Block>

      <Block kicker={b.goals.kicker}>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {[b.goals.product, b.goals.design].map((g) => (
            <div key={g.title}>
              <h3 className="text-[20px] tracking-tight text-ink">{g.title}</h3>
              <ul className="mt-5 space-y-3">
                {g.items.map((item, i) => (
                  <li key={item} className="flex items-baseline gap-4 border-t border-line pt-3 text-[15px] leading-[1.6] text-ink-muted">
                    <span className="text-[12px] tabular-nums text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Block>

      <Block kicker={b.users.kicker}>
        <Headline>{b.users.headline}</Headline>
        <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.65] text-ink-muted">{b.users.intro}</p>
        <ul className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {b.users.personas.map((p) => (
            <li key={p.name} className="border-t border-line pt-6">
              <p className="text-[18px] tracking-tight text-ink">{p.name}</p>
              <p className="mt-1 text-[13px] text-ink-faint">{p.tagline}</p>
              <p className="mt-5 text-[15px] leading-[1.6] text-ink-muted">{p.goals}</p>
              <p className="mt-3 text-[14px] leading-[1.6] text-ink-faint">{p.context}</p>
            </li>
          ))}
        </ul>
      </Block>

      <Block kicker={b.role.kicker}>
        <ul className="grid grid-cols-1 gap-3">
          {b.role.bullets.map((r, i) => (
            <li key={r} className="flex items-baseline gap-4 border-t border-line py-3 text-[16px] leading-[1.55] text-ink">
              <span className="text-[12px] tabular-nums text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </Block>

      <Block kicker={b.research.kicker}>
        <Headline>{b.research.headline}</Headline>
        <Prose>
          <p>{b.research.intro}</p>
          <p>{b.research.method}</p>
        </Prose>
        <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {b.research.critical.map((f, i) => (
            <li key={f.title} className="border-t border-line pt-6">
              <div className="mb-3 flex items-baseline gap-4">
                <span className="text-[32px] leading-none tabular-nums text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[18px] tracking-tight text-ink">{f.title}</span>
              </div>
              <p className="text-[15px] leading-[1.6] text-ink-muted">{f.desc}</p>
            </li>
          ))}
        </ol>
        <p className="mt-12 text-[13px] tracking-[0.14em] text-ink-faint uppercase">Also found</p>
        <ul className="mt-4 space-y-2">
          {b.research.other.map((o) => (
            <li key={o} className="flex items-baseline gap-3 text-[15px] leading-[1.6] text-ink-muted">
              <span className="text-ink-faint">•</span>
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </Block>

      <Block kicker={b.define.kicker}>
        <Headline>{b.define.pathway.headline}</Headline>
        <Prose>
          <p>{b.define.pathway.body}</p>
        </Prose>
        <Diagram name={b.define.pathway.diagram} alt={b.define.pathway.alt} />

        <h2 className="mt-24 max-w-[26ch] text-[26px] leading-[1.2] tracking-tight text-ink sm:text-[32px]">
          {b.define.status.headline}
        </h2>
        <Prose>
          <p>{b.define.status.body}</p>
        </Prose>
        <ul className="mt-6 max-w-[62ch] space-y-2">
          {b.define.status.bullets.map((x) => (
            <li key={x} className="flex items-baseline gap-3 text-[15px] leading-[1.6] text-ink-muted">
              <span className="text-ink-faint">•</span>
              <span>{x}</span>
            </li>
          ))}
        </ul>
        <Diagram name={b.define.status.diagram} alt={b.define.status.alt} />

        <h2 className="mt-24 max-w-[26ch] text-[26px] leading-[1.2] tracking-tight text-ink sm:text-[32px]">
          {b.define.ia.headline}
        </h2>
        <Prose>
          <p>{b.define.ia.body}</p>
        </Prose>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-[14px]">
            <thead>
              <tr>
                {b.define.ia.columns.map((c) => (
                  <th key={c} scope="col" className="border-b border-line-strong py-3 pr-6 text-[12px] font-normal tracking-[0.14em] text-ink-faint uppercase">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.define.ia.rows.map((row) => (
                <tr key={row[0]} className="border-b border-line">
                  {row.map((cell, i) =>
                    i === 0 ? (
                      <th key={i} scope="row" className="py-4 pr-6 align-top font-normal text-ink">
                        {cell}
                      </th>
                    ) : (
                      <td key={i} className="py-4 pr-6 align-top text-ink-muted">
                        {cell}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Block>

      <Block kicker={b.design.kicker}>
        {b.design.phases.map((phase) => (
          <div key={phase.label} className="mt-14 grid grid-cols-1 gap-8 border-t border-line pt-8 first:mt-0 md:grid-cols-[180px_1fr] md:gap-12">
            <p className="text-[13px] tracking-[0.14em] text-ink-faint uppercase">{phase.label}</p>
            <div>
              <h3 className="text-[22px] tracking-tight text-ink">{phase.title}</h3>
              <p className="mt-4 max-w-[58ch] text-[16px] leading-[1.65] text-ink-muted">{phase.intro}</p>
              {phase.bullets.length > 0 && (
                <ul className="mt-6 space-y-2">
                  {phase.bullets.map((bl) => (
                    <li key={bl} className="flex items-baseline gap-3 text-[15px] leading-[1.6] text-ink-muted">
                      <span className="text-ink-faint">•</span>
                      <span>{bl}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </Block>

      <Block kicker={b.compare.kicker}>
        <Headline>{b.compare.headline}</Headline>
        <div className="mt-14 space-y-24">
          {b.compare.pairs.map((pair, i) => (
            <article key={pair.finding}>
              <div className="grid grid-cols-1 gap-6 border-t border-line pt-6 md:grid-cols-[180px_1fr] md:gap-12">
                <p className="text-[13px] tracking-[0.14em] text-ink-faint uppercase">Finding {String(i + 1).padStart(2, "0")}</p>
                <div>
                  <h3 className="text-[20px] leading-[1.3] tracking-tight text-ink">{pair.finding}</h3>
                  <p className="mt-3 max-w-[58ch] text-[15px] leading-[1.6] text-ink-muted">{pair.fix}</p>
                </div>
              </div>
              <div className="mt-8 space-y-8">
                {pair.before ? (
                  <Figure shot={pair.before} label="Version 1 · 2020" />
                ) : (
                  <p className="rounded-md border border-dashed border-line px-4 py-3 text-[14px] text-ink-faint">
                    Version 1: this screen was never designed; intake was on paper.
                  </p>
                )}
                <div className={`grid grid-cols-1 gap-6 ${pair.after.length > 1 ? "md:grid-cols-2" : ""}`}>
                  {pair.after.map((s) => (
                    <Figure key={s.src} shot={s} label="Redesign · 2026" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Block>

      <Block kicker={b.decisions.kicker}>
        <ul className="grid grid-cols-1 gap-x-12 gap-y-2 md:grid-cols-2">
          {b.decisions.items.map((d) => (
            <li key={d.title} className="border-t border-line py-5">
              <p className="text-[16px] tracking-tight text-ink">{d.title}</p>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{d.why}</p>
            </li>
          ))}
        </ul>
      </Block>

      <Block kicker={b.flows.kicker}>
        <Headline>{b.flows.headline}</Headline>
        <div className="mt-14 space-y-24">
          {b.flows.items.map((flow) => (
            <article key={flow.title}>
              <h3 className="text-[22px] tracking-tight text-ink">{flow.title}</h3>
              <p className="mt-3 max-w-[58ch] text-[15px] leading-[1.6] text-ink-muted">{flow.desc}</p>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {flow.shots.map((s, i) => (
                  <Figure key={s.src} shot={s} className={flow.shots.length % 2 === 1 && i === flow.shots.length - 1 ? "md:col-span-2" : ""} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </Block>

      <Block kicker={b.system.kicker}>
        <Headline>{b.system.headline}</Headline>
        <Prose>
          <p>{b.system.body}</p>
        </Prose>
        <ul className="mt-6 max-w-[62ch] space-y-2">
          {b.system.bullets.map((x) => (
            <li key={x} className="flex items-baseline gap-3 text-[15px] leading-[1.6] text-ink-muted">
              <span className="text-ink-faint">•</span>
              <span>{x}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {b.system.shots.map((s) => (
            <Figure key={s.src} shot={s} />
          ))}
        </div>
        <a
          href={pmsLinks.storybook}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link} mt-10 border-line-strong text-ink hover:border-ink`}
        >
          Open the design system <Arrow />
        </a>
      </Block>

      <Block kicker={b.outcome.kicker}>
        <Headline>{b.outcome.headline}</Headline>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3">
          {b.outcome.facts.map((f) => (
            <div key={f.label} className="border-t border-line pt-5">
              <p className="text-[36px] leading-none tabular-nums tracking-tight text-ink sm:text-[44px]">{f.number}</p>
              <p className="mt-3 text-[13px] leading-[1.4] text-ink-muted">{f.label}</p>
            </div>
          ))}
        </div>
        <h3 className="mt-16 text-[18px] tracking-tight text-ink">{b.outcome.notDone.title}</h3>
        <ul className="mt-4 max-w-[62ch] space-y-2">
          {b.outcome.notDone.items.map((x) => (
            <li key={x} className="flex items-baseline gap-3 text-[15px] leading-[1.6] text-ink-muted">
              <span className="text-ink-faint">•</span>
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </Block>

      <Block kicker={b.lessons.kicker}>
        <div className="grid grid-cols-1 gap-x-12 gap-y-2 md:grid-cols-2">
          {b.lessons.blocks.map((l) => (
            <div key={l.title} className="border-t border-line py-6">
              <p className="text-[17px] tracking-tight text-ink">{l.title}</p>
              <p className="mt-3 text-[15px] leading-[1.6] text-ink-muted">{l.body}</p>
            </div>
          ))}
        </div>
      </Block>

      <section className="mt-24 border-t border-line pt-12">
        <h2 className="text-[26px] tracking-tight text-ink sm:text-[32px]">{b.cta.title}</h2>
        <p className="mt-3 text-[15px] text-ink-muted">{b.cta.sub}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {b.cta.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={`${link} border-line-strong text-ink hover:border-ink`}>
              {l.label} <Arrow />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

function Arrow() {
  return (
    <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
      ↗
    </span>
  );
}

function Block({ kicker, children }: { kicker: string; children: React.ReactNode }) {
  return (
    <section className="mt-24 md:mt-32">
      <p className="mb-8 text-[13px] tracking-[0.14em] text-ink-muted uppercase">{kicker}</p>
      {children}
    </section>
  );
}

function Headline({ children }: { children: React.ReactNode }) {
  return <h2 className="max-w-[26ch] text-[26px] leading-[1.2] tracking-tight text-ink sm:text-[32px]">{children}</h2>;
}

function Prose({ children }: { children: React.ReactNode }) {
  return <div className="mt-8 max-w-[62ch] space-y-4 text-[17px] leading-[1.65] text-ink-muted">{children}</div>;
}

/** A screenshot in a thin frame with a caption. Click opens the full-size image. */
function Figure({ shot, label, priority, className = "" }: { shot: Shot; label?: string; priority?: boolean; className?: string }) {
  return (
    <figure className={className}>
      {label && <p className="mb-3 text-[12px] tracking-[0.14em] text-ink-faint uppercase">{label}</p>}
      <a
        href={shot.src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${shot.caption} (open full size)`}
        className="block overflow-hidden rounded-md border border-line-strong transition-colors duration-200 hover:border-ink-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
      >
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          sizes="(min-width: 1024px) 900px, 100vw"
          priority={priority}
          className="h-auto w-full"
        />
      </a>
      <figcaption className="mt-3 text-[13px] leading-[1.5] text-ink-faint">{shot.caption}</figcaption>
    </figure>
  );
}

/** Inlines an SVG diagram so it follows the page text colour; scrolls sideways on narrow screens. */
function Diagram({ name, alt }: { name: string; alt: string }) {
  const svg = readFileSync(path.join(process.cwd(), "public", "case-pms", "diagrams", `${name}.svg`), "utf8")
    .replace(/ role="img" aria-label="[^"]*"/, ' aria-hidden="true"')
    .replace(/ width="\d+" height="\d+"/, ' class="h-auto w-full"');
  return (
    <div className="mt-10 overflow-x-auto rounded-md border border-line bg-paper-raised/40 p-4 sm:p-6" tabIndex={0} role="img" aria-label={alt}>
      <div className="min-w-[720px] text-ink" dangerouslySetInnerHTML={{ __html: svg }} />
    </div>
  );
}
