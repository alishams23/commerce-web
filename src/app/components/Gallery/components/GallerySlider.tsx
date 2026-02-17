"use client";

import { useQuery } from "@tanstack/react-query";

import { getGalleryImages } from "@/lib/API/Home/Gallery";

import { IconArrowLeft, IconArrowRight } from "@/components/icons";
import { Button } from "@/components/ui/button";

import useGalleryActiveImage from "../hooks/useGalleryActiveImage";
import GalleryItem from "./GalleryItem";

function GallerySlider() {
  /* -------------------------------------------------------------------------- */
  /*                                 React Query                                */
  /* -------------------------------------------------------------------------- */

  const NEW_PRODUCTS_QUERY_KEY = ["gallery"];
  const { data, isLoading, isError } = useQuery({
    queryKey: NEW_PRODUCTS_QUERY_KEY,
    queryFn: getGalleryImages,
  });

  /* -------------------------------------------------------------------------- */
  /*                             Gallery Active Imag                            */
  /* -------------------------------------------------------------------------- */

  const { isMobile, activeImageId, containerRef, itemsRef, next, prev } =
    useGalleryActiveImage(data);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="scrollbar-hide flex snap-x snap-proximity gap-6 overflow-x-auto scroll-smooth px-12 lg:items-center lg:justify-center"
      >
        {!isMobile && (
          <Button className="p-2" size="icon" onClick={prev}>
            <IconArrowRight color="white" />
          </Button>
        )}

        {!isLoading &&
          !isError &&
          data!.map((image, index) => (
            <GalleryItem
              key={image.id}
              image={image}
              index={index}
              activeIndex={activeImageId}
              images={data!}
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
