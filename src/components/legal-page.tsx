/** Plain reading layout for the Impressum and Datenschutzerklärung. */
export function LegalPage({ title, updated, children }: { title: string; updated?: string; children: React.ReactNode }) {
  return (
    <article className="mx-auto max-w-[720px] px-6 pt-20 pb-24 sm:px-10">
      <h1 className="text-[40px] leading-[1.05] tracking-[-0.02em] text-ink sm:text-[52px]">{title}</h1>
      {updated && <p className="mt-4 text-[13px] text-ink-faint">{updated}</p>}
      <div className="mt-14 space-y-12 text-[16px] leading-[1.7] text-ink-muted [&_a]:text-ink [&_a]:underline [&_a]:decoration-line-strong [&_a]:underline-offset-4 [&_a:hover]:decoration-ink [&_h2]:mb-4 [&_h2]:text-[20px] [&_h2]:leading-[1.3] [&_h2]:tracking-tight [&_h2]:text-ink [&_li]:mt-1 [&_p+p]:mt-4 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
        {children}
      </div>
    </article>
  );
}
