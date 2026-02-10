import { useEffect, useState } from "react";

function useAutoSlider(length: number, delay = 5000) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % length);
    }, delay);

    return () => clearInterval(interval);
  }, [length, delay]);

  return activeIndex;
}

export default useAutoSlider;
