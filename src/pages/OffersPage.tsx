import { useMemo } from "react";
import type { ReactElement } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import AdBanner from "../components/AdBanner";
import AIChatButton from "../components/AIChatButton";
import Breadcrumb from "../components/Breadcrumb";
import { offers, type PartType } from "../data/mockData";
import { formatMessage, useTranslations } from "../i18n/I18nContext";

function BrakeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 3.5v3M20.5 12h-3M12 20.5v-3M3.5 12h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function FilterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 4h16l-6 8v6l-4 2v-8L4 4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function BatteryIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="7" width="16" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M19 10v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 10v4M12 10v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const PART_ICONS: Record<PartType, (props: { className?: string }) => ReactElement> = {
  brake: BrakeIcon,
  filter: FilterIcon,
  battery: BatteryIcon,
};

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-brand" fill="currentColor" aria-hidden="true">
      <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.1 1.1 5.9L10 14.7l-5.3 2.9 1.1-5.9-4.3-4.1 5.9-.7L10 1.5z" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function OffersPage() {
  const [searchParams] = useSearchParams();
  const t = useTranslations();

  const brand = searchParams.get("brand") ?? "";
  const model = searchParams.get("model") ?? "";
  const ref = searchParams.get("ref") ?? "";

  const sortedOffers = useMemo(() => [...offers].sort((a, b) => a.price - b.price), []);

  const breadcrumbItems = brand && model
    ? [
        { label: t.choose.breadcrumbHome, to: "/" },
        { label: t.choose.breadcrumbChooseBrand, to: "/choisir" },
        { label: brand, to: `/choisir?brand=${encodeURIComponent(brand)}` },
        { label: model },
        { label: t.offers.breadcrumbOffers },
      ]
    : [
        { label: t.choose.breadcrumbHome, to: "/" },
        { label: t.choose.breadcrumbChooseBrand, to: "/choisir" },
        { label: t.offers.breadcrumbOffers },
      ];

  return (
    <div dir="rtl" className="min-h-dvh w-full bg-[#0B0B0D] font-['Cairo',sans-serif] text-white">
      <Header />
      <div className="mx-auto flex max-w-2xl flex-col gap-6 px-6 pb-32 pt-24 sm:px-10">
        <Breadcrumb items={breadcrumbItems} />
        <AdBanner />

        {ref && (
          <p className="text-sm text-white/60">{formatMessage(t.offers.referenceResultTitle, { ref })}</p>
        )}

        <p className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs leading-relaxed text-white/50 sm:text-sm">
          {t.offers.disclaimer}
        </p>

        <div className="flex flex-col gap-4">
          {sortedOffers.map((offer) => {
            const Icon = PART_ICONS[offer.partType];
            return (
              <div
                key={offer.id}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white/5 text-brand sm:h-20 sm:w-20">
                  <Icon className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <div className="flex flex-1 flex-col gap-1 text-right">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
                    <span className="font-bold text-white">{offer.vendorName}</span>
                    <span className="font-extrabold text-brand">{offer.price} ر.س</span>
                  </div>
                  <span className="text-xs text-white/40">
                    {t.offers.referenceLabel}: {offer.referenceNumber}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-white/60">
                    <span className="flex items-center gap-1">
                      <StarIcon />
                      {offer.rating}
                    </span>
                    <span>{offer.delivery}</span>
                  </div>
                  {brand && model && (
                    <span className="text-xs text-white/50">
                      {formatMessage(t.offers.compatibleWith, { brand, model, years: offer.yearRange })}
                    </span>
                  )}
                  <a
                    href="#"
                    className="mt-2 flex h-11 items-center justify-center rounded-full bg-brand px-4 text-sm font-bold text-white transition-transform duration-200 hover:scale-[1.02]"
                  >
                    {t.offers.contactVendor}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="fixed bottom-6 right-4 z-30 sm:right-6">
        <Link
          to="/choisir"
          className="flex h-11 items-center gap-2 rounded-full border border-white/20 bg-black/80 px-5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-brand hover:text-brand"
        >
          <BackIcon />
          {t.offers.backToBrands}
        </Link>
      </div>

      <AIChatButton />
    </div>
  );
}
