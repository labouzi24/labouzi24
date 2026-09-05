import { Link } from "react-router-dom";
import { formatMessage, useTranslations } from "../i18n/I18nContext";

export default function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  const links = [
    { label: t.footer.about, to: "/a-propos" },
    { label: t.footer.contact, to: "/a-propos#contact" },
    { label: t.footer.becomeVendor, to: "/devenir-vendeur" },
    { label: t.footer.terms, to: "/legal?tab=terms" },
    { label: t.footer.privacy, to: "/legal?tab=privacy" },
  ];

  return (
    <footer className="border-t border-white/10 bg-black px-6 py-8 sm:px-10">
      <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-white/60">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="flex h-11 items-center px-3 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <p className="mt-2 text-center text-xs text-white/30">
        {formatMessage(t.footer.copyright, { year })}
      </p>
    </footer>
  );
}
