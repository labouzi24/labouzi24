import Logo from "../components/Logo";

// Replace with the real marketplace homepage URL once available.
const MARKETPLACE_URL = "/marketplace";

export default function Slide5CTA() {
  return (
    <div className="h-full w-full overflow-y-auto bg-black">
      <div className="flex min-h-full flex-col items-center justify-center gap-8 px-6 pt-16 pb-24 text-center">
        <Logo size="lg" fixed={false} />

        <h2 className="max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-5xl">
          ابدأ البحث عن قطعتك الآن
        </h2>

        <a
          href={MARKETPLACE_URL}
          className="flex min-h-11 items-center rounded-full bg-brand px-8 py-3 text-base font-bold text-white shadow-[0_0_30px_rgba(30,95,255,0.35)] transition-transform duration-200 hover:scale-105 sm:text-lg"
        >
          تصفح السوق الآن
        </a>
      </div>
    </div>
  );
}
