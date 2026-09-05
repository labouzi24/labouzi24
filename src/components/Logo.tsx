type LogoProps = {
  size?: "sm" | "lg";
  fixed?: boolean;
  className?: string;
};

function GearGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2.5l1.2 2.1 2.3-.8 1 2.2 2.4.2-.1 2.4 2.1 1.2-1.3 2 1.3 2-2.1 1.2.1 2.4-2.4.2-1 2.2-2.3-.8L12 21.5l-1.2-2.1-2.3.8-1-2.2-2.4-.2.1-2.4L3.1 14l1.3-2-1.3-2 2.1-1.2-.1-2.4 2.4-.2 1-2.2 2.3.8L12 2.5z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M12 8.4l1.1 2.3 2.5.4-1.8 1.8.4 2.5-2.2-1.2-2.2 1.2.4-2.5-1.8-1.8 2.5-.4L12 8.4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Logo({ size = "sm", fixed = true, className = "" }: LogoProps) {
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
          "flex items-center justify-center rounded-lg bg-brand shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
          isLarge ? "h-16 w-16 rounded-2xl" : "h-8 w-8",
        ].join(" ")}
      >
        <GearGlyph className={isLarge ? "h-9 w-9 text-white" : "h-4.5 w-4.5 text-white"} />
      </div>
      <div className="flex flex-col items-start leading-tight">
        <span
          className={[
            "font-extrabold tracking-tight text-white",
            isLarge ? "text-2xl" : "text-sm",
          ].join(" ")}
          dir="ltr"
        >
          MechaSouq
        </span>
        <span
          className={[
            "text-white/60",
            isLarge ? "text-sm" : "text-[10px]",
          ].join(" ")}
        >
          سوق قطع غيار السيارات
        </span>
      </div>
    </div>
  );
}
