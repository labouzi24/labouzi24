import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import ar from "./locales/ar.json";

// Add new locale files here (e.g. en.json, fr.json) and register them below —
// no component changes are needed once a locale's JSON exists.
const locales = { ar } as const;

export type Locale = keyof typeof locales;
export type Translations = typeof ar;

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  children,
  defaultLocale = "ar",
}: {
  children: ReactNode;
  defaultLocale?: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  const value = useMemo<I18nContextValue>(
    () => ({ locale, setLocale, t: locales[locale] }),
    [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslations(): Translations {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslations must be used within an I18nProvider");
  return ctx.t;
}

export function useLocale() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useLocale must be used within an I18nProvider");
  return { locale: ctx.locale, setLocale: ctx.setLocale };
}

/** Replaces `{key}` placeholders in a translation string, e.g. "{index}" -> "3". */
export function formatMessage(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => (key in vars ? String(vars[key]) : match));
}
