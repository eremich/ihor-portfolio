import { ogCard, ogSize } from "@/lib/og";
import { siteCopy } from "@/lib/site";

export const size = ogSize;
export const contentType = "image/png";
export const alt = siteCopy.de.title;

export default function Image() {
  return ogCard({ kicker: "Product Designer · Berlin", headline: siteCopy.de.ogHeadline, footer: "SaaS · KI · Designsysteme" });
}
