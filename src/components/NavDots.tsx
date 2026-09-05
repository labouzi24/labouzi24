type NavDotsProps = {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
};

export default function NavDots({ count, activeIndex, onSelect }: NavDotsProps) {
  return (
    <div className="fixed bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
      {Array.from({ length: count }).map((_, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={index}
            type="button"
            aria-label={`الانتقال إلى الشريحة ${index + 1}`}
            aria-current={isActive}
            onClick={() => onSelect(index)}
            className={[
              "rounded-full transition-all duration-300",
              isActive ? "h-2 w-6 bg-brand" : "h-2 w-2 bg-white/40 hover:bg-white/60",
            ].join(" ")}
          />
        );
      })}
    </div>
  );
}
