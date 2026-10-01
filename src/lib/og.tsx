import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

// Matches the site's dark paper and ink; social previews show this card.
const PAPER = "#0f0f11";
const INK = "#fafafa";
const MUTED = "#9a9a9a";
const LINE = "rgba(255,255,255,0.12)";
const ACCENT = "#34d158";

/** Social preview card: a small kicker, a large headline and the author line. */
export function ogCard({ kicker, headline, footer }: { kicker: string; headline: string; footer: string }) {
  const size = headline.length > 70 ? 60 : headline.length > 45 ? 70 : 80;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: PAPER,
          color: INK,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, letterSpacing: 3, color: MUTED, textTransform: "uppercase" }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, background: ACCENT }} />
          {kicker}
        </div>
        <div style={{ display: "block", fontSize: size, lineHeight: 1.06, letterSpacing: -2, maxWidth: 1000, textWrap: "balance" }}>{headline}</div>
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: `1px solid ${LINE}`, paddingTop: 28, fontSize: 26, color: MUTED }}>
          <span style={{ color: INK }}>Ihor Yeromich</span>
          <span>{footer}</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
