import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kalkulator Pensiun Dini",
  description: "kalkulator pensiun dini, hitung pensinsun dinimu sekarang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="night">
      <SpeedInsights />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
