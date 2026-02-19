"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

type TProductPurchaseBoxProps = {
  price: number;
  discountPercentage: number;
  stock: number;
};

function ProductPurchaseBox({
  price,
  discountPercentage,
  stock,
}: TProductPurchaseBoxProps) {
  /* -------------------------------------------------------------------------- */
  /*                                  Constants                                 */
  /* -------------------------------------------------------------------------- */

  const discountAmount = (price * discountPercentage) / 100;
  const finalPrice = price - discountAmount;

  /* -------------------------------------------------------------------------- */
  /*                                    React                                   */
  /* -------------------------------------------------------------------------- */

  const [quantity, setQuantity] = useState<number>(1);

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */

  function increaseQuantity() {
    setQuantity((prev) => Math.min(prev + 1, stock));
  }

  function decreaseQuantity() {
    setQuantity((prev) => Math.max(prev - 1, 1));
  }

  return (
    <div className="bg-muted rounded-2xl px-6 py-8 lg:h-fit lg:min-w-85">
      <div className="mb-4 flex items-center justify-between">
        <div className="bg-muted-foreground flex items-center gap-2 rounded-2xl p-1">
          <Button
            size="icon"
            variant="secondary"
            className="text-[30px]"
            onClick={increaseQuantity}
          >
            +
          </Button>
          {quantity.toLocaleString("fa")}
          <Button
            size="icon"
            variant="secondary"
            className="text-[30px]"
            onClick={decreaseQuantity}
          >
            -
          </Button>
        </div>

        <div>
          {discountPercentage > 0 && (
            <div className="mb-2 flex gap-2">
              <div className="text-subtitle text-[14px] font-semibold line-through">
                {price.toLocaleString("fa-IR")} تومان
              </div>
              <div className="bg-primary mr-2 rounded-full px-2 text-[12px] text-white">
                {discountPercentage.toLocaleString("fa")}%
              </div>
            </div>
          )}

          <div className="text-primary text-center text-[20px] font-semibold">
            {finalPrice.toLocaleString("fa-IR")} تومان
          </div>
        </div>
      </div>

      <Button className="h-11.5 w-full">افزودن به سبد خرید</Button>
    </div>
  );
}

export default ProductPurchaseBox;
