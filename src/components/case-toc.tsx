"use client";

import { useEffect, useState } from "react";

export type TocItem = { id: string; label: string };

/** Sticky "Story" navigation for long case studies; highlights the section in view. Desktop only. */
export function CaseToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    // A section counts as current once its top passes the upper third of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActive(visible[visible.length - 1].target.id);
      },
      { rootMargin: "-30% 0px -65% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className="hidden lg:block">
      <nav aria-label="Case study sections" className="sticky top-28 mt-24 md:mt-32">
        <p className="mb-4 text-[12px] tracking-[0.14em] text-ink-faint uppercase">Story</p>
        <ul className="space-y-1 border-l border-line">
          {items.map((item) => {
            const current = item.id === active;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={current ? "location" : undefined}
                  className={`-ml-px flex items-center gap-2 border-l py-1.5 pl-4 text-[13px] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                    current ? "border-accent text-ink!" : "border-transparent text-ink-muted! hover:text-ink!"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
