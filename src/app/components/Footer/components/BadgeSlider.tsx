"use client";

import Image from "next/image";

import {
  IconDiagonalArrowLeft,
  IconDiagonalArrowRight,
} from "@/src/components/icons";
import { Button } from "@/src/components/ui/button";

import { BADGES } from "../constants";
import useBadgeSlider from "../../../../hooks/useBadgeSlider";

function BadgeSlider() {
  /* -------------------------------------------------------------------------- */
  /*                                Badge Slider                                */
  /* -------------------------------------------------------------------------- */

  const { scrollContainerRef, handlePrev, handleNext } = useBadgeSlider();

  return (
    <div className="flex items-center gap-3">
      <Button
        onClick={handleNext}
        variant="glass"
        className="hidden h-26 shrink-0 px-1 lg:flex"
      >
        <IconDiagonalArrowRight color="white" />
      </Button>
      <div
        ref={scrollContainerRef}
        className="scrollbar-hide flex flex-1 gap-3 overflow-x-auto"
      >
        {BADGES.map((badge, index) => (
          <div
            key={`${badge.src}-${index}`}
            className="bg-muted shrink-0 rounded-2xl p-5"
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
      <Button
        onClick={handlePrev}
        variant="glass"
        className="hidden h-26 shrink-0 px-1 lg:flex"
      >
        <IconDiagonalArrowLeft color="white" />
      </Button>
    </div>
  );
}

export default BadgeSlider;
