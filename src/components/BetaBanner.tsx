import { useEffect, useRef, useState } from "react";
import { useTranslations } from "../i18n/I18nContext";

const STORAGE_KEY = "mecasouk:betaBannerDismissed";

export default function BetaBanner() {
  const t = useTranslations();
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    try {
      setIsVisible(localStorage.getItem(STORAGE_KEY) !== "1");
    } catch {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const el = bannerRef.current;
    if (!isVisible || !el) {
      document.documentElement.style.setProperty("--beta-banner-h", "0px");
      return;
    }

    const updateHeight = () => {
      document.documentElement.style.setProperty("--beta-banner-h", `${el.offsetHeight}px`);
    };
    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, [isVisible]);

  useEffect(() => {
    return () => {
      document.documentElement.style.setProperty("--beta-banner-h", "0px");
    };
  }, []);

  if (!isVisible) return null;

  function handleClose() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignore storage failures (private mode, quota); banner still hides for this view.
    }
    setIsVisible(false);
  }

  return (
    <div
      ref={bannerRef}
      dir="rtl"
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-center gap-3 border-b border-amber-500/25 bg-amber-950/95 px-4 py-2 text-center"
    >
      <p className="text-[11px] leading-snug text-amber-200 sm:text-xs">{t.betaBanner.text}</p>
      <button
        type="button"
        onClick={handleClose}
        aria-label={t.betaBanner.close}
        className="flex h-11 w-11 shrink-0 items-center justify-center text-amber-200/70 transition-colors hover:text-amber-100"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
