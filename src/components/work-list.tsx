import Link from "next/link";
import { cases, listedCases, localizeCase } from "@/content/cases";
import { localePath, ui, type Lang } from "@/i18n";

export function WorkList({ lang }: { lang: Lang }) {
  const t = ui[lang];
  return (
    <section aria-labelledby="work-heading">
      <div className="mb-2 flex items-baseline justify-between border-b border-line pb-3">
        <h2
          id="work-heading"
          className="text-[12px] font-medium tracking-[0.14em] text-ink-muted uppercase"
        >
          {t.casesHeading}
        </h2>
        <span className="text-[12px] tabular-nums text-ink-faint">
          {String(cases.length).padStart(2, "0")}
        </span>
      </div>

      <ul>
        {listedCases.map((item) => localizeCase(item, lang)).map((c) =>
          c.draft ? (
            <li key={c.slug} className="border-b border-line">
              <div
                aria-label={`${c.title}, ${t.comingSoon.toLowerCase()}`}
                className="-mx-4 grid grid-cols-[1fr_auto] items-baseline gap-4 px-4 py-6 sm:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1.2fr)_11rem] sm:gap-10 sm:py-7"
              >
                <span className="text-[26px] leading-tight tracking-tight text-ink-muted sm:text-[32px]">{c.title}</span>
                <span className="hidden min-w-0 sm:block">
                  <span className="block truncate text-[14px] text-ink-muted">{c.company}</span>
                  {c.location && <span className="mt-1 block truncate text-[13px] text-ink-faint">{c.location}</span>}
                </span>
                <span className="hidden truncate text-[14px] text-ink-muted sm:block">{c.role}</span>
                <span className="justify-self-end rounded-full border border-line px-3 py-1 text-[12px] whitespace-nowrap text-ink-muted">
                  {t.comingSoon}
                </span>
              </div>
            </li>
          ) : (
          <li key={c.slug} className="border-b border-line">
            <Link
              href={localePath(lang, `/work/${c.slug}`)}
              data-umami-event="case-click"
              data-umami-event-case={c.slug}
              data-umami-event-lang={lang}
              className="group relative -mx-4 grid grid-cols-[1fr_auto] items-baseline gap-4 rounded-md px-4 py-6 transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-white/[0.03] sm:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1.2fr)_11rem] sm:gap-10 sm:py-7"
            >
              <span className="flex flex-wrap items-baseline gap-x-3 text-[26px] leading-tight tracking-tight text-ink sm:text-[32px]">
                <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-1.5">
                  {c.title}
                </span>
                <span
                  aria-hidden
                  className="translate-x-[-6px] text-[18px] text-ink-muted opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0 group-hover:opacity-100 sm:text-[22px]"
                >
                  →
                </span>
                {c.location && <span className="basis-full pt-1 text-[13px] tracking-normal text-ink-faint sm:hidden">{c.location}</span>}
              </span>
              <span className="hidden min-w-0 sm:block">
                <span className="block truncate text-[14px] text-ink-muted transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-ink">
                  {c.company}
                </span>
                {c.location && <span className="mt-1 block truncate text-[13px] text-ink-faint">{c.location}</span>}
              </span>
              <span className="hidden truncate text-[14px] text-ink-muted transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-ink sm:block">
                {c.role}
              </span>
              <span className="text-right text-[14px] tabular-nums text-ink-faint transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-ink">
                {c.year}
              </span>
            </Link>
          </li>
          ),
        )}
      </ul>
    </section>
  );
}
