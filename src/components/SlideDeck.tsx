import { useCallback, useEffect, useState } from "react";
import Slide from "./Slide";
import Logo from "./Logo";
import NavDots from "./NavDots";
import Slide1Hero from "../slides/Slide1Hero";
import Slide2Problem from "../slides/Slide2Problem";
import Slide3HowItWorks from "../slides/Slide3HowItWorks";
import Slide4Vendors from "../slides/Slide4Vendors";
import Slide5CTA from "../slides/Slide5CTA";

const SLIDE_COUNT = 5;

export default function SlideDeck() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback((index: number) => {
    setActiveIndex(Math.min(Math.max(index, 0), SLIDE_COUNT - 1));
  }, []);

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      // dir="rtl": "next" moves visually leftward, so the arrow logic is
      // mirrored relative to a left-to-right deck.
      if (event.key === "ArrowLeft" || event.key === "ArrowDown" || event.key === " ") {
        event.preventDefault();
        next();
      } else if (event.key === "ArrowRight" || event.key === "ArrowUp") {
        event.preventDefault();
        prev();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  return (
    <div dir="rtl" className="relative h-dvh w-full overflow-hidden bg-black font-['Cairo',sans-serif]">
      <Logo />

      <Slide isActive={activeIndex === 0}>
        <Slide1Hero />
      </Slide>
      <Slide isActive={activeIndex === 1}>
        <Slide2Problem />
      </Slide>
      <Slide isActive={activeIndex === 2}>
        <Slide3HowItWorks isActive={activeIndex === 2} />
      </Slide>
      <Slide isActive={activeIndex === 3}>
        <Slide4Vendors />
      </Slide>
      <Slide isActive={activeIndex === 4}>
        <Slide5CTA />
      </Slide>

      <NavDots count={SLIDE_COUNT} activeIndex={activeIndex} onSelect={goTo} />
    </div>
  );
}
