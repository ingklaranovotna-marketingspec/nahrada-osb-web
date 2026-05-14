import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Náhrada OSB desek – JSD P5 a HSD P7";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1a6b3a",
          padding: "64px 80px",
          justifyContent: "space-between",
        }}
      >
        {/* Top: board stripes decoration */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                height: 8,
                width: 120 + i * 40,
                backgroundColor: "rgba(255,255,255,0.25)",
                borderRadius: 4,
              }}
            />
          ))}
        </div>

        {/* Center content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              backgroundColor: "rgba(255,255,255,0.15)",
              borderRadius: 12,
              padding: "10px 24px",
              width: "fit-content",
            }}
          >
            <span style={{ color: "#86efac", fontSize: 22, fontWeight: 700 }}>
              ↓ Až o 20 % levnější než OSB
            </span>
          </div>

          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-2px",
            }}
          >
            Náhrada OSB desek
          </div>

          <div style={{ fontSize: 36, color: "#bbf7d0", fontWeight: 500 }}>
            Konstrukční desky JSD P5 a HSD P7
          </div>
        </div>

        {/* Bottom: domain + tagline */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ color: "#86efac", fontSize: 18, fontWeight: 600 }}>
              Výrobce DDL Lukavec · Distributor Kili s.r.o.
            </span>
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: "#ffffff",
              backgroundColor: "rgba(255,255,255,0.15)",
              borderRadius: 10,
              padding: "8px 20px",
            }}
          >
            nahradaosb.cz
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
