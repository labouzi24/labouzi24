import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import AdBanner from "../components/AdBanner";
import AIChatButton from "../components/AIChatButton";
import Breadcrumb from "../components/Breadcrumb";
import { brands, modelsByBrand } from "../data/mockData";
import { formatMessage, useTranslations } from "../i18n/I18nContext";

const STORAGE_KEY = "mecasouk:lastSelection";

type SavedSelection = { brand: string; model: string };

function readSavedSelection(): SavedSelection | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed?.brand === "string" && typeof parsed?.model === "string") {
      return { brand: parsed.brand, model: parsed.model };
    }
    return null;
  } catch {
    return null;
  }
}

function CarPlateIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 13l1.5-5.5A2 2 0 0 1 6.4 6h11.2a2 2 0 0 1 1.9 1.5L21 13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="2.5" y="13" width="19" height="4.5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="7" cy="17.5" r="1.3" fill="currentColor" />
      <circle cx="17" cy="17.5" r="1.3" fill="currentColor" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 20l-4.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function ChooseBrandPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const t = useTranslations();

  const [query, setQuery] = useState("");
  const [selectedBrandId, setSelectedBrandId] = useState<string | null>(() => {
    const brandName = searchParams.get("brand");
    return brands.find((b) => b.name === brandName)?.id ?? null;
  });
  const [savedSelection, setSavedSelection] = useState<SavedSelection | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setSavedSelection(readSavedSelection());
  }, []);

  const filteredBrands = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return brands;
    return brands.filter((b) => b.name.toLowerCase().includes(q));
  }, [query]);

  const selectedBrand = brands.find((b) => b.id === selectedBrandId) ?? null;
  const models = selectedBrand ? modelsByBrand[selectedBrand.id] ?? [] : [];

  function goToOffers(brandName: string, modelName: string) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ brand: brandName, model: modelName }));
    setIsNavigating(true);
    window.setTimeout(() => {
      navigate(`/offres?brand=${encodeURIComponent(brandName)}&model=${encodeURIComponent(modelName)}`);
    }, 700);
  }

  function handleSearchSubmit() {
    const value = query.trim();
    if (!value) return;
    // Placeholder heuristic: a query containing a digit is treated as a
    // reference/OEM number and skips brand/model selection entirely.
    if (/\d/.test(value)) {
      navigate(`/offres?ref=${encodeURIComponent(value)}`);
    }
  }

  const breadcrumbItems = [
    { label: t.choose.breadcrumbHome, to: "/" },
    selectedBrand
      ? { label: t.choose.breadcrumbChooseBrand, to: "/choisir" }
      : { label: t.choose.breadcrumbChooseBrand },
    ...(selectedBrand ? [{ label: selectedBrand.name }] : []),
  ];

  return (
    <div dir="rtl" className="min-h-dvh w-full bg-[#0B0B0D] font-['Cairo',sans-serif] text-white">
      <Header />
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 pb-32 pt-24 sm:px-10">
        <Breadcrumb items={breadcrumbItems} />
        <AdBanner />

        {savedSelection && (
          <button
            type="button"
            onClick={() => goToOffers(savedSelection.brand, savedSelection.model)}
            className="flex min-h-11 w-full items-center justify-between rounded-2xl border border-brand/40 bg-brand/10 px-5 py-3 text-right text-sm font-semibold text-white transition-colors hover:border-brand sm:text-base"
          >
            <span>{formatMessage(t.choose.continueFrom, savedSelection)}</span>
            <span aria-hidden="true">←</span>
          </button>
        )}

        <div>
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") handleSearchSubmit();
              }}
              placeholder={t.choose.searchPlaceholder}
              className="h-12 w-full rounded-full border border-white/15 bg-white/5 py-2 pr-5 pl-14 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none sm:h-14 sm:text-base"
            />
            <button
              type="button"
              onClick={handleSearchSubmit}
              aria-label="بحث"
              className="absolute left-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white sm:h-11 sm:w-11"
            >
              <SearchIcon />
            </button>
          </div>
          <p className="mt-2 text-xs text-white/40">{t.choose.searchHint}</p>
        </div>

        {isNavigating ? (
          <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
            <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-brand" />
            <p className="text-sm text-white/60">{t.choose.loadingOffers}</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {filteredBrands.map((brand) => {
                const isActive = brand.id === selectedBrandId;
                return (
                  <button
                    key={brand.id}
                    type="button"
                    onClick={() => setSelectedBrandId(brand.id)}
                    className={[
                      "flex h-16 items-center justify-between overflow-hidden rounded-lg border-2 bg-white/5 pr-4 transition-colors sm:h-20",
                      isActive ? "border-brand" : "border-white/15 hover:border-white/30",
                    ].join(" ")}
                  >
                    <span
                      dir="ltr"
                      className="truncate text-sm font-extrabold uppercase tracking-wide text-white sm:text-base"
                    >
                      {brand.name}
                    </span>
                    <span className="flex h-full items-center bg-brand px-3 text-white">
                      <CarPlateIcon className="h-5 w-5" />
                    </span>
                  </button>
                );
              })}
              {filteredBrands.length === 0 && (
                <p className="col-span-full py-10 text-center text-sm text-white/40">{t.choose.noResults}</p>
              )}
            </div>

            {selectedBrand && (
              <div>
                <h2 className="mb-3 text-base font-bold text-white sm:text-lg">
                  {formatMessage(t.choose.modelsTitle, { brand: selectedBrand.name })}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {models.map((model) => (
                    <button
                      key={model}
                      type="button"
                      onClick={() => goToOffers(selectedBrand.name, model)}
                      className="flex h-11 items-center rounded-full border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white transition-colors hover:border-brand hover:text-brand"
                    >
                      {model}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <AIChatButton />
    </div>
  );
}
