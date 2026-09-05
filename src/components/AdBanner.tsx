import { useTranslations } from "../i18n/I18nContext";

/** Responsive leaderboard-style ad slot. Swap the inner content for a real ad unit later. */
export default function AdBanner() {
  const t = useTranslations();

  return (
    <div className="mx-auto flex h-[50px] w-full max-w-3xl items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/[0.03] text-xs text-white/30 sm:h-[90px] sm:text-sm">
      {t.ad.placeholder}
    </div>
  );
}
