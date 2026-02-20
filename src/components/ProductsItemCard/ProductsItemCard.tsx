"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Bag } from "iconsax-reactjs";

import { IconArrowLeft, IconArrowRight } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { TProductColor } from "@/lib/API/Products/Products";
import { NO_IMAGE } from "@/app/constants";
import { useState } from "react";

type TProductsItemCardProps = {
  colors: TProductColor[];
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
  id,
  size = "medium",
  className,
}: TProductsItemCardProps) {
  /* -------------------------------------------------------------------------- */
  /*                                    Next                                    */
  /* -------------------------------------------------------------------------- */

  const router = useRouter();

  /* -------------------------------------------------------------------------- */
  /*                                    React                                   */
  /* -------------------------------------------------------------------------- */

  const [selectedColor, setSelectedColor] = useState<number>(0);

  /* -------------------------------------------------------------------------- */
  /*                                  Constant                                  */
  /* -------------------------------------------------------------------------- */

  const colorThumbnails: { id: number; colorCode: string; src: string }[] =
    colors.length > 0
      ? colors.map(({ color, id, images }) => ({
          id: id,
          colorCode: color.code,
          src: images[0]?.image || NO_IMAGE,
        }))
      : [{ id: 1, colorCode: "", src: NO_IMAGE }];

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */

  function onItemClick(itemId: number) {
    router.push(`/products/${itemId}`);
  }

  function onNextImage() {
    setSelectedColor((prev) => (prev + 1) % colorThumbnails.length);
  }

  function onPrevImage() {
    setSelectedColor(
      (prev) => (prev - 1 + colorThumbnails.length) % colorThumbnails.length,
    );
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
            onClick={onPrevImage}
          >
            <IconArrowRight color="#E2E2E2" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="rounded-tr-none rounded-bl-none border-2 border-[#E2E2E2] hover:bg-[#F5F5F5]"
            onClick={onNextImage}
          >
            <IconArrowLeft color="#E2E2E2" />
          </Button>
        </div>

        <Image
          alt={title}
          src={colorThumbnails[selectedColor].src}
          width={120}
          height={120}
          className={
            size === "medium" ? "mx-8 h-30 w-30" : "mx-4 h-20 w-20 self-center"
          }
        />

        <div className="flex gap-1 self-end p-1">
          {colorThumbnails.map(({ id, colorCode }, index) => (
            <div
              key={`${id}-${index}`}
              className={cn(
                "h-6 w-6 rounded-lg border",
                selectedColor === index
                  ? "border-primary border-2"
                  : "border-subtitle border",
              )}
              style={{
                backgroundColor: colorCode,
              }}
            />
          ))}
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
