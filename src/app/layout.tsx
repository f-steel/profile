import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  title: "Fraser Steel - Full Stack Developer",
  description:
    "Personal profile and portfolio of Fraser Steel, a passionate Full Stack Developer specializing in modern web technologies.",
  keywords: [
    "Full Stack Developer",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Fraser Steel" }],
  creator: "Fraser Steel",
  openGraph: {
    title: "Fraser Steel - Full Stack Developer",
    description:
      "Personal profile and portfolio of Fraser Steel, a passionate Full Stack Developer specializing in modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }}>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
