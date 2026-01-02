import { ArrowLeft } from "iconsax-reactjs";

import IconStart from "@/src/components/icons/IconStart";
import { Button } from "@/src/components/ui/button";

import NewProductsItemCard from "./NewProductsItemCard/NewProductsItemCard";
import { NEW_PRODUCTS } from "./constants";

function NewProducts() {
  return (
    <div className="mx-12 flex flex-col gap-3 md:mx-36">
      <div className="flex justify-between">
        <div className="flex items-center gap-1 text-xl">
          <IconStart />
          <span className="font-extrabold">جدید ترین</span> محصولات
        </div>
        <Button className="hidden w-fit gap-3 rounded-lg bg-[#EBF0FF] p-6 text-[#373254] md:flex">
          <div className="text-[16px] font-semibold">مشاهده همه</div>
          <div className="relative z-0 rounded-full border-2 p-1">
            <ArrowLeft size={13} />
            <div className="absolute top-0 left-2 -z-10 h-full w-full rounded-full bg-[#051F6F30]" />
          </div>
        </Button>
      </div>

      {/* Items */}
      <div className="scrollbar-hide flex justify-between gap-3 overflow-x-auto md:mx-0">
        {NEW_PRODUCTS.map(({ colors, title, src, price }, index) => (
          <NewProductsItemCard
            key={title + index}
            colors={colors}
            price={price}
            src={src}
            title={title}
          />
        ))}
      </div>

      <Button className="flex w-fit gap-3 self-center rounded-lg bg-[#EBF0FF] p-6 text-[#373254] md:hidden">
        <div className="text-[16px] font-semibold">مشاهده همه</div>
        <div className="relative z-0 rounded-full border-2 p-1">
          <ArrowLeft size={13} />
          <div className="absolute top-0 left-2 -z-10 h-full w-full rounded-full bg-[#051F6F30]" />
        </div>
      </Button>
    </div>
  );
}

export default NewProducts;
