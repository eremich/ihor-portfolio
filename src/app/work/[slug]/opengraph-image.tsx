import { caseOgImage, caseStaticParams } from "@/components/case-page";
import { ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Case study — Ihor Yeromich";

export function generateStaticParams() {
  return caseStaticParams();
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  return caseOgImage((await params).slug, "en");
}
