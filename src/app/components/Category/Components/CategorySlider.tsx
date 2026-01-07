"use client";

import { IconArrowLeft, IconArrowRight } from "@/src/components/icons";
import useBadgeSlider from "@/src/hooks/useBadgeSlider";
import { Button } from "@/src/components/ui/button";

import { CATEGORIES } from "../constants";
import CategoryItem from "./CategoryItem";

function CategorySlider() {
  /* -------------------------------------------------------------------------- */
  /*                                Badge Slider                                */
  /* -------------------------------------------------------------------------- */

  const { scrollContainerRef, handlePrev, handleNext } = useBadgeSlider();

  return (
    <div className="flex w-full overflow-hidden md:pl-6">
      <Button
        onClick={handleNext}
        variant="glass"
        className="hidden h-29.5 shrink-0 rounded-xl px-2 md:flex"
      >
        <IconArrowRight color="white" />
      </Button>

      <div
        ref={scrollContainerRef}
        className="scrollbar-hide flex w-full gap-2 overflow-x-auto px-4 text-[#3D3B3B] md:px-2"
      >
        {CATEGORIES.map((item) => (
          <CategoryItem key={item.title} {...item} />
        ))}
      </div>

      <Button
        onClick={handlePrev}
        variant="glass"
        className="hidden h-29.5 shrink-0 rounded-xl px-2 md:flex"
      >
        <IconArrowLeft color="white" />
      </Button>
    </div>
  );
}

export default CategorySlider;
