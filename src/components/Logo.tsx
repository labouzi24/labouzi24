import logoMark from "../assets/logo.png";
import { useTranslations } from "../i18n/I18nContext";

type LogoProps = {
  size?: "sm" | "lg";
  fixed?: boolean;
  className?: string;
};

export default function Logo({ size = "sm", fixed = true, className = "" }: LogoProps) {
  const t = useTranslations();
  const isLarge = size === "lg";

  return (
    <div
      className={[
        fixed ? "fixed top-4 right-4 z-30" : "",
        "flex items-center gap-2 select-none",
        className,
      ].join(" ")}
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
          className={[
            "font-extrabold tracking-tight text-white",
            isLarge ? "text-2xl" : "text-sm",
          ].join(" ")}
          dir="ltr"
        >
          {t.logo.word}
        </span>
        <span
          className={[
            "text-white/60",
            isLarge ? "text-sm" : "text-[10px]",
          ].join(" ")}
        >
          {t.logo.subtitle}
        </span>
      </div>
    </div>
  );
}
