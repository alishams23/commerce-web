import Image from "next/image";
import { GalleryImage } from "../constants";

type TGalleryThumbnailsProps = {
  images: GalleryImage[];
  activeId: number;
};

function GalleryThumbnails({ images, activeId }: TGalleryThumbnailsProps) {
  return (
    <div className="flex gap-2">
      {images.map((image) => {
        const isActive = activeId === image.id;

        return (
          <div
            key={image.id}
            className={`relative overflow-hidden rounded-xl transition-all duration-900 ease-in will-change-transform ${
              isActive
                ? "h-19 w-18 -translate-y-1.5 scale-110 opacity-100"
                : "h-19 w-15.5 opacity-70"
            }`}
          >
            <Image
              src={image.src}
              fill
              sizes="62px"
              alt={image.title}
              className="object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}

export default GalleryThumbnails;
