import { useState } from "react";
import type { FormEvent } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslations } from "../i18n/I18nContext";

function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-brand" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 12.5l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const inputClass =
  "h-12 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none";

export default function VendorPage() {
  const t = useTranslations();
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  const benefits = [
    { title: t.vendor.benefit1Title, body: t.vendor.benefit1Body },
    { title: t.vendor.benefit2Title, body: t.vendor.benefit2Body },
    { title: t.vendor.benefit3Title, body: t.vendor.benefit3Body },
  ];

  return (
    <div dir="rtl" className="min-h-dvh w-full bg-[#0B0B0D] font-['Cairo',sans-serif] text-white">
      <Header />
      <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 pb-24 pt-[calc(var(--beta-banner-h,0px)+6rem)] sm:px-10">
        <div className="text-center">
          <span className="text-sm font-semibold text-brand">{t.vendor.eyebrow}</span>
          <h1 className="mt-3 text-2xl font-extrabold leading-snug text-white sm:text-4xl">
            {t.vendor.headline}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
            {t.vendor.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-right"
            >
              <h3 className="text-sm font-bold text-white sm:text-base">{benefit.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/60 sm:text-sm">{benefit.body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          {isSubmitted ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <CheckCircleIcon />
              <p className="text-base font-bold text-white">{t.vendor.successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-right">
              <h2 className="text-lg font-bold text-white">{t.vendor.formTitle}</h2>

              <div>
                <label htmlFor="vendor-name" className="mb-1.5 block text-xs text-white/60">
                  {t.vendor.fullName}
                </label>
                <input id="vendor-name" type="text" required className={inputClass} />
              </div>

              <div>
                <label htmlFor="vendor-shop" className="mb-1.5 block text-xs text-white/60">
                  {t.vendor.shopName}
                </label>
                <input id="vendor-shop" type="text" required className={inputClass} />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="vendor-phone" className="mb-1.5 block text-xs text-white/60">
                    {t.vendor.phone}
                  </label>
                  <input id="vendor-phone" type="tel" required dir="ltr" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="vendor-city" className="mb-1.5 block text-xs text-white/60">
                    {t.vendor.city}
                  </label>
                  <input id="vendor-city" type="text" required className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="vendor-type" className="mb-1.5 block text-xs text-white/60">
                  {t.vendor.businessType}
                </label>
                <select id="vendor-type" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    —
                  </option>
                  <option value="shop">{t.offers.sellerTypes.shop}</option>
                  <option value="workshop">{t.offers.sellerTypes.workshop}</option>
                  <option value="online">{t.offers.sellerTypes.online}</option>
                </select>
              </div>

              <button
                type="submit"
                className="mt-2 flex h-12 items-center justify-center rounded-full bg-brand text-sm font-bold text-white transition-transform duration-200 hover:scale-[1.02] sm:text-base"
              >
                {t.vendor.submit}
              </button>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
