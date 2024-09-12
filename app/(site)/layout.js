import "../globals.css";
import FooterBottom from "@/components/Footer";
import { GlobalContextProvider } from "../context/GlobalContext";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import TranslationsProvider from "@/components/provider/translations-provider";
import { locales } from "@/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Rugby Klub 03 Berlin",
  description: "Größter Rugbyverein in Berlin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-neutral-950 min-h-screen overflow-hidden">
        <TranslationsProvider>
          <GlobalContextProvider>
            <Navbar />
            {children}
            <FooterBottom />
          </GlobalContextProvider>
        </TranslationsProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
