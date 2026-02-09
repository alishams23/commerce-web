import { useEffect, useRef, useState } from "react";

function useGalleryActiveImage(imageCount: number) {
  const [activeImageId, setActiveImageId] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  useEffect(() => {
    if (!isMobile || !containerRef.current) return;

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

    itemsRef.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isMobile]);

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
