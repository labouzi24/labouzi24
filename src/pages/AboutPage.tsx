import { useState } from "react";
import type { FormEvent } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslations } from "../i18n/I18nContext";

const CONTACT_EMAIL = "mecasouk@gmail.com";

const inputClass =
  "h-12 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 6.5l8.5 6 8.5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-brand" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 12.5l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AboutPage() {
  const t = useTranslations();
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <div dir="rtl" className="min-h-dvh w-full bg-[#0B0B0D] font-['Cairo',sans-serif] text-white">
      <Header />
      <div className="mx-auto flex max-w-2xl flex-col gap-16 px-6 pb-24 pt-24 sm:px-10">
        <section className="text-center">
          <span className="text-sm font-semibold text-brand">{t.about.eyebrow}</span>
          <h1 className="mt-3 text-2xl font-extrabold leading-snug text-white sm:text-4xl">
            {t.about.aboutTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
            {t.about.aboutBody}
          </p>
        </section>

        <section id="contact" className="scroll-mt-24">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">{t.about.contactTitle}</h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/60">
              {t.about.contactIntro}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              dir="ltr"
              className="mt-4 inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white transition-colors hover:border-brand hover:text-brand"
            >
              <MailIcon />
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <CheckCircleIcon />
                <p className="text-base font-bold text-white">{t.about.formSuccess}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-right">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-xs text-white/60">
                      {t.about.formName}
                    </label>
                    <input id="contact-name" type="text" required className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-xs text-white/60">
                      {t.about.formEmail}
                    </label>
                    <input id="contact-email" type="email" required dir="ltr" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="mb-1.5 block text-xs text-white/60">
                    {t.about.formSubject}
                  </label>
                  <input id="contact-subject" type="text" required className={inputClass} />
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-xs text-white/60">
                    {t.about.formMessage}
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 flex h-12 items-center justify-center rounded-full bg-brand text-sm font-bold text-white transition-transform duration-200 hover:scale-[1.02] sm:text-base"
                >
                  {t.about.formSubmit}
                </button>
              </form>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
