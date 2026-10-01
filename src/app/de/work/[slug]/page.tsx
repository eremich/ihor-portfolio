import type { Metadata } from "next";
import { CasePage, caseMetadata, caseStaticParams } from "@/components/case-page";
import { SiteChrome } from "@/components/site-chrome";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return caseMetadata((await params).slug, "de");
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return (
    <SiteChrome lang="de">
      <CasePage slug={slug} lang="de" />
    </SiteChrome>
  );
}
