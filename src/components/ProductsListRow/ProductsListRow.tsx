import { ArrowLeft } from "iconsax-reactjs";

import { cn } from "@/lib/cn";

import { TProductResponse } from "@/lib/API/Products/Products";

import { Button } from "../ui/button";
import IconStar from "../icons/IconStar";
import ProductsItemCard from "../ProductsItemCard/ProductsItemCard";

type TProductsListRowProps = {
  title: string;
  products: TProductResponse[];
  className?: string;
  shwMoreBtn?: boolean;
};

function ProductsListRow({
  title,
  products,
  className,
  shwMoreBtn = true,
}: TProductsListRowProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className="flex justify-between">
        <div className="flex items-center gap-1 text-xl">
          <IconStar />
          <span className="font-extrabold">{title}</span> محصولات
        </div>

        {shwMoreBtn && (
          <Button className="hidden w-fit gap-3 rounded-lg bg-[#EBF0FF] p-6 text-[#373254] hover:bg-[#051F6F30] lg:flex">
            <div className="text-[16px] font-semibold">مشاهده همه</div>
            <div className="relative z-0 rounded-full border-2 p-1">
              <ArrowLeft size={13} variant="Broken" />
              <div className="absolute top-0 left-2 -z-10 h-full w-full rounded-full bg-[#051F6F30]" />
            </div>
          </Button>
        )}
      </div>

      {/* Items */}
      <div className="scrollbar-hide flex gap-3 overflow-x-auto lg:mx-0 lg:gap-6">
        {products.map(({ id, colors, fixed_price, name }) => {
          // TODO: Change this logic and add all images to component
          let t = "";
          colors.some((c) =>
            c.images.some((img) => {
              if (img.is_cover) t = img.image;
            }),
          );

          return (
            <ProductsItemCard
              key={id}
              colors={colors}
              price={fixed_price}
              src={t || ""}
              title={name}
              size="small"
              id={id}
              className="md:min-w-55"
            />
          );
        })}
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

export default ProductsListRow;
