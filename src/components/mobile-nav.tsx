"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavItem = { label: string; href: string };

/** Burger menu for small screens: a full-width panel that drops below the header. */
export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="grid h-11 w-11 place-items-center rounded-full text-ink transition-colors duration-150 hover:bg-paper-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      >
        <span aria-hidden className="relative block h-3 w-5">
          <span className={`absolute left-0 h-px w-5 bg-current transition-transform duration-200 ease-out motion-reduce:transition-none ${open ? "top-1.5 rotate-45" : "top-0"}`} />
          <span className={`absolute left-0 h-px w-5 bg-current transition-transform duration-200 ease-out motion-reduce:transition-none ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
        </span>
      </button>

      <nav
        id="mobile-nav"
        aria-label="Main"
        className={`absolute inset-x-0 top-full border-b border-line bg-paper px-6 pt-2 pb-6 transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-2 opacity-0"
        }`}
      >
        <ul>
          {items.map((item) => (
            <li key={item.href} className="border-b border-line last:border-b-0">
              <Link href={item.href} onClick={() => setOpen(false)} className="block py-4 text-[20px] tracking-tight text-ink">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
