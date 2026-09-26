import Image from "next/image";
import { patronimBody as b, patronimLinks } from "@/content/case-patronim";
import type { Shot } from "@/content/case-pms";
import { CaseToc, type TocItem } from "@/components/case-toc";
import { Arrow, Block, Board, Lead, link } from "@/components/case-pms-body";

// Body of the Patronim case study. A mobile app, so screens are shown at phone scale in rows,
// never full-width; flows come from the Miro board.

const toc: TocItem[] = [
  { id: "overview", label: "Overview" },
  { id: "research", label: "Research" },
  { id: "define", label: "Define" },
  { id: "compare", label: "Before / after" },
  { id: "flows", label: "Key flows" },
  { id: "states", label: "Hard states" },
  { id: "system", label: "Design system" },
  { id: "outcome", label: "Outcome" },
  { id: "lessons", label: "Takeaways" },
];

export function PatronimBody() {
  return (
    <>
      <div className="-mt-6 mb-16 flex flex-wrap gap-3">
        <a href={patronimLinks.demo} target="_blank" rel="noopener noreferrer" className={`${link} border-ink bg-ink text-paper! hover:bg-transparent hover:text-ink!`}>
          Live demo <Arrow />
        </a>
        <a href={patronimLinks.storybook} target="_blank" rel="noopener noreferrer" className={`${link} border-line-strong text-ink hover:border-ink`}>
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
            <h3 className="mt-16 text-[13px] tracking-[0.14em] text-ink-faint uppercase">{b.users.headline}</h3>
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

          <Block kicker={b.audit.kicker} id="research">
            <Lead title={b.audit.headline}>
              <p>{b.audit.intro}</p>
            </Lead>
            <ol className="mt-10 grid grid-cols-1 gap-x-8 border-t border-line sm:grid-cols-2">
              {b.audit.findings.map((f, i) => (
                <li key={f.title} className="flex items-baseline gap-4 border-b border-line py-4">
                  <span className="text-[14px] tabular-nums text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[17px] tracking-tight text-ink">{f.title}</span>
                </li>
              ))}
            </ol>
          </Block>

          <Block kicker={b.define.kicker} id="define">
            <Lead title={b.define.idea.headline}>
              <p>{b.define.idea.body}</p>
            </Lead>
            <Phones shots={b.define.idea.shots} className="mt-10" />

            <Lead title={b.define.e2e.headline} className="mt-24">
              <p>{b.define.e2e.body}</p>
            </Lead>
            <Board board={b.define.e2e.board} wide />

            <Lead title={b.define.blueprint.headline} className="mt-24">
              <p>{b.define.blueprint.body}</p>
            </Lead>
            <ol className="mt-8 space-y-4 md:hidden">
              {b.define.blueprint.columns.slice(1).map((stage, c) => (
                <li key={stage} className="rounded-xl border border-line p-5">
                  <p className="text-[12px] tracking-[0.12em] text-ink-muted uppercase">
                    {String(c + 1).padStart(2, "0")} · {stage}
                  </p>
                  <dl className="mt-3 space-y-2.5 text-[14px] leading-[1.5]">
                    {b.define.blueprint.rows
                      .filter((row) => row[c + 1])
                      .map((row) => {
                        const answer = row[0] === "Redesign answer";
                        return (
                          <div key={row[0]} className={answer ? "-mx-2 rounded-md bg-paper-raised px-2 py-1.5" : ""}>
                            <dt className={`text-[12px] ${answer ? "text-accent" : "text-ink-faint"}`}>{row[0]}</dt>
                            <dd className={answer ? "text-ink" : "text-ink-muted"}>{row[c + 1]}</dd>
                          </div>
                        );
                      })}
                  </dl>
                </li>
              ))}
            </ol>
            <div className="mt-8 hidden overflow-x-auto md:block" tabIndex={0} role="region" aria-label="Service blueprint table">
              <table className="w-full min-w-[820px] border-collapse text-left text-[13px] leading-[1.45]">
                <thead>
                  <tr>
                    {b.define.blueprint.columns.map((c, i) => (
                      <th key={i} scope="col" className="border-b border-line-strong py-3 pr-4 text-[12px] font-normal tracking-[0.12em] text-ink-faint uppercase">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {b.define.blueprint.rows.map((row) => {
                    const answer = row[0] === "Redesign answer";
                    return (
                      <tr key={row[0]} className={`border-b border-line ${answer ? "bg-paper-raised/60" : ""}`}>
                        {row.map((cell, i) =>
                          i === 0 ? (
                            <th key={i} scope="row" className={`w-[150px] py-3 pr-4 align-top font-normal ${answer ? "text-accent" : "text-ink"}`}>
                              {cell}
                            </th>
                          ) : (
                            <td key={i} className={`py-3 pr-4 align-top ${answer ? "text-ink" : "text-ink-muted"}`}>
                              {cell}
                            </td>
                          ),
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Block>

          <Block kicker={b.compare.kicker} id="compare">
            <h2 className="max-w-[26ch] text-[26px] leading-[1.2] tracking-tight text-ink sm:text-[32px]">{b.compare.headline}</h2>
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
                  <div className={`${phoneRow} mt-8 md:grid-cols-3`}>
                    <Phone shot={pair.before} label="Version 1 · 2019" />
                    {pair.after.map((s, j) => (
                      <Phone key={s.src} shot={s} label={j === 0 ? "Redesign · 2026" : " "} />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Block>

          <Block kicker={b.flows.kicker} id="flows">
            <h2 className="max-w-[26ch] text-[26px] leading-[1.2] tracking-tight text-ink sm:text-[32px]">{b.flows.headline}</h2>
            <div className="mt-14 space-y-24">
              {b.flows.roles.map((r) => (
                <article key={r.role} className="border-t border-line pt-6">
                  <p className="text-[13px] tracking-[0.14em] text-ink-faint uppercase">{r.role}</p>
                  <h3 className="mt-2 text-[22px] tracking-tight text-ink">{r.title}</h3>
                  <p className="mt-3 max-w-[58ch] text-[15px] leading-[1.6] text-ink-muted">{r.desc}</p>
                  <a
                    href={r.flow}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-[14px] text-ink-muted! underline decoration-line-strong underline-offset-4 transition-colors duration-200 hover:text-ink! focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  >
                    See the {r.role.toLowerCase()} user flow <Arrow />
                  </a>
                  <Phones shots={r.shots} className="mt-8" />
                </article>
              ))}
            </div>
          </Block>

          <Block kicker={b.states.kicker} id="states">
            <h2 className="max-w-[26ch] text-[26px] leading-[1.2] tracking-tight text-ink sm:text-[32px]">{b.states.headline}</h2>
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
            <a href={patronimLinks.storybook} target="_blank" rel="noopener noreferrer" className={`${link} mt-10 border-line-strong text-ink hover:border-ink`}>
              Open the design system <Arrow />
            </a>
          </Block>

          <Block kicker={b.outcome.kicker} id="outcome">
            <h2 className="max-w-[26ch] text-[26px] leading-[1.2] tracking-tight text-ink sm:text-[32px]">{b.outcome.headline}</h2>
            <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3">
              {b.outcome.facts.map((f) => (
                <div key={f.label} className="border-t border-line pt-5">
                  <p className="text-[36px] leading-none tabular-nums tracking-tight text-ink sm:text-[44px]">{f.number}</p>
                  <p className="mt-3 text-[13px] leading-[1.4] text-ink-muted">{f.label}</p>
                </div>
              ))}
            </div>
            <figure className="mt-16 rounded-xl border border-line bg-paper-raised/60 p-6 sm:p-10">
              <span aria-hidden className="block text-[48px] leading-none text-accent">&ldquo;</span>
              <blockquote className="mt-2 max-w-[60ch] text-[19px] leading-[1.55] tracking-tight text-ink sm:text-[22px]">
                {b.outcome.review.quote}
              </blockquote>
              <figcaption className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[14px]">
                <span className="text-ink">{b.outcome.review.name}</span>
                <span className="text-ink-muted">{b.outcome.review.role}</span>
                <span className="text-ink-faint">· {b.outcome.review.note}</span>
              </figcaption>
            </figure>

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

          <Block kicker={b.lessons.kicker} id="lessons">
            <h2 className="max-w-[26ch] text-[26px] leading-[1.2] tracking-tight text-ink sm:text-[32px]">{b.lessons.headline}</h2>
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

/** A row of phone screens at phone scale: 2 per row on small screens, up to 4 on wide ones. */
// On phones, screens scroll sideways one by one instead of shrinking into a two-column grid.
const phoneRow =
  "-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] sm:-mx-10 sm:scroll-px-10 sm:px-10 md:mx-auto md:grid md:gap-6 md:overflow-visible md:px-0 md:pb-0";

function Phones({ shots, className = "", priority, dark }: { shots: Shot[]; className?: string; priority?: boolean; dark?: boolean }) {
  const cols = shots.length >= 4 ? "md:grid-cols-4" : "md:grid-cols-3";
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
