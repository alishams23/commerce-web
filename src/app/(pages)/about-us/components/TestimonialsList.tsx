"use client";

import { TESTIMONIALS } from "../constants";
import useAutoSlider from "../hooks/useAutoSlider";
import TestimonialCard from "./TestimonialCard";

function TestimonialsList() {
  /* -------------------------------------------------------------------------- */
  /*                                 Auto Slider                                */
  /* -------------------------------------------------------------------------- */

  const activeIndex = useAutoSlider(TESTIMONIALS.length);

  return (
    <div className="flex flex-col gap-2">
      {TESTIMONIALS.map(({ avatar, name, text }, index) => (
        <TestimonialCard
          key={name}
          avatar={avatar}
          name={name}
          text={text}
          isActive={index === activeIndex}
        />
      ))}
    </div>
  );
}

export default TestimonialsList;
