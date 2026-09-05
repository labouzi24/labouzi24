import { vendors } from "../data/mockData";
import { useTranslations } from "../i18n/I18nContext";

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 text-brand" fill="currentColor" aria-hidden="true">
      <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.1 1.1 5.9L10 14.7l-5.3 2.9 1.1-5.9-4.3-4.1 5.9-.7L10 1.5z" />
    </svg>
  );
}

export default function Slide4Vendors() {
  const t = useTranslations();

  return (
    <div className="h-full w-full overflow-y-auto bg-black">
      <div className="flex min-h-full flex-col items-center justify-center px-6 py-16 sm:px-16">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold text-brand">{t.slide4.eyebrow}</span>
          <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-4xl">{t.slide4.headline}</h2>
        </div>

        <div className="grid w-full max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {vendors.map((vendor) => (
            <div
              key={vendor.name}
              className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-right sm:gap-3 sm:p-5"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand sm:h-10 sm:w-10 sm:text-sm">
                  {vendor.name.charAt(0)}
                </div>
                <span className="text-xs font-bold text-white sm:text-sm">{vendor.name}</span>
              </div>
              <div className="flex items-center justify-between text-[10px] text-white/60 sm:text-xs">
                <span className="flex items-center gap-1">
                  <StarIcon />
                  {vendor.rating}
                </span>
                <span>{vendor.delivery}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
