import { motion } from "motion/react";
import type { ReactElement } from "react";
import { stepNumbers } from "../data/mockData";
import { useTranslations } from "../i18n/I18nContext";

function BrandIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 17V7l8-4 8 4v10l-8 4-8-4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M4 7l8 4 8-4M12 11v10" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function ModelIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 16l1.5-5.5A2 2 0 0 1 6.4 9h11.2a2 2 0 0 1 1.9 1.5L21 16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="2.5" y="16" width="19" height="4" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="7" cy="20" r="1.4" fill="currentColor" />
      <circle cx="17" cy="20" r="1.4" fill="currentColor" />
    </svg>
  );
}

function PartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14.7 6.3l-2-2a1 1 0 0 0-1.4 0L9.8 5.8a2.5 2.5 0 0 1-3.5 3.5L4.8 10.8a1 1 0 0 0 0 1.4l2 2a1 1 0 0 0 1.4 0l1.5-1.5a2.5 2.5 0 0 1 3.5 3.5l-1.5 1.5a1 1 0 0 0 0 1.4l2 2a1 1 0 0 0 1.4 0l1.5-1.5a2.5 2.5 0 0 1-3.5-3.5l1.5-1.5a1 1 0 0 0 0-1.4l-2-2a2.5 2.5 0 0 1 3.5-3.5l1.5-1.5a1 1 0 0 0 0-1.4l-2-2a1 1 0 0 0-1.4 0L17.7 4.3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Icons are presentational and stay local; titles/descriptions come from
// the i18n translations, numbers from the mock data layer.
const STEP_ICONS: Array<(props: { className?: string }) => ReactElement> = [
  BrandIcon,
  ModelIcon,
  PartIcon,
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

type Slide3Props = {
  isActive: boolean;
};

export default function Slide3HowItWorks({ isActive }: Slide3Props) {
  const t = useTranslations();
  const steps = t.slide3.steps.map((step, index) => ({
    ...step,
    number: stepNumbers[index],
    Icon: STEP_ICONS[index],
  }));

  return (
    <div className="h-full w-full overflow-y-auto bg-black">
      <div className="flex min-h-full flex-col items-center justify-center px-6 py-20 sm:px-16">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold text-brand">{t.slide3.eyebrow}</span>
          <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-4xl">{t.slide3.headline}</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className="flex w-full max-w-5xl snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0"
        >
          {steps.map((step) => (
            <motion.div
              key={step.title}
              variants={cardVariants}
              className="flex w-[78%] shrink-0 snap-center flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-6 text-center sm:w-auto sm:py-8"
            >
              <span className="mb-3 text-sm font-bold text-white/30 sm:mb-4">{step.number}</span>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand sm:mb-4 sm:h-14 sm:w-14">
                <step.Icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <h3 className="text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
