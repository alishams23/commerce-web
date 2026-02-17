import { TGalleryResponse } from "@/lib/API/Home/Gallery";
import { useEffect, useRef, useState } from "react";

function useGalleryActiveImage(data: TGalleryResponse[] | undefined) {
  /* -------------------------------------------------------------------------- */
  /*                                  constants                                 */
  /* -------------------------------------------------------------------------- */

  const imageCount = data?.length ?? 4;
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  /* -------------------------------------------------------------------------- */
  /*                                    React                                   */
  /* -------------------------------------------------------------------------- */

  const [activeImageId, setActiveImageId] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Only run on mobile and when we have DOM + items
    if (!isMobile || !containerRef.current || !itemsRef.current.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const id = Number((visible.target as HTMLElement).dataset.id);
        setActiveImageId(id);
      },
      {
        root: containerRef.current,
        threshold: [0.6],
      },
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    // Cleanup on unmount / when data changes
    return () => observer.disconnect();
  }, [isMobile, data]);

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */

  function next() {
    setActiveImageId((prev) => (prev + 1) % imageCount);
  }

  function prev() {
    setActiveImageId((prev) => (prev === 0 ? imageCount - 1 : prev - 1));
  }

  return {
    isMobile,
    activeImageId,
    containerRef,
    itemsRef,
    next,
    prev,
  };
}
export default useGalleryActiveImage;
