import { Link } from "react-router-dom";
import { useTranslations } from "../i18n/I18nContext";

export default function SkipButton() {
  const t = useTranslations();

  return (
    <Link
      to="/choisir"
      className="fixed left-4 z-30 text-xs font-semibold text-white/50 transition-colors duration-200 hover:text-white"
      style={{ top: "calc(var(--beta-banner-h, 0px) + 1rem)" }}
    >
      {t.header.skip}
    </Link>
  );
}
