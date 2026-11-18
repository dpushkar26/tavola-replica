import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TavolaServe — Restaurant Management & Operations Platform",
  description:
    "All-in-one restaurant management platform: QR code digital ordering, live kitchen display screens (KDS), table turnover, billing, POS & real-time analytics for modern restaurants.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-sans h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
