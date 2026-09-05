import { motion } from "motion/react";
import type { ReactNode } from "react";

type SlideProps = {
  isActive: boolean;
  className?: string;
  children: ReactNode;
};

export default function Slide({ isActive, className = "", children }: SlideProps) {
  return (
    <motion.section
      aria-hidden={!isActive}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{ zIndex: isActive ? 10 : 0, pointerEvents: isActive ? "auto" : "none" }}
      className={["absolute inset-0 h-full w-full bg-black", className].join(" ")}
    >
      {children}
    </motion.section>
  );
}
