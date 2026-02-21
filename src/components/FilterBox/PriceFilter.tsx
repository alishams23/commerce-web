"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import OptionalDrawerWrapper from "./OptionalDrawerWrapper";

function PriceFilter({ isInDrawer }: { isInDrawer: boolean }) {
  /* -------------------------------------------------------------------------- */
  /*                                    Next                                    */
  /* -------------------------------------------------------------------------- */

  const router = useRouter();
  const searchParams = useSearchParams();

  /* -------------------------------------------------------------------------- */
  /*                                    React                                   */
  /* -------------------------------------------------------------------------- */

  const [priceRange, setPriceRange] = useState([50, 2500]);

  /* -------------------------------------------------------------------------- */
  /*                                  Function                                  */
  /* -------------------------------------------------------------------------- */

  function handlePriceFilter() {
    const params = new URLSearchParams(searchParams.toString());

    params.set("min_price", (priceRange[0] * 10000).toString());
    params.set("max_price", (priceRange[1] * 10000).toString());

    router.push(`?${params.toString()}`);
  }

  return (
    <div className="bg-muted text-title flex flex-col gap-4 rounded-2xl px-4 py-3">
      <div>فیلتر بر اساس قیمت:</div>
      <hr className="text-title" />

      <Slider
        value={priceRange}
        onValueChange={setPriceRange}
        max={5000}
        step={5}
        className="mx-auto w-full max-w-xs"
      />

      <div className="flex items-center justify-between">
        <OptionalDrawerWrapper isInDrawer={isInDrawer}>
          <Button
            variant="secondary"
            className="bg-muted-foreground"
            onClick={handlePriceFilter}
          >
            فیلتر
          </Button>
        </OptionalDrawerWrapper>
        <div className="text-subtitle">
          {(priceRange[1] * 10000).toLocaleString("fa-IR")} تومان
        </div>
        <div className="text-subtitle">
          {(priceRange[0] * 10000).toLocaleString("fa-IR")} تومان
        </div>
      </div>
    </div>
  );
}

export default PriceFilter;
