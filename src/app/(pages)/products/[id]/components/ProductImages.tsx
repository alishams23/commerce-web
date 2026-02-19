"use client";

import Image from "next/image";

import { IconArrowLeft, IconArrowRight } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { TProductColorImage } from "@/lib/API/Products/Products";
import { useState } from "react";

type TProductImagesProps = {
  name: string;
  images: TProductColorImage[];
};

function ProductImages({ name, images }: TProductImagesProps) {
  /* -------------------------------------------------------------------------- */
  /*                                    React                                   */
  /* -------------------------------------------------------------------------- */

  const [activeImage, setActiveImage] = useState<number>(0);

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */

  function handleNextImage() {
    setActiveImage((prev) => (prev + 1) % images.length);
  }

  function handlePrevImage() {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <Button
          size="icon"
          variant="outline"
          className="hidden border-none lg:flex"
          onClick={handleNextImage}
        >
          <IconArrowRight />
        </Button>

        <Image
          alt={`${images[activeImage].id}-${name}`}
          src={images[activeImage].image}
          width={500}
          height={500}
        />

        <Button
          size="icon"
          variant="outline"
          className="hidden border-none lg:flex"
          onClick={handlePrevImage}
        >
          <IconArrowLeft />
        </Button>
      </div>

      <div className="flex justify-center gap-4">
        {images.map((img, index) => {
          if (index === activeImage) return;

          return (
            <Image
              key={img.id}
              alt={`${img.id}-${name}`}
              src={img.image}
              width={70}
              height={70}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductImages;
