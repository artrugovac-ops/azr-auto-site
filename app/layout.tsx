import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AZR Auto Group | Fort Worth, TX",
  description:
    "Cars that run. Deals that make sense. Budget-friendly cash cars and dependable daily drivers in Fort Worth, TX — no runarounds, no hidden fees.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
