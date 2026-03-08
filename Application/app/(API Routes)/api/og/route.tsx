import { ImageResponse } from "next/og";
import { QrCode } from "@chakra-ui/react";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url") ?? "https://www.google.com";

  // Generate QR code as SVG string
  const svg = QrCode.toString();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
        }}
      // CRITICAL: dangerouslySetInnerHTML is not allowed
      // So we parse the SVG manually
      >
        {/* Render the SVG as JSX */}
        <div
          style={{ width: 300, height: 300 }}
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
