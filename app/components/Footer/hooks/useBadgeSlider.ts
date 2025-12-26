import { useCallback, useRef } from "react";

const SCROLL_GAP = 12;

function useBadgeSlider() {
  /* -------------------------------------------------------------------------- */
  /*                                     Ref                                    */
  /* -------------------------------------------------------------------------- */

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  /* -------------------------------------------------------------------------- */
  /*                                  CallBack                                  */
  /* -------------------------------------------------------------------------- */

  const scroll = useCallback((direction: "prev" | "next") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const itemWidth = container.querySelector("div")?.offsetWidth ?? 0;
    const scrollAmount = itemWidth + SCROLL_GAP;
    const scrollValue = direction === "prev" ? -scrollAmount : scrollAmount;

    container.scrollBy({ left: scrollValue, behavior: "smooth" });
  }, []);

  const handlePrev = useCallback(() => scroll("prev"), [scroll]);
  const handleNext = useCallback(() => scroll("next"), [scroll]);

  return {
    scrollContainerRef,
    handlePrev,
    handleNext,
  };
}

export default useBadgeSlider;
