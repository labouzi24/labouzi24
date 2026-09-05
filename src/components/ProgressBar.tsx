type ProgressBarProps = {
  activeIndex: number;
  count: number;
};

export default function ProgressBar({ activeIndex, count }: ProgressBarProps) {
  const percent = ((activeIndex + 1) / count) * 100;

  return (
    <div className="fixed inset-x-0 top-0 z-30 h-1 bg-white/10">
      <div
        className="absolute right-0 top-0 h-full bg-brand transition-all duration-300"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
