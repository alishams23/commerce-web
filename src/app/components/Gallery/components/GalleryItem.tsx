import Image from "next/image";

import { cn } from "@/lib/utils";
import { TGalleryResponse } from "@/lib/API/Home/gallery";

import GalleryThumbnails from "./GalleryThumbnails";

type TGalleryItemProps = {
  image: TGalleryResponse;
  index: number;
  activeIndex: number;
  setRef: (el: HTMLDivElement | null, index: number) => void;
  images: TGalleryResponse[];
};

function GalleryItem({
  image,
  index,
  activeIndex,
  setRef,
  images,
}: TGalleryItemProps) {
  /* -------------------------------------------------------------------------- */
  /*                                  Constant                                  */
  /* -------------------------------------------------------------------------- */

  const isActive = activeIndex === index;

  return (
    <div
      data-id={index}
      ref={(el) => setRef(el, index)}
      className={cn(
        "relative h-137.5 w-76.75 shrink-0 snap-center overflow-hidden rounded-3xl lg:shrink",
        isActive && "lg:w-94 lg:shrink-0",
      )}
    >
      <Image
        src={image.image}
        // TODO: Change the alt
        alt={`Gallery image ${image.id}`}
        fill
        sizes="307px"
        className="object-cover"
      />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent" />

      {isActive && (
        <div className="absolute right-1/2 bottom-3 flex translate-x-1/2 flex-col gap-4">
          <div className="text-white">تولیدی کیف های کارتونی</div>
          <GalleryThumbnails images={images} activeId={activeIndex} />
        </div>
      )}
    </div>
  );
}

export default GalleryItem;
