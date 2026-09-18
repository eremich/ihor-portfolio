import Link from "next/link";

const navItems = [
  { label: "Case studies", href: "/#case-studies" },
  { label: "About me", href: "/#about" },
  { label: "Contacts", href: "/#contacts" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-paper/70 backdrop-blur-xl supports-[backdrop-filter]:bg-paper/60">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-6 py-4 sm:px-10">
        <Link
          href="/"
          className="text-[15px] tracking-tight text-ink transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-ink-muted"
        >
          Ihor Yeromich
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-[13px] text-ink-muted transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-white/[0.04] hover:text-ink sm:px-4 sm:text-[14px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
