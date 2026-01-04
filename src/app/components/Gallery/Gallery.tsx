"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import SquarePattern from "@/src/components/SquarePattern/SquarePattern";
import { IconArrowLeft, IconArrowRight } from "@/src/components/icons";
import IconStart from "@/src/components/icons/IconStart";
import { Button } from "@/src/components/ui/button";

import { IMAGES } from "./constants";

function Gallery() {
  /* -------------------------------------------------------------------------- */
  /*                                  Constant                                  */
  /* -------------------------------------------------------------------------- */

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  /* -------------------------------------------------------------------------- */
  /*                                 React Hook                                 */
  /* -------------------------------------------------------------------------- */

  const [activeImageId, setActiveImageId] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!isMobile || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) return;

        const id = Number((visibleEntry.target as HTMLElement).dataset.id);
        setActiveImageId(id);
      },
      {
        root: containerRef.current,
        threshold: [0.6],
      },
    );

    itemsRef.current.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [isMobile]);

  /* -------------------------------------------------------------------------- */
  /*                                  Function                                  */
  /* -------------------------------------------------------------------------- */

  function handleNextImage() {
    setActiveImageId((prev) => (prev + 1) % IMAGES.length);
  }

  function handlePrevImage() {
    setActiveImageId((prev) =>
      prev === 0 ? IMAGES.length - 1 : (prev - 1) % IMAGES.length,
    );
  }
  return (
    <div className="relative bg-[#F7F7F7] pt-8 pb-13">
      <SquarePattern
        color="bg-[#051F6F]"
        className="top-13 left-10 md:left-1/5"
        size={24}
      />
      <SquarePattern
        color="bg-[#051F6F]"
        className="top-13 right-10 rotate-180 md:right-1/5"
        size={24}
      />

      <div className="mb-15 flex flex-col items-center justify-center gap-6">
        <div className="text-2xl font-bold md:text-4xl">گالری تولیدی ما</div>
        <IconStart size={24} />
      </div>
      <div className="relative">
        <div
          ref={containerRef}
          className="scrollbar-hide flex snap-x snap-proximity gap-6 overflow-x-auto scroll-smooth px-12 md:items-center"
        >
          {!isMobile && (
            <Button className="p-2" onClick={handlePrevImage}>
              <IconArrowRight />
            </Button>
          )}

          {IMAGES.map(({ title, src, id }, index) => (
            <div
              data-id={id}
              key={title + index}
              className={`relative h-137.5 w-76.75 shrink-0 snap-center overflow-hidden rounded-3xl md:shrink ${activeImageId === index ? "md:w-94 md:shrink-0" : ""}`}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
            >
              <Image
                src={src}
                alt={title}
                fill
                className="object-cover"
                sizes="307px"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent" />

              <div
                className={`absolute right-1/2 bottom-3 translate-x-1/2 flex-col gap-4 ${activeImageId === index ? "flex" : "hidden"}`}
              >
                <div className="text-white">{title}</div>

                <div className="flex gap-2">
                  {IMAGES.map((image) => {
                    const isActive = activeImageId === image.id;

                    return (
                      <div
                        key={`${image.title}-${image.id}`}
                        className={`relative overflow-hidden rounded-xl transition-all duration-900 ease-in will-change-transform ${
                          isActive
                            ? "h-19 w-18 -translate-y-1.5 scale-110 opacity-100"
                            : "h-19 w-15.5 translate-y-0 opacity-70"
                        } `}
                      >
                        <Image
                          src={image.src}
                          fill
                          className="object-cover"
                          sizes="62px"
                          alt={image.title}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}

          {!isMobile && (
            <Button className="p-2" onClick={handleNextImage}>
              <IconArrowLeft />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
