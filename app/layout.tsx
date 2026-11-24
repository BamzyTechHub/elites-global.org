import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://elites-global.org"),
  title: "Elites Global | Digital Experiences That Move Business Forward",
  description:
    "Elites Global designs and develops thoughtful websites and digital experiences that help ambitious businesses build credibility, connect with customers and grow.",
  openGraph: {
    title: "Elites Global",
    description: "We build digital experiences that move businesses forward.",
    url: "https://elites-global.org",
    siteName: "Elites Global",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}