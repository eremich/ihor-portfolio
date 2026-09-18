export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 w-full border-t border-line">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-6 py-8 text-[13px] text-ink-faint sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>© {year} Ihor Yeromich</p>
        <p>Built in Berlin — Next.js, Tailwind</p>
      </div>
    </footer>
  );
}
