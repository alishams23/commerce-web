"use client";

import Image from "next/image";

import useBadgeSlider from "../../../hooks/useBadgeSlider";

import { Button } from "@/src/components/ui/button";
import { IconArrowLeft, IconArrowRight } from "@/src/components/icons";

const CATEGORIES: { title: string; src: string }[] = [
  {
    title: "کیف پینترستی",
    src: "/asset/bag-cat/bag-cat-3.png",
  },
  {
    title: "کیف پسرانه",
    src: "/asset/bag-cat/bag-cat-4.png",
  },
  {
    title: "کیف زنانه",
    src: "/asset/bag-cat/bag-cat-1.png",
  },
  {
    title: "کیف ترستی3",
    src: "/asset/bag-cat/bag-cat-3.png",
  },
  {
    title: "کیف پارچه ای",
    src: "/asset/bag-cat/bag-cat-5.png",
  },
  {
    title: "کیف ساده",
    src: "/asset/bag-cat/bag-cat-2.png",
  },
  {
    title: "کیف پینترس2",
    src: "/asset/bag-cat/bag-cat-3.png",
  },
];

function Category() {
  /* -------------------------------------------------------------------------- */
  /*                                Badge Slider                                */
  /* -------------------------------------------------------------------------- */

  const { scrollContainerRef, handlePrev, handleNext } = useBadgeSlider();

  return (
    <div className="bg-primary relative flex flex-col items-center gap-8 rounded-4xl py-7 text-white md:flex-row md:gap-21 md:px-9.5 md:py-4">
      <div className="absolute top-3 left-6 flex w-5 flex-col md:top-1/2 md:left-0">
        <div className="h-2.5 w-2.5 self-end bg-[#F7F7F766]" />
        <div className="h-2.5 w-2.5 bg-[#F7F7F766]" />
        <div className="h-2.5 w-2.5 self-end bg-[#F7F7F766]" />
      </div>
      <div className="absolute top-25 right-6 flex w-5 flex-col md:hidden">
        <div className="h-2.5 w-2.5 bg-[#F7F7F766]" />
        <div className="h-2.5 w-2.5 self-end bg-[#F7F7F766]" />
        <div className="h-2.5 w-2.5 bg-[#F7F7F766]" />
      </div>

      <div className="flex shrink-0 flex-col items-center gap-6 md:items-start md:gap-4">
        <div className="text-lg font-light">
          <span className="font-bold md:ml-1">دسته بندی</span> محصولات
        </div>
        <Button className="w-fit rounded-2xl border border-white bg-[#679CBC]">
          مشاهده همه
        </Button>
      </div>

      <div className="flex w-full overflow-hidden md:pl-6">
        <Button
          onClick={handleNext}
          className="hidden h-29.5 shrink-0 rounded-xl bg-[#F7F7F759] px-2 md:flex"
        >
          <IconArrowRight color="white" />
        </Button>

        <div
          ref={scrollContainerRef}
          className="scrollbar-hide flex w-full gap-2 overflow-x-auto px-4 text-[#3D3B3B] md:px-2"
        >
          {CATEGORIES.map(({ title, src }) => (
            <div
              key={title}
              className="flex h-29.5 w-24 shrink-0 flex-col items-center gap-2 rounded-2xl bg-white md:w-31"
            >
              <Image
                src={src}
                alt={title}
                width={100}
                className="h-17.5 w-17.5"
                height={100}
              />
              <div>{title}</div>
            </div>
          ))}
        </div>

        <Button
          onClick={handlePrev}
          className="hidden h-29.5 shrink-0 rounded-xl bg-[#F7F7F759] px-2 md:flex"
        >
          <IconArrowLeft color="white" />
        </Button>
      </div>

      <div className="flex gap-2 md:hidden">
        {CATEGORIES.map((item) => (
          <div key={item.title} className="h-2 w-2 bg-white"></div>
        ))}
      </div>
    </div>
  );
}

export default Category;
