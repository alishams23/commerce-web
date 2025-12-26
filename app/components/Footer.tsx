"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  BagTick2,
  Call,
  I24Support,
  Location,
  ShieldTick,
  TruckFast,
} from "iconsax-reactjs";
import Image from "next/image";
import { useCallback, useRef } from "react";

const BADGES = [
  { src: "/Footer/namad.png", alt: "نماد" },
  { src: "/Footer/meli-badge.png", alt: "ملی‌نماد" },
  { src: "/Footer/kasbokar.png", alt: "کسب‌و‌کار" },
  { src: "/Footer/namad.png", alt: "نماد2" },
  { src: "/Footer/meli-badge.png", alt: "2ملی‌نماد" },
] as const;

function Footer() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePrev = useCallback(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.querySelector("div")?.offsetWidth ?? 0;
      const gap = 12;
      const scrollAmount = itemWidth + gap;
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  }, []);

  const handleNext = useCallback(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.querySelector("div")?.offsetWidth ?? 0;
      const gap = 12;
      const scrollAmount = itemWidth + gap;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="from-primary-dark to-primary flex flex-col rounded-t-2xl bg-linear-to-b text-white">
      <div className="flex justify-between gap-16 px-8 pt-8 pb-6">
        {/* About */}
        <div className="flex max-w-[38%] flex-col gap-4 pr-8">
          <div className="flex gap-2">
            <Image
              alt="کیف ابراشیم"
              src={"/logo-white.svg"}
              width={27}
              height={34.5}
            />
            <div className="content-end text-2xl leading-2 font-black">
              کیف ابراشیم
            </div>
          </div>

          <p className="text-sm font-normal">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی شصت و سه درصد گذشته
            حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
            افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
            خلاقی.
          </p>

          {/* Slider */}
          <div className="flex items-center gap-3">
            <Button
              onClick={handlePrev}
              className="h-full shrink-0 bg-[#F7F7F7] px-1 transition-opacity hover:opacity-80"
              aria-label="Previous badge"
            >
              <ArrowRight color="gray" variant="Bold" size={20} />
            </Button>
            <div
              ref={scrollContainerRef}
              className="scrollbar-hide flex flex-1 gap-3 overflow-x-auto"
            >
              {BADGES.map((badge, index) => (
                <div
                  key={badge.src}
                  className="shrink-0 rounded-2xl bg-[#F7F7F7] p-5"
                >
                  <Image
                    alt={badge.alt}
                    src={badge.src}
                    width={64}
                    height={64}
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
            <Button
              onClick={handleNext}
              className="h-full shrink-0 bg-[#F7F7F7] px-1 transition-opacity hover:opacity-80"
              aria-label="Next badge"
            >
              <ArrowLeft color="gray" variant="Bold" size={20} />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex gap-6">
            <div className="flex flex-col gap-4">
              <div className="text-lg font-black">دسترسی سریع</div>
              <div className="font-normals text-sm">دسته بندی</div>
              <div className="text-sm font-normal">محصولات تخفیف‌ دار</div>
              <div className="text-sm font-normal">تماس باما</div>
              <div className="text-sm font-normal">درباره ما</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-lg font-black">دسترسی سریع</div>
              <div className="font-normals text-sm">دسته بندی</div>
              <div className="text-sm font-normal">محصولات تخفیف‌ دار</div>
              <div className="text-sm font-normal">تماس باما</div>
              <div className="text-sm font-normal">درباره ما</div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <Location variant="Bold" />
              <div className="font-semibold">آدرس</div>
            </div>
            <div className="pr-7.5 text-sm font-normal">
              آدرس فروشگاه: یزد ، بلوار ۱۷ شهریور ، رو به روی سینما جام جم
            </div>
            <div className="pr-7.5 text-sm font-normal">
              آدرس کارخانه: یزد ، شهرک صنعتی ، بلوک بهار
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2 flex min-w-36 flex-col items-center justify-center gap-1 rounded-2xl bg-[#F7F7F733] py-3.5 font-normal">
            <BagTick2 variant="Bold" size={24} />
            <div className="text-sm">تحویل اکسپرس</div>
          </div>
          <div className="col-span-2 flex min-w-36 flex-col items-center justify-center gap-1 rounded-2xl bg-[#F7F7F733] py-3.5 font-normal">
            <I24Support variant="Bold" size={24} />
            <div className="text-sm">مشاوره و پشتیبانی</div>
          </div>
          <div className="col-span-2 flex min-w-36 flex-col items-center justify-center gap-1 rounded-2xl bg-[#F7F7F733] py-3.5 font-normal">
            <TruckFast variant="Bold" size={24} />
            <div className="text-sm">ارسال رایگان</div>
          </div>
          <div className="col-span-2 flex min-w-36 flex-col items-center justify-center gap-1 rounded-2xl bg-[#F7F7F733] py-3.5 font-normal">
            <ShieldTick variant="Bold" size={24} />
            <div className="text-sm">گارانتی بازگشت وجه</div>
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <Call variant="Bold" />
            <div>شماره تماس پشتیبانی</div>
            <div className="self-end text-sm">۰۳۵-۸۲۴۹۸۳۴</div>
            <div className="self-end text-sm">۰۹۱۳۵۶۷۲۳۴۳</div>
          </div>
          <div className="flex h-28 flex-col items-center justify-between gap-1 rounded-2xl bg-[#F7F7F733] py-3.5 font-normal">
            <Image
              alt="telegram"
              src={"/Footer/telegram-icon.svg"}
              width={24}
              height={24}
            />
            <div className="sideways-lr text-sm">تلگرام</div>
          </div>
          <div className="flex h-28 flex-col items-center justify-between gap-1 rounded-2xl bg-[#F7F7F733] py-3.5 font-normal">
            <Image
              alt="instagram"
              src={"/Footer/instagram-icon.svg"}
              width={24}
              height={24}
            />
            <div className="sideways-lr text-sm">اینستاگرام</div>
          </div>
        </div>
      </div>
      <hr className="text-[#B0B0B0]" />
      <p className="py-3 text-center font-medium text-[#B0B0B0]">
        تمامی حقوق این وبسایت متعلق به آقای ابریشم میباشد
      </p>
    </div>
  );
}

export default Footer;
