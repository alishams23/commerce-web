import Image from "next/image";

import { Bag } from "iconsax-reactjs";

import { IconArrowLeft, IconArrowRight } from "@/src/components/icons";
import { Button } from "@/src/components/ui/button";

type TProductsItemCardProps = {
  src: string;
  colors: string[];
  title: string;
  price: number;
};

function ProductsItemCard({
  colors,
  title,
  price,
  src,
}: TProductsItemCardProps) {
  return (
    <div className="relative flex min-w-fit flex-col gap-2 rounded-3xl bg-[#F7F7F7] p-4">
      <div className="flex flex-col rounded-2xl bg-white">
        <div className="flex justify-between">
          <div className="rounded-tr-2xl rounded-bl-2xl border-2 border-[#E2E2E2] p-2">
            <IconArrowRight color="#E2E2E2" />
          </div>
          <div className="rounded-tl-2xl rounded-br-2xl border-2 border-[#E2E2E2] p-2">
            <IconArrowLeft color="#E2E2E2" />
          </div>
        </div>
        <Image
          alt={title}
          src={src}
          width={120}
          height={120}
          className="mx-8 h-30 w-30"
        />

        <div className="flex gap-1 self-end p-1">
          {colors.map((color) => (
            <div
              className="h-6 w-6 rounded-lg"
              key={color}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>
      <div className="font-semibold text-[#505050]">{title}</div>
      <div className="pb-4 text-[14px] font-normal text-[#9F9F9F]">
        {price} تومان
      </div>

      <Button className="absolute bottom-4 left-4 rounded-2xl bg-white p-3">
        <Bag color="#9F9F9F" />
      </Button>
    </div>
  );
}

export default ProductsItemCard;
