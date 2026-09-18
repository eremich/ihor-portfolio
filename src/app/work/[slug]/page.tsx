import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cases, getCase } from "@/content/cases";
import { Placeholder } from "@/components/placeholder";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return { title: "Case not found" };
  return {
    title: `${c.title} — Ihor Yeromich`,
    description: c.summary,
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  return (
    <article className="mx-auto max-w-[880px] px-6 pt-16 pb-24 sm:px-10">
      <Link
        href="/#case-studies"
        className="mb-16 inline-block text-[14px] text-ink-muted transition-colors hover:text-ink"
      >
        ← Back to case studies
      </Link>

      <header className="mb-16 border-b border-line pb-12">
        <p className="mb-6 text-[13px] tracking-[0.14em] text-ink-muted uppercase">
          {c.tags.join(" · ")}
        </p>
        <h1 className="text-[40px] leading-[1.05] tracking-[-0.02em] text-ink sm:text-[56px]">
          {c.title}
        </h1>
        <p className="mt-8 max-w-[52ch] text-[18px] leading-[1.6] text-ink-muted">
          {c.summary}
        </p>

        <dl className="mt-12 grid grid-cols-2 gap-y-4 text-[14px] sm:grid-cols-3">
          <div>
            <dt className="text-ink-faint">Role</dt>
            <dd className="mt-1 text-ink">{c.role}</dd>
          </div>
          <div>
            <dt className="text-ink-faint">Company</dt>
            <dd className="mt-1 text-ink">{c.company}</dd>
          </div>
          <div>
            <dt className="text-ink-faint">Year</dt>
            <dd className="mt-1 tabular-nums text-ink">{c.year}</dd>
          </div>
        </dl>
      </header>

      <Section title="Overview">
        <p>
          A short paragraph describing the product, who it is for, and where in
          its lifecycle the work happened. Placeholder copy — replace when the
          case is written up.
        </p>
      </Section>

      <Placeholder label="Hero image" ratio="wide" />

      <Section title="Problem">
        <p>
          What was broken, unclear, or missing when the project started. What
          the team needed to change and why it was worth doing. Placeholder
          copy.
        </p>
      </Section>

      <Section title="Approach">
        <p>
          The moves that shaped the outcome — research, structure, prototypes,
          the choices that were made and the ones that were let go. Placeholder
          copy.
        </p>
      </Section>

      <Placeholder label="Process artifact" ratio="wide" />

      <Section title="Outcome">
        <p>
          What shipped, how it landed, and what changed for the people using it.
          Numbers when they exist, honesty when they don&rsquo;t. Placeholder
          copy.
        </p>
      </Section>

      <Placeholder label="Final screen" ratio="wide" />

      <div className="mt-24 border-t border-line pt-10">
        <Link
          href="/#case-studies"
          className="text-[14px] text-ink-muted transition-colors hover:text-ink"
        >
          ← Back to case studies
        </Link>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="my-12">
      <h2 className="mb-4 text-[13px] tracking-[0.14em] text-ink-muted uppercase">
        {title}
      </h2>
      <div className="max-w-[60ch] text-[17px] leading-[1.65] text-ink">
        {children}
      </div>
    </section>
  );
}
