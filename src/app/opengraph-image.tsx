import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Dimension — Diogo Vieira Monteiro";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{
        width: "100%", height: "100%", display: "flex", flexDirection: "column",
        justifyContent: "space-between", padding: 80, background: "#0e0e10", color: "#ececea",
        fontFamily: "Helvetica, Arial, sans-serif",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 56, height: 56, borderRadius: 12, background: "#c8f031", color: "#111113",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40, fontWeight: 700 }}>D</div>
          <span style={{ fontSize: 30, letterSpacing: 2, textTransform: "uppercase" }}>Dimension</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 68, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>Diogo Vieira Monteiro</span>
          <span style={{ fontSize: 30, color: "#9b9ba3", marginTop: 20 }}>Engenheiro informático · software &amp; web</span>
        </div>
      </div>
    ),
    size,
  );
}
