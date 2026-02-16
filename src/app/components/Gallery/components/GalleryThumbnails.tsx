import Image from "next/image";
import { cn } from "@/lib/utils";
import { TGalleryResponse } from "@/lib/API/gallery";

type TGalleryThumbnailsProps = {
  images: TGalleryResponse[];
  activeId: number;
};

function GalleryThumbnails({ images, activeId }: TGalleryThumbnailsProps) {
  return (
    <div className="flex gap-2">
      {images.map((image, index) => {
        const isActive = activeId === index;

        return (
          <div
            key={image.id}
            className={cn(
              "relative overflow-hidden rounded-xl transition-all duration-900 ease-in will-change-transform",
              isActive
                ? "h-19 w-18 -translate-y-1.5 scale-110 opacity-100"
                : "h-19 w-15.5 opacity-70",
            )}
          >
            <Image
              src={image.image}
              fill
              sizes="62px"
              // TODO: Change the alt
              alt={`تولیدی کیف های کارتونی-${image.id}`}
              className="object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}

export default GalleryThumbnails;
