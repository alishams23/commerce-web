"use client";

import Image from "next/image";

import { IconArrowLeft, IconArrowRight } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { TProductColorImage } from "@/lib/API/Products/Products";
import { useState } from "react";
import { NO_IMAGE } from "@/app/constants";

type TProductImagesProps = {
  name: string;
  images: TProductColorImage[];
};

function ProductImages({ name, images }: TProductImagesProps) {
  /* -------------------------------------------------------------------------- */
  /*                                    React                                   */
  /* -------------------------------------------------------------------------- */

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  /* -------------------------------------------------------------------------- */
  /*                                  Constant                                  */
  /* -------------------------------------------------------------------------- */

  const currentImage = images[currentImageIndex];

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */

  function goToNextImage() {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }

  function goToPreviousImage() {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  if (!images.length) return null;

  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <Button
          size="icon"
          variant="outline"
          className="hidden border-none lg:flex"
          onClick={goToNextImage}
        >
          <IconArrowRight />
        </Button>

        <Image
          alt={`${currentImage.id}-${name}`}
          src={currentImage.image || NO_IMAGE}
          width={400}
          height={400}
        />

        <Button
          size="icon"
          variant="outline"
          className="hidden border-none lg:flex"
          onClick={goToPreviousImage}
        >
          <IconArrowLeft />
        </Button>
      </div>

      <div className="flex justify-center gap-4">
        {images.map((img, index) => {
          if (index === currentImageIndex) return;

          return (
            <Image
              key={img.id}
              alt={`${img.id}-${name}`}
              src={img.image || NO_IMAGE}
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
