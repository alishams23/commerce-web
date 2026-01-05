import Image from "next/image";

import GalleryThumbnails from "./GalleryThumbnails";
import { GalleryImage } from "../constants";

type TGalleryItemProps = {
  image: GalleryImage;
  index: number;
  activeIndex: number;
  setRef: (el: HTMLDivElement | null, index: number) => void;
  images: GalleryImage[];
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
      data-id={image.id}
      ref={(el) => setRef(el, index)}
      className={`relative h-137.5 w-76.75 shrink-0 snap-center overflow-hidden rounded-3xl md:shrink ${
        isActive && "md:w-94 md:shrink-0"
      }`}
    >
      <Image
        src={image.src}
        alt={image.title}
        fill
        sizes="307px"
        className="object-cover"
      />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent" />

      {isActive && (
        <div className="absolute right-1/2 bottom-3 flex translate-x-1/2 flex-col gap-4">
          <div className="text-white">{image.title}</div>
          <GalleryThumbnails images={images} activeId={activeIndex} />
        </div>
      )}
    </div>
  );
}

export default GalleryItem;
