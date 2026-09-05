type Vendor = {
  name: string;
  rating: string;
  delivery: string;
};

const VENDORS: Vendor[] = [
  { name: "مؤسسة الخليج لقطع الغيار", rating: "٤.٨", delivery: "توصيل خلال يوم" },
  { name: "متجر الأمانة للسيارات", rating: "٤.٦", delivery: "توصيل خلال يومين" },
  { name: "معرض النخبة لقطع الغيار", rating: "٤.٩", delivery: "توصيل خلال يوم" },
  { name: "بيت القطعة الأصلية", rating: "٤.٧", delivery: "توصيل خلال ٣ أيام" },
  { name: "الوفاء لقطع غيار السيارات", rating: "٤.٥", delivery: "توصيل خلال يومين" },
  { name: "متجر السرعة", rating: "٤.٨", delivery: "توصيل خلال يوم" },
];

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 text-brand" fill="currentColor" aria-hidden="true">
      <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.1 1.1 5.9L10 14.7l-5.3 2.9 1.1-5.9-4.3-4.1 5.9-.7L10 1.5z" />
    </svg>
  );
}

export default function Slide4Vendors() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-black px-6 py-16 sm:px-16">
      <div className="mb-10 text-center">
        <span className="text-sm font-semibold text-brand">شبكة البائعين</span>
        <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-4xl">
          بائعون موثوقون، أسعار متنافسة
        </h2>
      </div>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
        {VENDORS.map((vendor) => (
          <div
            key={vendor.name}
            className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-right"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-sm font-bold text-brand">
                {vendor.name.charAt(0)}
              </div>
              <span className="text-sm font-bold text-white">{vendor.name}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-white/60">
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
  );
}
