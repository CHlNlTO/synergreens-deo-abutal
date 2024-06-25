import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MarketingBanner from "@/components/MarketingBanner";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rodeo Abutal | Synergreens International",
  description: "Synergreens International Affiliate Marketing Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <MarketingBanner />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
