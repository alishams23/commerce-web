import Image from "next/image";

import { Bag } from "iconsax-reactjs";

import { IconArrowLeft, IconArrowRight } from "@/src/components/icons";
import { Button } from "@/src/components/ui/button";

type TProductsItemCardProps = {
  src: string;
  colors: string[];
  title: string;
  price: number;
  size?: "small" | "medium";
};

function ProductsItemCard({
  colors,
  title,
  price,
  src,
  size = "medium",
}: TProductsItemCardProps) {
  return (
    <div className="bg-muted relative flex min-w-fit flex-col gap-2 rounded-3xl p-4">
      <div className="flex flex-col rounded-2xl bg-white">
        <div className="flex justify-between">
          <Button
            size="icon"
            variant="outline"
            className="rounded-tl-none rounded-br-none border-2 border-[#E2E2E2] hover:bg-[#F5F5F5]"
          >
            <IconArrowRight color="#E2E2E2" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="rounded-tr-none rounded-bl-none border-2 border-[#E2E2E2] hover:bg-[#F5F5F5]"
          >
            <IconArrowLeft color="#E2E2E2" />
          </Button>
        </div>
        <Image
          alt={title}
          src={src}
          width={120}
          height={120}
          className={
            size === "medium" ? "mx-8 h-30 w-30" : "mx-4 h-20 w-20 self-center"
          }
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
      <div className="text-title font-semibold">{title}</div>
      <div className="text-subtitle pb-4 text-[14px] font-normal">
        {price.toLocaleString("fa-IR")} تومان
      </div>

      <Button className="text-subtitle absolute bottom-4 left-4 bg-white p-3">
        <Bag variant="Broken" />
      </Button>
    </div>
  );
}

export default ProductsItemCard;
