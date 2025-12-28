"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "iconsax-reactjs";
import Image from "next/image";
import { BADGES } from "../constants";
import useBadgeSlider from "../hooks/useBadgeSlider";

function BadgeSlider() {
  /* -------------------------------------------------------------------------- */
  /*                                Badge Slider                                */
  /* -------------------------------------------------------------------------- */

  const { scrollContainerRef, handlePrev, handleNext } = useBadgeSlider();

  return (
    <div className="flex items-center gap-3">
      <Button onClick={handleNext} className="h-26 shrink-0 bg-[#F7F7F7] px-1">
        <ArrowRight color="gray" variant="Bold" size={20} />
      </Button>
      <div
        ref={scrollContainerRef}
        className="scrollbar-hide flex flex-1 gap-3 overflow-x-auto"
      >
        {BADGES.map((badge, index) => (
          <div
            key={`${badge.src}-${index}`}
            className="shrink-0 rounded-2xl bg-[#F7F7F7] p-5"
          >
            <Image
              alt={badge.alt}
              src={badge.src}
              width={64}
              height={64}
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      <Button onClick={handlePrev} className="h-26 shrink-0 bg-[#F7F7F7] px-1">
        <ArrowLeft color="gray" variant="Bold" size={20} />
      </Button>
    </div>
  );
}

export default BadgeSlider;
