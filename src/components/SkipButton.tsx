import { Link } from "react-router-dom";
import { useTranslations } from "../i18n/I18nContext";

export default function SkipButton() {
  const t = useTranslations();

  return (
    // TODO: point this at the marketplace/brand-selection route once it exists.
    <Link
      to="#"
      className="fixed top-4 left-4 z-30 text-xs font-semibold text-white/50 transition-colors duration-200 hover:text-white"
    >
      {t.header.skip}
    </Link>
  );
}
