"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

function ProductPurchaseBox({
  price,
  discountPercent,
}: {
  price: number;
  discountPercent: number;
}) {
  /* -------------------------------------------------------------------------- */
  /*                                    React                                   */
  /* -------------------------------------------------------------------------- */

  const [prodCount, setProdCount] = useState<number>(1);

  /* -------------------------------------------------------------------------- */
  /*                                  Function                                  */
  /* -------------------------------------------------------------------------- */

  function handleIncrease() {
    setProdCount((prev) => prev + 1);
  }

  function handleDecrease() {
    if (prodCount > 1) {
      setProdCount((prev) => prev - 1);
    }
  }

  return (
    <div className="bg-muted rounded-2xl px-6 py-8 lg:h-fit lg:min-w-85">
      <div className="mb-4 flex justify-between">
        <div className="bg-muted-foreground flex items-center gap-2 rounded-2xl p-1">
          <Button
            size="icon"
            variant="secondary"
            className="text-[30px]"
            onClick={handleIncrease}
          >
            +
          </Button>
          {prodCount.toLocaleString("fa")}
          <Button
            size="icon"
            variant="secondary"
            className="text-[30px]"
            onClick={handleDecrease}
          >
            -
          </Button>
        </div>

        <div>
          <div className="mb-2 flex gap-2">
            <div className="text-subtitle text-[14px] font-semibold line-through">
              {price.toLocaleString("fa-IR")} تومان
            </div>
            <div className="bg-primary mr-2 rounded-full px-2 text-[12px] text-white">
              {discountPercent.toLocaleString("fa")}%
            </div>
          </div>

          <div className="text-primary text-center text-[20px] font-semibold">
            {price.toLocaleString("fa-IR")} تومان
          </div>
        </div>
      </div>

      <Button className="h-11.5 w-full">افزودن به سبد خرید</Button>
    </div>
  );
}

export default ProductPurchaseBox;
