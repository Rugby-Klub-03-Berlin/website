import "../../globals.css";
import FooterBottom from "@/components/Footer";
import { GlobalContextProvider } from "../../context/GlobalContext";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata = {
  title: "Rugby Klub 03 Berlin",
  description: "Größter Rugbyverein in Berlin",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="relative bg-neutral-950 min-h-screen overflow-hidden">
        <NextIntlClientProvider messages={messages}>
          <GlobalContextProvider>
            <Navbar />
            {children}
            <FooterBottom />
          </GlobalContextProvider>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
