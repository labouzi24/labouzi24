import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslations } from "../i18n/I18nContext";

export default function LegalPage() {
  const t = useTranslations();
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab") === "privacy" ? "privacy" : "terms";

  const sections = tab === "terms" ? t.legal.termsSections : t.legal.privacySections;

  return (
    <div dir="rtl" className="min-h-dvh w-full bg-[#0B0B0D] font-['Cairo',sans-serif] text-white">
      <Header />
      <div className="mx-auto flex max-w-2xl flex-col gap-8 px-6 pb-24 pt-24 sm:px-10">
        <div className="text-center">
          <span className="text-sm font-semibold text-brand">{t.legal.eyebrow}</span>
          <h1 className="mt-3 text-2xl font-extrabold leading-snug text-white sm:text-4xl">
            {t.legal.headline}
          </h1>
        </div>

        <div className="flex justify-center gap-2">
          <button
            type="button"
            onClick={() => setSearchParams({ tab: "terms" })}
            className={[
              "flex h-11 items-center rounded-full border px-5 text-sm font-semibold transition-colors",
              tab === "terms"
                ? "border-brand bg-brand/10 text-brand"
                : "border-white/15 text-white/60 hover:border-white/30",
            ].join(" ")}
          >
            {t.legal.tabTerms}
          </button>
          <button
            type="button"
            onClick={() => setSearchParams({ tab: "privacy" })}
            className={[
              "flex h-11 items-center rounded-full border px-5 text-sm font-semibold transition-colors",
              tab === "privacy"
                ? "border-brand bg-brand/10 text-brand"
                : "border-white/15 text-white/60 hover:border-white/30",
            ].join(" ")}
          >
            {t.legal.tabPrivacy}
          </button>
        </div>

        <div className="flex flex-col gap-6 text-right">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-base font-bold text-white sm:text-lg">{section.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">{section.body}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
