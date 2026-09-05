function SearchConfusionIcon() {
  return (
    <svg viewBox="0 0 200 200" className="h-40 w-40 sm:h-56 sm:w-56" aria-hidden="true">
      <circle cx="100" cy="100" r="96" fill="none" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1.5" />
      <g stroke="#1E5FFF" strokeWidth="3" strokeLinecap="round">
        <circle cx="85" cy="85" r="30" fill="none" />
        <line x1="107" y1="107" x2="135" y2="135" />
      </g>
      <g fill="#ffffff" fillOpacity="0.5">
        <circle cx="150" cy="50" r="4" />
        <circle cx="40" cy="140" r="4" />
        <circle cx="160" cy="120" r="3" />
        <circle cx="50" cy="55" r="3" />
      </g>
      <text x="70" y="90" fontSize="20" fill="#ffffff" fillOpacity="0.35">؟</text>
    </svg>
  );
}

export default function Slide2Problem() {
  return (
    <div className="h-full w-full overflow-y-auto bg-black">
      <div className="flex min-h-full flex-col items-center justify-center gap-10 px-6 pt-16 pb-24 sm:flex-row sm:gap-16 sm:px-20 sm:py-0">
        <div className="max-w-lg text-center sm:text-right">
          <span className="text-sm font-semibold text-brand">المشكلة</span>
          <h2 className="mt-3 text-2xl font-extrabold leading-snug text-white sm:text-4xl">
            إيجاد القطعة الصحيحة أصبح مضيعة للوقت
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
            البحث عن قطعة الغيار المتوافقة مع سيارتك غالبًا ما يكون بطيئًا ومربكًا،
            بين عشرات البائعين المتفرقين ومصادر غير موثوقة، دون طريقة سهلة للمقارنة
            والتأكد من التوافق.
          </p>
        </div>
        <div className="flex shrink-0 items-center justify-center">
          <SearchConfusionIcon />
        </div>
      </div>
    </div>
  );
}
