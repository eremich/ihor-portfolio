import { ogCard, ogSize } from "@/lib/og";
import { siteCopy } from "@/lib/site";

export const size = ogSize;
export const contentType = "image/png";
export const alt = siteCopy.en.title;

export default function Image() {
  return ogCard({ kicker: "Product Designer · Berlin", headline: siteCopy.en.ogHeadline, footer: "SaaS · AI · Design systems" });
}
