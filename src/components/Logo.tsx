import { useEffect, useRef, useState } from "react";
import logoMark from "../assets/logo.png";
import { useAuth } from "../context/AuthContext";
import { useTranslations } from "../i18n/I18nContext";

type LogoProps = {
  size?: "sm" | "lg";
  fixed?: boolean;
  className?: string;
};

export default function Logo({ size = "sm", fixed = true, className = "" }: LogoProps) {
  const t = useTranslations();
  const auth = useAuth();
  const isLarge = size === "lg";
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const menuItems = [
    { label: t.header.myAccount, onClick: () => console.log("حسابي: لم يُفعَّل بعد") },
    { label: t.header.myOrders, onClick: () => console.log("طلباتي ومشترياتي: لم يُفعَّل بعد") },
    { label: t.header.login, onClick: () => auth.login() },
  ];

  return (
    <div
      ref={containerRef}
      className={[fixed ? "fixed top-4 right-4 z-30" : "relative", "select-none", className].join(" ")}
    >
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className="flex min-h-11 items-center gap-2 rounded-lg"
      >
        <div
          className={[
            "overflow-hidden rounded-lg shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
            isLarge ? "h-16 w-16 rounded-2xl" : "h-8 w-8",
          ].join(" ")}
        >
          <img src={logoMark} alt={t.logo.word} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col items-start leading-tight">
          <span
            className={["font-extrabold tracking-tight text-white", isLarge ? "text-2xl" : "text-sm"].join(" ")}
            dir="ltr"
          >
            {t.logo.word}
          </span>
          <span className={["text-white/60", isLarge ? "text-sm" : "text-[10px]"].join(" ")}>
            {t.logo.subtitle}
          </span>
        </div>
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute top-full mt-2 w-56 overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0D] py-1 shadow-2xl"
          style={fixed ? { insetInlineEnd: 0 } : { insetInlineStart: 0 }}
        >
          {menuItems.map((item) => (
            <button
              key={item.label}
              type="button"
              role="menuitem"
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
              className="flex h-11 w-full items-center px-4 text-right text-sm font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
