"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Bag } from "iconsax-reactjs";

import { IconArrowLeft, IconArrowRight } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { TProductColor } from "@/lib/API/Products/Products";
import { NO_IMAGE } from "@/app/constants";

type TProductsItemCardProps = {
  src: string;
  // TODO: remove the string[]
  colors: TProductColor[] | string[];
  title: string;
  price: number;
  id: number;
  size?: "small" | "medium";
  className?: string;
};

function ProductsItemCard({
  colors,
  title,
  price,
  src,
  id,
  size = "medium",
  className,
}: TProductsItemCardProps) {
  /* -------------------------------------------------------------------------- */
  /*                                    Next                                    */
  /* -------------------------------------------------------------------------- */

  const router = useRouter();

  /* -------------------------------------------------------------------------- */
  /*                                  Function                                  */
  /* -------------------------------------------------------------------------- */

  function onItemClick(itemId: number) {
    router.push(`/products/${itemId}`);
  }

  return (
    <div
      className={cn(
        "bg-muted relative flex min-w-50 flex-col gap-2 rounded-3xl p-4",
        className,
      )}
    >
      <div className="flex flex-col items-center rounded-2xl bg-white">
        <div className="flex w-full justify-between">
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
          src={src || NO_IMAGE}
          width={120}
          height={120}
          className={
            size === "medium" ? "mx-8 h-30 w-30" : "mx-4 h-20 w-20 self-center"
          }
        />

        <div className="flex gap-1 self-end p-1">
          {/* TODO: remove this condition */}
          {typeof colors[0] !== "string" &&
            (colors as TProductColor[]).map(
              (
                {
                  color,
                  id,
                  // images, price, stock
                },
                index,
              ) => (
                <div
                  key={`${id}-${index}`}
                  className="h-6 w-6 rounded-lg"
                  // TODO: remove "?" and change style
                  style={{
                    backgroundColor: color?.code,
                    boxShadow: "1px 1px 1px black",
                  }}
                />
              ),
            )}
        </div>
      </div>
      <div
        className="text-title cursor-pointer font-semibold"
        onClick={() => onItemClick(id)}
      >
        {title}
      </div>
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
