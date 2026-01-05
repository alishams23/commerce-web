"use client";

import { Button } from "@/src/components/ui/button";
import { PRODUCTS } from "./constants";
import ProductsItemCard from "@/src/components/ProductsItemCard/ProductsItemCard";
import useCountdown from "./hooks/useCountDown";

function AmazingDiscounts() {
  /* -------------------------------------------------------------------------- */
  /*                                 Count Down                                 */
  /* -------------------------------------------------------------------------- */

  const { days, hours, minutes, seconds } = useCountdown(
    new Date("2026-01-10T00:00:00"),
  );

  return (
    <div className="mx-12 flex flex-col items-center gap-4 md:mx-36">
      <div className="flex flex-col items-center gap-4 md:hidden">
        <div className="text-primary text-xl font-black">
          تخفیف های شگفت انگیز
        </div>
        <Button className="text-primary rounded-2xl border bg-white">
          مشاهده همه
        </Button>
      </div>

      <div className="bg-primary flex w-full flex-col gap-12 rounded-4xl pt-8 pb-10 md:flex-row md:gap-0 md:bg-transparent md:py-0">
        {/* Timer section */}
        <div className="flex flex-col">
          <div className="md:bg-primary flex justify-center gap-2 md:rounded-r-4xl md:p-6">
            {[
              { title: "روز", value: days },
              { title: "ساعت", value: hours },
              { title: "دقیقه", value: minutes },
              { title: "ثانیه", value: seconds },
            ].map(({ title, value }, index) => (
              <div
                key={index}
                className="flex min-h-22 min-w-14.5 flex-col items-center justify-center rounded-2xl bg-[#FFFFFF26]"
              >
                <div className="text-xl text-white">{value}</div>
                <div className="bg-primary h-0.5 w-full" />
                <div className="text-[14px] text-[#FFFFFF80]">{title}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 hidden flex-col items-start gap-4 md:flex">
            <div className="text-primary text-xl font-black">
              تخفیف های شگفت انگیز
            </div>
            <Button className="text-primary rounded-2xl border bg-white">
              مشاهده همه
            </Button>
          </div>
        </div>

        {/* Products */}
        <div className="scrollbar-hide relative flex gap-7 overflow-x-auto px-7 md:w-full md:justify-between md:px-16 md:pt-6">
          <div className="bg-primary absolute top-0 right-0 hidden h-4/5 w-full rounded-tl-4xl rounded-b-4xl md:block" />

          {PRODUCTS.map(({ title, src, price, colors }, index) => (
            <ProductsItemCard
              key={index}
              title={title}
              src={src}
              price={price}
              colors={colors}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AmazingDiscounts;
