import Logo from "./Logo";

export default function Header() {
  return (
    <div className="fixed top-4 right-4 z-30 flex items-center gap-3">
      <Logo fixed={false} />
      <button
        type="button"
        onClick={() => console.log("تسجيل الدخول: لم يُفعَّل بعد")}
        className="flex h-11 items-center justify-center rounded-full border border-white/30 px-4 text-xs font-semibold text-white/80 transition-colors duration-200 hover:border-brand hover:text-brand sm:text-sm"
      >
        تسجيل الدخول
      </button>
    </div>
  );
}
