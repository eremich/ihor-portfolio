import Image from "next/image";
import { concepts } from "@/content/concepts";
import { ui, type Lang } from "@/i18n";

export function ConceptGrid({ lang }: { lang: Lang }) {
  const t = ui[lang];
  return (
    <section aria-labelledby="concepts-heading">
      <div className="mb-10 flex items-baseline justify-between border-b border-line pb-3">
        <h2 id="concepts-heading" className="text-[12px] font-medium tracking-[0.14em] text-ink-muted uppercase">
          {t.conceptsHeading}
        </h2>
        <span className="text-[12px] tabular-nums text-ink-faint">{String(concepts.length).padStart(2, "0")}</span>
      </div>

      <ul className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        {concepts.map((c, i) => {
          // An odd one out takes the full row, so the grid never ends on a gap.
          const fullRow = concepts.length % 2 === 1 && i === concepts.length - 1;
          return (
            <li key={c.slug} className={fullRow ? "md:col-span-2" : undefined}>
              <a
                href={c.url}
                target="_blank"
                rel="noopener"
                data-umami-event="concept-click"
                data-umami-event-concept={c.slug}
                data-umami-event-lang={lang}
                className="group block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-ink"
              >
                <div className="overflow-hidden rounded-lg border border-line bg-paper-raised">
                  <Image
                    src={c.image}
                    alt={c.imageAlt[lang]}
                    width={1600}
                    height={1000}
                    sizes={fullRow ? "(min-width: 1200px) 1120px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
                    className="aspect-[16/10] h-auto w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.02] motion-reduce:transition-none"
                  />
                </div>

                <div className="mt-6 flex items-baseline justify-between gap-6">
                  <h3 className="flex items-baseline gap-3 text-[26px] leading-tight tracking-tight text-ink sm:text-[32px]">
                    {c.title}
                    <span
                      aria-hidden
                      className="text-[18px] text-ink-muted transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink sm:text-[22px]"
                    >
                      ↗
                    </span>
                  </h3>
                  <span className="text-[14px] tabular-nums text-ink-faint">{c.year}</span>
                </div>

                <p className="mt-3 max-w-[62ch] text-[16px] leading-[1.6] text-ink-muted">{c.summary[lang]}</p>

                <ul className="mt-5 flex flex-wrap gap-2 text-[12px] text-ink-muted">
                  <li className="rounded-full border border-line-strong px-3 py-1 text-ink">{t.unofficialConcept}</li>
                  {c.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-line px-3 py-1">
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className="sr-only"> {t.opensNewTab}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
