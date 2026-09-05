import { motion } from "motion/react";
import type { ReactElement } from "react";

type Step = {
  number: string;
  title: string;
  description: string;
  icon: (props: { className?: string }) => ReactElement;
};

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

const STEPS: Step[] = [
  {
    number: "١",
    title: "اختر الماركة",
    description: "حدد ماركة سيارتك من قائمة تضم جميع الماركات الشائعة.",
    icon: BrandIcon,
  },
  {
    number: "٢",
    title: "اختر الموديل",
    description: "اختر الموديل وسنة الصنع لتحديد المواصفات بدقة.",
    icon: ModelIcon,
  },
  {
    number: "٣",
    title: "اختر القطعة",
    description: "تصفح القطع المتوافقة من عدة بائعين وقارن الأسعار.",
    icon: PartIcon,
  },
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
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-black px-6 py-20 sm:px-16">
      <div className="mb-12 text-center">
        <span className="text-sm font-semibold text-brand">كيف يعمل الموقع</span>
        <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-4xl">
          ثلاث خطوات بسيطة للوصول إلى قطعتك
        </h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3"
      >
        {STEPS.map((step) => (
          <motion.div
            key={step.title}
            variants={cardVariants}
            className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center"
          >
            <span className="mb-4 text-sm font-bold text-white/30">{step.number}</span>
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <step.icon className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-bold text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
