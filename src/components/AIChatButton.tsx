import { useState } from "react";
import { useTranslations } from "../i18n/I18nContext";

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M4 5h16v10H8l-4 4V5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="10" r="1" fill="currentColor" />
      <circle cx="12.5" cy="10" r="1" fill="currentColor" />
      <circle cx="16" cy="10" r="1" fill="currentColor" />
    </svg>
  );
}

export default function AIChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 left-4 z-40 w-72 max-w-[calc(100vw-2rem)] rounded-2xl border border-white/10 bg-[#0B0B0D] p-4 shadow-2xl sm:left-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-bold text-white">{t.aiAssistant.label}</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="إغلاق"
              className="flex h-6 w-6 items-center justify-center text-white/50 transition-colors hover:text-white"
            >
              ×
            </button>
          </div>
          <p className="text-sm leading-relaxed text-white/60">{t.aiAssistant.comingSoon}</p>
        </div>
      )}
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-label={t.aiAssistant.label}
        aria-expanded={isOpen}
        className="fixed bottom-6 left-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-[0_0_30px_rgba(30,95,255,0.4)] transition-transform duration-200 hover:scale-105 sm:left-6"
      >
        <ChatIcon />
      </button>
    </>
  );
}
