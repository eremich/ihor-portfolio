"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { langs, switchLangPath, ui, type Lang } from "@/i18n";
import { track } from "@/lib/analytics";

const names: Record<Lang, string> = { en: "English", de: "Deutsch" };

// Matches the indicator transition; navigation waits for the slide to finish.
const SLIDE_MS = 200;

/** EN · DE switch. A pill slides to the chosen language, then the same page opens in it; the hash is kept. */
export function LangSwitch({ lang }: { lang: Lang }) {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const [selected, setSelected] = useState<Lang>(lang);

  // Warm the other language's page so it swaps in instantly after the slide.
  useEffect(() => {
    langs.filter((l) => l !== lang).forEach((l) => router.prefetch(switchLangPath(pathname, l)));
  }, [lang, pathname, router]);

  function go(e: React.MouseEvent, to: Lang) {
    // Let new-tab / modified clicks behave like normal links.
    if (to === lang || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    setSelected(to);
    track("lang-switch", { to, page: pathname });
    const href = switchLangPath(pathname, to) + window.location.hash;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => {
      document.documentElement.lang = to;
      if (window.location.hash) window.location.assign(href);
      else router.push(href);
    }, reduce ? 0 : SLIDE_MS);
  }

  const index = langs.indexOf(selected);

  return (
    <nav aria-label={ui[lang].language} className="relative flex h-8 items-center rounded-full border border-line p-0.5">
      <span
        aria-hidden
        className="absolute top-0.5 bottom-0.5 left-0.5 w-9 rounded-full bg-paper-raised transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none"
        style={{ transform: `translateX(${index * 100}%)` }}
      />
      {langs.map((l) => {
        const active = l === selected;
        return (
          <Link
            key={l}
            href={switchLangPath(pathname, l)}
            hrefLang={l}
            lang={l}
            aria-label={names[l]}
            aria-current={l === lang ? "true" : undefined}
            onClick={(e) => go(e, l)}
            className={`relative z-10 grid h-full w-9 place-items-center rounded-full text-[12px] tracking-[0.06em] uppercase transition-[color,transform] duration-200 ease-out active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink motion-reduce:transition-colors ${
              active ? "text-ink" : "text-ink-muted hover:text-ink"
            }`}
          >
            {l}
          </Link>
        );
      })}
    </nav>
  );
}
