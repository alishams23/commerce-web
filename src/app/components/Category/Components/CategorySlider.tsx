"use client";

import { IconArrowLeft, IconArrowRight } from "@/components/icons";

import { CATEGORIES } from "../constants";
import CategoryItem from "./CategoryItem";
import useBadgeSlider from "@/hooks/useBadgeSlider";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/lib/API/Home/Categories";

function CategorySlider() {
  /* -------------------------------------------------------------------------- */
  /*                                 React Query                                */
  /* -------------------------------------------------------------------------- */

  const CATEGORIES_QUERY_KEY = ["categories"];
  const { data, isLoading, isError } = useQuery({
    queryKey: CATEGORIES_QUERY_KEY,
    queryFn: getCategories,
  });

  /* -------------------------------------------------------------------------- */
  /*                                Badge Slider                                */
  /* -------------------------------------------------------------------------- */

  const { scrollContainerRef, handlePrev, handleNext } = useBadgeSlider();

  return (
    <div className="flex w-full overflow-hidden lg:pl-6">
      <Button
        onClick={handleNext}
        variant="glass"
        className="hidden h-29.5 shrink-0 rounded-xl px-2 lg:flex"
      >
        <IconArrowRight color="white" />
      </Button>

      <div
        ref={scrollContainerRef}
        className="scrollbar-hide flex w-full gap-2 overflow-x-auto px-4 text-[#3D3B3B] lg:px-2"
      >
        {!isLoading &&
          !isError &&
          data?.map((cat, index) => (
            <CategoryItem
              key={`${cat.name}-${index}`}
              src={CATEGORIES[index % CATEGORIES.length].src}
              name={cat.name}
            />
          ))}
      </div>

      <Button
        onClick={handlePrev}
        variant="glass"
        className="hidden h-29.5 shrink-0 rounded-xl px-2 lg:flex"
      >
        <IconArrowLeft color="white" />
      </Button>
    </div>
  );
}

export default CategorySlider;
