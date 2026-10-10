import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dimension.pt";
const marca = "Dimension";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: { default: `${marca} — Diogo Vieira Monteiro`, template: `%s | ${marca}` },
  description: "Diogo Vieira Monteiro — engenheiro informático. Desenvolvimento de software, web e soluções à medida.",
  openGraph: { siteName: marca, locale: "pt_PT", type: "website", url: site },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-[100dvh] font-sans antialiased">{children}</body>
    </html>
  );
}
