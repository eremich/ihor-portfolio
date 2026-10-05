import Link from "next/link";
import { LangSwitch } from "@/components/lang-switch";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { localePath, ui, type Lang } from "@/i18n";

export function SiteHeader({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const navItems = [
    { label: t.nav.cases, href: localePath(lang, "/#case-studies") },
    { label: t.nav.concepts, href: localePath(lang, "/#concepts") },
    { label: t.nav.about, href: localePath(lang, "/#about") },
    { label: t.nav.contacts, href: localePath(lang, "/#contacts") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-paper/70 backdrop-blur-xl supports-[backdrop-filter]:bg-paper/60">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-6 py-4 sm:px-10">
        <Link
          href={localePath(lang, "/")}
          className="text-[15px] tracking-tight text-ink transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-ink-muted"
        >
          Ihor Yeromich
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav aria-label={t.navLabel} className="hidden items-center gap-2 sm:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-1.5 text-[14px] text-ink-muted transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-paper-raised hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LangSwitch lang={lang} />
          <ThemeToggle labels={{ toLight: t.toLight, toDark: t.toDark }} />
          <MobileNav items={navItems} labels={{ open: t.openMenu, close: t.closeMenu, nav: t.navLabel }} />
        </div>
      </div>
    </header>
  );
}
