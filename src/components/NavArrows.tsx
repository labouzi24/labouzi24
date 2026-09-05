import { useTranslations } from "../i18n/I18nContext";

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type NavArrowsProps = {
  isFirst: boolean;
  isLast: boolean;
  onNext: () => void;
  onPrev: () => void;
};

// Hidden below sm: on phones the dots and swipe/keyboard cover navigation,
// which keeps the arrows from ever overlapping slide content at narrow widths.
const arrowClass =
  "fixed top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-brand sm:flex";

export default function NavArrows({ isFirst, isLast, onNext, onPrev }: NavArrowsProps) {
  const t = useTranslations();

  return (
    <>
      {!isLast && (
        <button type="button" aria-label={t.nav.next} onClick={onNext} className={[arrowClass, "left-4"].join(" ")}>
          <ChevronLeftIcon />
        </button>
      )}
      {!isFirst && (
        <button type="button" aria-label={t.nav.prev} onClick={onPrev} className={[arrowClass, "right-4"].join(" ")}>
          <ChevronRightIcon />
        </button>
      )}
    </>
  );
}
