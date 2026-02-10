"use client";

import { ArrowLeft } from "iconsax-reactjs";

import { useNewProducts } from "@/lib/queries/products";

import ProductsItemCard from "@/components/ProductsItemCard/ProductsItemCard";
import IconStart from "@/components/icons/IconStart";
import { Button } from "@/components/ui/button";

import { NEW_PRODUCTS } from "./constants";

function NewProducts() {
  /* -------------------------------------------------------------------------- */
  /*                                 React Query                                */
  /* -------------------------------------------------------------------------- */

  const { data: products, isLoading, isError } = useNewProducts();

  return (
    <div className="mx-12 flex flex-col gap-3 lg:mx-36">
      <div className="flex justify-between">
        <div className="flex items-center gap-1 text-xl">
          <IconStart />
          <span className="font-extrabold">جدید ترین</span> محصولات
        </div>
        <Button className="hidden w-fit gap-3 rounded-lg bg-[#EBF0FF] p-6 text-[#373254] hover:bg-[#051F6F30] lg:flex">
          <div className="text-[16px] font-semibold">مشاهده همه</div>
          <div className="relative z-0 rounded-full border-2 p-1">
            <ArrowLeft size={13} variant="Broken" />
            <div className="absolute top-0 left-2 -z-10 h-full w-full rounded-full bg-[#051F6F30]" />
          </div>
        </Button>
      </div>

      {/* Items */}
      <div className="scrollbar-hide flex justify-between gap-3 overflow-x-auto lg:mx-0">
        {isLoading && (
          <div className="text-muted-foreground py-6 text-sm">
            در حال بارگذاری محصولات جدید...
          </div>
        )}

        {isError && !isLoading && (
          <div className="py-6 text-sm text-red-500">
            خطا در بارگذاری محصولات جدید.
          </div>
        )}

        {NEW_PRODUCTS.map(({ id, colors, title, src, price }, index) => (
          <ProductsItemCard
            id={id}
            key={title + index}
            colors={colors}
            price={price}
            src={src}
            title={title}
          />
        ))}

        {!isLoading &&
          !isError &&
          products?.map(({ id, colors, title, src, price }, index) => (
            <ProductsItemCard
              id={id}
              key={title + index}
              colors={colors}
              price={price}
              src={src}
              title={title}
            />
          ))}
      </div>

      <Button className="flex w-fit gap-3 self-center rounded-lg bg-[#EBF0FF] p-6 text-[#373254] lg:hidden">
        <div className="text-[16px] font-semibold">مشاهده همه</div>
        <div className="relative z-0 rounded-full border-2 p-1">
          <ArrowLeft size={13} variant="Broken" />
          <div className="absolute top-0 left-2 -z-10 h-full w-full rounded-full bg-[#051F6F30]" />
        </div>
      </Button>
    </div>
  );
}

export default NewProducts;
