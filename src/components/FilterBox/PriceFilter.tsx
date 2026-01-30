"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

function PriceFilter() {
  const [priceRange, setPriceRange] = useState([50, 500]);

  return (
    <div className="bg-muted text-title flex flex-col gap-4 rounded-2xl px-4 py-3">
      <div>فیلتر بر اساس قیمت:</div>
      <hr className="text-title" />

      <Slider
        value={priceRange}
        onValueChange={setPriceRange}
        max={1000}
        step={5}
        className="mx-auto w-full max-w-xs"
      />

      <div className="flex items-center justify-between">
        <Button variant="secondary" className="bg-muted-foreground">
          فیلتر
        </Button>
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
