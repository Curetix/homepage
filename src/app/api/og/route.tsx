import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        position: "absolute",
        display: "flex",
        top: 0,
        height: "100%",
        width: "100%",
        padding: 8,
        backgroundImage: "linear-gradient(to bottom, #facc15, #db2777, #6d28d9)",
      }}>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 40,
          fontWeight: 600,
          backgroundColor: "white",
          gap: 10,
          borderRadius: 8,
        }}>
        <span
          style={{
            fontSize: 80,
          }}>
          Curetix
        </span>
        <span>Web Developer</span>
      </div>
    </div>,
    {
      width: 1200,
      height: 600,
    },
  );
}
