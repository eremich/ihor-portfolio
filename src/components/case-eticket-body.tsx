import Image from "next/image";
import { eticketBody as b, eticketLinks } from "@/content/case-eticket";
import type { Shot } from "@/content/case-pms";
import { CaseToc, type TocItem } from "@/components/case-toc";
import { Arrow, Block, Lead, link } from "@/components/case-pms-body";

// Body of the Eticket case study. A mobile app, so screens are shown at phone scale in rows,
// never full-width; flows are rendered from the Miro board and the 2020 slides are shown as they were.

const toc: TocItem[] = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The problem" },
  { id: "research", label: "Research" },
  { id: "goals", label: "Goals" },
  { id: "flows", label: "Flows" },
  { id: "compare", label: "Before / after" },
  { id: "decisions", label: "Key decisions" },
  { id: "states", label: "Hard states" },
  { id: "system", label: "Design system" },
  { id: "outcome", label: "Outcome" },
  { id: "lessons", label: "Takeaways" },
];

const h2 = "max-w-[26ch] text-[26px] leading-[1.2] tracking-tight text-ink sm:text-[32px]";
const h3 = "text-[13px] tracking-[0.14em] text-ink-faint uppercase";
const outline =
  "inline-flex items-center gap-1.5 text-[14px] text-ink-muted! underline decoration-line-strong underline-offset-4 transition-colors duration-200 hover:text-ink! focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export function EticketBody() {
  return (
    <>
      <div className="-mt-6 mb-16 flex flex-wrap gap-3">
        <a href={eticketLinks.demo} target="_blank" rel="noopener noreferrer" className={`${link} border-ink bg-ink text-paper! hover:bg-transparent hover:text-ink!`}>
          Live demo <Arrow />
        </a>
        <a href={eticketLinks.storybook} target="_blank" rel="noopener noreferrer" className={`${link} border-line-strong text-ink hover:border-ink`}>
          Design system <Arrow />
        </a>
      </div>

      <div className="rounded-2xl border border-line bg-paper-raised/60 px-4 py-8 sm:px-10 sm:py-12">
        <Phones shots={b.cover} priority />
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-4">
        {b.highlights.map((f) => (
          <div key={f.label} className="flex flex-col-reverse justify-end gap-2 bg-paper p-5">
            <dt className="text-[13px] leading-[1.4] text-ink-muted">{f.label}</dt>
            <dd className="text-[32px] leading-none tabular-nums tracking-tight text-accent">{f.number}</dd>
          </div>
        ))}
      </dl>

      <div className="lg:grid lg:grid-cols-[160px_minmax(0,1fr)] lg:gap-16">
        <CaseToc items={toc} />
        <div>
          <Block kicker={b.overview.kicker} id="overview">
            <Lead title={b.overview.headline}>
              {b.overview.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Lead>
            <h3 className={`mt-16 ${h3}`}>{b.users.headline}</h3>
            <ul className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
              {b.users.personas.map((p) => (
                <li key={p.name} className="border-t border-line pt-6">
                  <p className="text-[18px] tracking-tight text-ink">{p.name}</p>
                  <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{p.context}</p>
                  <p className="mt-4 text-[15px] leading-[1.6] text-ink-muted">{p.need}</p>
                </li>
              ))}
            </ul>
          </Block>

          <Block kicker={b.problem.kicker} id="problem">
            <h2 className={h2}>{b.problem.headline}</h2>
            <h3 className={`mt-12 ${h3}`}>{b.problem.riderTitle}</h3>
            <ol className="mt-6 grid grid-cols-1 gap-x-8 border-t border-line sm:grid-cols-2">
              {b.problem.riders.map((r, i) => (
                <li key={r.title} className="flex items-baseline gap-4 border-b border-line py-4">
                  <span className="text-[14px] tabular-nums text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-[17px] tracking-tight text-ink">{r.title}</span>
                    <span className="mt-1 block text-[14px] leading-[1.55] text-ink-muted">{r.desc}</span>
                  </span>
                </li>
              ))}
            </ol>
            <h3 className={`mt-16 ${h3}`}>{b.problem.auditTitle}</h3>
            <ol className="mt-6 grid grid-cols-1 gap-x-8 border-t border-line sm:grid-cols-2">
              {b.problem.findings.map((f, i) => (
                <li key={f.title} className="flex items-baseline gap-4 border-b border-line py-4">
                  <span className="text-[14px] tabular-nums text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-[17px] tracking-tight text-ink">{f.title}</span>
                    <span className="mt-1 block text-[14px] leading-[1.55] text-ink-muted">{f.desc}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Block>

          <Block kicker={b.research.kicker} id="research">
            <Lead title={b.research.headline}>
              <p>{b.research.intro}</p>
            </Lead>

            <h3 className={`mt-16 ${h3}`}>{b.research.quotesTitle}</h3>
            <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {b.research.quotes.map((q) => (
                <li key={q.text} className="rounded-xl border border-line bg-paper-raised/60 p-6">
                  <figure>
                    <span aria-hidden className="block text-[40px] leading-none text-accent">&ldquo;</span>
                    <blockquote className="mt-1 text-[17px] leading-[1.5] tracking-tight text-ink">{q.text}</blockquote>
                    <figcaption className="mt-4 text-[13px] text-ink-faint">Kharkiv rider, 2020 interview</figcaption>
                  </figure>
                </li>
              ))}
            </ul>

            <h3 className={`mt-16 ${h3}`}>{b.research.journey.title}</h3>
            <ol className="mt-6 space-y-4 md:hidden">
              {b.research.journey.columns.slice(1).map((stage, c) => (
                <li key={stage} className="rounded-xl border border-line p-5">
                  <p className="text-[12px] tracking-[0.12em] text-ink-muted uppercase">
                    {String(c + 1).padStart(2, "0")} · {stage}
                  </p>
                  <dl className="mt-3 space-y-2.5 text-[14px] leading-[1.5]">
                    {b.research.journey.rows.map((row) => (
                      <div key={row[0]}>
                        <dt className="text-[12px] text-ink-faint">{row[0]}</dt>
                        <dd className="text-ink-muted">{row[c + 1]}</dd>
                      </div>
                    ))}
                  </dl>
                </li>
              ))}
            </ol>
            <div className="mt-6 hidden overflow-x-auto md:block" tabIndex={0} role="region" aria-label="Customer journey table">
              <table className="w-full min-w-[820px] border-collapse text-left text-[13px] leading-[1.45]">
                <thead>
                  <tr>
                    {b.research.journey.columns.map((c, i) => (
                      <th key={i} scope="col" className="border-b border-line-strong py-3 pr-4 text-[12px] font-normal tracking-[0.12em] text-ink-faint uppercase">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {b.research.journey.rows.map((row) => (
                    <tr key={row[0]} className="border-b border-line">
                      {row.map((cell, i) =>
                        i === 0 ? (
                          <th key={i} scope="row" className="w-[90px] py-3 pr-4 align-top font-normal text-ink">
                            {cell}
                          </th>
                        ) : (
                          <td key={i} className="py-3 pr-4 align-top text-ink-muted">
                            {cell}
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_240px] md:gap-16">
              <div>
                <h3 className={h3}>{b.research.whoTitle}</h3>
                <ul className="mt-6 space-y-3">
                  {b.research.who.map((x) => (
                    <li key={x} className="flex items-baseline gap-3 text-[15px] leading-[1.6] text-ink-muted">
                      <span className="text-ink-faint">•</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-line pt-5">
                <p className="text-[44px] leading-none tabular-nums tracking-tight text-accent">{b.research.stat.number}</p>
                <p className="mt-3 text-[13px] leading-[1.4] text-ink-muted">{b.research.stat.label}</p>
              </div>
            </div>
            <p className="mt-10 max-w-[70ch] text-[15px] leading-[1.65] text-ink-muted">{b.research.priority}</p>

            <h3 className={`mt-16 ${h3}`}>{b.research.slidesTitle}</h3>
            <div className="mt-6 space-y-8">
              {b.research.slides.map((s) => (
                <figure key={s.src}>
                  <a
                    href={s.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.caption} (open full size)`}
                    className="block overflow-hidden rounded-xl border border-line bg-paper-raised transition-colors duration-200 hover:border-line-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                  >
                    <Image src={s.src} alt={s.alt} width={s.width} height={s.height} sizes="(min-width: 1024px) 860px, 100vw" className="h-auto w-full" />
                  </a>
                  <figcaption className="mt-3 text-[13px] leading-[1.45] text-ink-faint">{s.caption}</figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-10 max-w-[70ch] text-[15px] leading-[1.65] text-ink-muted">{b.research.closing}</p>
          </Block>

          <Block kicker={b.goals.kicker} id="goals">
            <h2 className={h2}>{b.goals.headline}</h2>
            <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
              <GoalList title={b.goals.riderTitle} items={b.goals.riders} />
              <GoalList title={b.goals.cityTitle} items={b.goals.city} />
            </div>
            <h3 className={`mt-16 ${h3}`}>{b.goals.targetsTitle}</h3>
            <dl className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {b.goals.targets.map((t) => (
                <div key={t.metric} className="border-t border-line pt-5">
                  <dt className="text-[14px] leading-[1.45] text-ink">{t.metric}</dt>
                  <dd className="mt-2 text-[13px] leading-[1.4] text-ink-muted">{t.target}</dd>
                </div>
              ))}
            </dl>

            <h3 className={`mt-16 ${h3}`}>{b.principles.headline}</h3>
            <ol className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {b.principles.items.map((p, i) => (
                <li key={p.title} className="flex flex-col rounded-xl border border-line bg-paper-raised/60 p-6">
                  <span className="text-[13px] tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-5 text-[18px] leading-[1.25] tracking-tight text-ink">{p.title}</p>
                  <p className="mt-3 text-[14px] leading-[1.6] text-ink-muted">{p.desc}</p>
                </li>
              ))}
            </ol>
          </Block>

          <Block kicker={b.flows.kicker} id="flows">
            <Lead title={b.flows.headline}>
              <p>{b.flows.body}</p>
            </Lead>
            <a href={eticketLinks.miro} target="_blank" rel="noopener noreferrer" className={`group mt-6 ${outline}`}>
              Open the Miro board <Arrow />
            </a>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {b.flows.items.map((f) => (
                <figure key={f.src} className={f.wide ? "md:col-span-2" : undefined}>
                  <a
                    href={f.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${f.title} (open full size)`}
                    className="block overflow-hidden rounded-xl border border-line bg-white p-3 transition-colors duration-200 hover:border-line-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:p-4"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element -- diagram export; keep it pixel-crisp, no resampling */}
                    <img src={f.src} alt={f.alt} width={f.width} height={f.height} loading="lazy" className="h-auto w-full" />
                  </a>
                  <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-[13px] leading-[1.45] text-ink-faint">
                    <span>{f.title}</span>
                    <a href={eticketLinks.miro} target="_blank" rel="noopener noreferrer" className={`group shrink-0 ${outline}`}>
                      Miro <Arrow />
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Block>

          <Block kicker={b.compare.kicker} id="compare">
            <h2 className={h2}>{b.compare.headline}</h2>
            <div className="mt-14 space-y-24">
              {b.compare.pairs.map((pair, i) => (
                <article key={pair.finding}>
                  <div className="grid grid-cols-1 gap-6 border-t border-line pt-6 md:grid-cols-[180px_1fr] md:gap-12">
                    <p className={h3}>Finding {String(i + 1).padStart(2, "0")}</p>
                    <div>
                      <h3 className="text-[20px] leading-[1.3] tracking-tight text-ink">{pair.finding}</h3>
                      <p className="mt-3 max-w-[58ch] text-[15px] leading-[1.6] text-ink-muted">{pair.fix}</p>
                    </div>
                  </div>
                  <div className={`${phoneRow} mt-8 md:grid-cols-3`}>
                    <Phone shot={pair.before} label="Version 1 · 2020" />
                    {pair.after.map((s, j) => (
                      <Phone key={s.src} shot={s} label={j === 0 ? "Redesign · 2026" : " "} />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Block>

          <Block kicker={b.commute.kicker} id="decisions">
            <Lead title={b.commute.headline}>
              <p>{b.commute.body}</p>
            </Lead>
            <Phones shots={b.commute.shots} className="mt-10" />

            <h3 className={`mt-24 ${h3}`}>{b.decisions.headline}</h3>
            <ol className="mt-6 grid grid-cols-1 gap-x-8 border-t border-line md:grid-cols-2">
              {b.decisions.items.map((d, i) => (
                <li key={d.title} className="flex items-baseline gap-4 border-b border-line py-4">
                  <span className="text-[14px] tabular-nums text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-[17px] tracking-tight text-ink">{d.title}</span>
                    <span className="mt-1 block text-[14px] leading-[1.55] text-ink-muted">{d.desc}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Block>

          <Block kicker={b.states.kicker} id="states">
            <h2 className={h2}>{b.states.headline}</h2>
            <Phones shots={b.states.shots} className="mt-10" />
          </Block>

          <Block kicker={b.system.kicker} id="system">
            <Lead title={b.system.headline}>
              <p>{b.system.body}</p>
            </Lead>
            <ul className="mt-8 grid max-w-[62ch] grid-cols-1 gap-2">
              {b.system.bullets.map((x) => (
                <li key={x} className="flex items-baseline gap-3 text-[15px] leading-[1.6] text-ink-muted">
                  <span className="text-ink-faint">•</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 overflow-hidden rounded-2xl bg-[#111214] px-6 py-8 sm:px-10">
              <Phones shots={b.system.shots} dark />
            </div>
            <a href={eticketLinks.storybook} target="_blank" rel="noopener noreferrer" className={`${link} mt-10 border-line-strong text-ink hover:border-ink`}>
              Open the design system <Arrow />
            </a>
          </Block>

          <Block kicker={b.outcome.kicker} id="outcome">
            <h2 className={h2}>{b.outcome.headline}</h2>
            <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3">
              {b.outcome.facts.map((f) => (
                <div key={f.label} className="border-t border-line pt-5">
                  <p className="text-[32px] leading-none tabular-nums tracking-tight text-ink sm:text-[40px]">{f.number}</p>
                  <p className="mt-3 text-[13px] leading-[1.4] text-ink-muted">{f.label}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block kicker={b.lessons.kicker} id="lessons">
            <h2 className={h2}>{b.lessons.headline}</h2>
            <ol className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              {b.lessons.blocks.map((l, i) => (
                <li key={l.title} className="flex flex-col rounded-xl border border-line bg-paper-raised/60 p-6">
                  <span className="text-[32px] leading-none tabular-nums tracking-tight text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-6 text-[19px] leading-[1.25] tracking-tight text-ink">{l.title}</p>
                  <p className="mt-3 text-[15px] leading-[1.6] text-ink-muted">{l.body}</p>
                </li>
              ))}
            </ol>
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
        </div>
      </div>
    </>
  );
}

function GoalList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className={h3}>{title}</h3>
      <ol className="mt-6 border-t border-line">
        {items.map((x, i) => (
          <li key={x} className="flex items-baseline gap-4 border-b border-line py-3.5 text-[15px] leading-[1.55] text-ink">
            <span className="text-[13px] tabular-nums text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
            <span>{x}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

// On phones, screens scroll sideways one by one instead of shrinking into a two-column grid.
const phoneRow =
  "-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] sm:-mx-10 sm:scroll-px-10 sm:px-10 md:mx-auto md:grid md:gap-6 md:overflow-visible md:px-0 md:pb-0";

/** A row of phone screens at phone scale: 3 to 5 per row on wide screens. */
function Phones({ shots, className = "", priority, dark }: { shots: Shot[]; className?: string; priority?: boolean; dark?: boolean }) {
  const cols = shots.length === 5 ? "md:grid-cols-5" : shots.length === 6 ? "md:grid-cols-3" : shots.length >= 4 ? "md:grid-cols-4" : "md:grid-cols-3";
  return (
    <div className={`${phoneRow} max-w-[980px] ${cols} ${className}`}>
      {shots.map((s) => (
        <Phone key={s.src} shot={s} priority={priority} dark={dark} />
      ))}
    </div>
  );
}

/** One phone screen in a rounded frame with a caption; opens full size on click. */
function Phone({ shot, label, priority, dark }: { shot: Shot; label?: string; priority?: boolean; dark?: boolean }) {
  return (
    <figure className="w-[68%] shrink-0 snap-start sm:w-[40%] md:w-auto">
      {label && <p className="mb-3 min-h-[18px] text-[12px] tracking-[0.14em] text-ink-faint uppercase">{label}</p>}
      <a
        href={shot.src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${shot.caption} (open full size)`}
        className="block overflow-hidden rounded-[22px] border border-line-strong transition-colors duration-200 hover:border-ink-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:rounded-[28px]"
      >
        <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} sizes="(min-width: 1024px) 260px, 45vw" priority={priority} className="h-auto w-full" />
      </a>
      <figcaption className={`mt-3 text-[13px] leading-[1.45] ${dark ? "text-[#9a9a9a]" : "text-ink-faint"}`}>{shot.caption}</figcaption>
    </figure>
  );
}
