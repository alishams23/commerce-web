"use client";

import { IconArrowLeft, IconArrowRight } from "@/src/components/icons";
import { Button } from "@/src/components/ui/button";

import useGalleryActiveImage from "../hooks/useGalleryActiveImage";
import GalleryItem from "./GalleryItem";
import { IMAGES } from "../constants";

function GallerySlider() {
  /* -------------------------------------------------------------------------- */
  /*                             Gallery Active Imag                            */
  /* -------------------------------------------------------------------------- */
  const { isMobile, activeImageId, containerRef, itemsRef, next, prev } =
    useGalleryActiveImage(IMAGES.length);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="scrollbar-hide flex snap-x snap-proximity gap-6 overflow-x-auto scroll-smooth px-12 lg:items-center"
      >
        {!isMobile && (
          <Button className="p-2" size="icon" onClick={prev}>
            <IconArrowRight color="white" />
          </Button>
        )}

        {IMAGES.map((image, index) => (
          <GalleryItem
            key={image.id}
            image={image}
            index={index}
            activeIndex={activeImageId}
            images={IMAGES}
            setRef={(el, i) => {
              if (el) itemsRef.current[i] = el;
            }}
          />
        ))}

        {!isMobile && (
          <Button className="p-2" size="icon" onClick={next}>
            <IconArrowLeft color="white" />
          </Button>
        )}
      </div>
    </div>
  );
}

export default GallerySlider;
