"use client";

import { I18nextProvider } from "next-intl";
import i18n from "@/i18n";

export default function TranslationsProvider({ children }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
