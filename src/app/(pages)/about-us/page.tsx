"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { ArrowLeft, QuoteDown } from "iconsax-reactjs";

import { cn } from "@/lib/utils";

import FactoryInfo from "@/components/FactoryInfo/FactoryInfo";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { Button } from "@/components/ui/button";

function AboutUsPage() {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="mx-12 lg:mx-36">
      <Breadcrumbs items={[{ href: "", name: "درباره‌ما" }]} />

      <div className="flex flex-col">
        <div>
          <div className="font-extrabold">درباره ما</div>
          <div className="text-subtitle mt-2 text-[14px]">
            آنچه باید درباره ما بدانید
          </div>
        </div>

        <FactoryInfo />

        <div className="mt-6 flex flex-col gap-6 lg:mt-12 lg:flex-row lg:gap-30">
          <div>
            <div>
              <div className="font-extrabold lg:text-2xl">محبت کاربران</div>
              <div className="text-subtitle mt-2 text-[14px]">
                محبت شما کاربران نسبت به سایت ما
              </div>
            </div>

            <div className="bg-muted mt-4 flex flex-col rounded-xl p-4">
              <div className="font-extrabold">دیدگاه تیم ما</div>

              <p className="text-subtitle mt-2 text-[14px] leading-8">
                نظرات شما در بهبود روند خدمات ما کمک بزرگی است و تیم بزرگ ما
                منتظر شنیدن تمامی انتقادات و پیشنهادات شما هست.با نظرات خود به
                ما در این زمینه کمک کنید.
              </p>

              <Button className="mt-6 gap-4 self-end">
                <div className="text-[14px] font-semibold">ثبت دیدگاه</div>
                <div className="relative z-0 rounded-full border p-1">
                  <ArrowLeft size={13} variant="Broken" />
                  <div className="absolute top-0 left-2 -z-10 h-full w-full rounded-full bg-[#FFFFFF4D]" />
                </div>
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {[1, 2, 3].map((item, index) => (
              <div
                key={item}
                className={cn(
                  "border-muted flex gap-1.5 rounded-xl border-2 p-2 transition-all duration-1000",
                  index === activeIndex && "scale-100 shadow-lg",
                  index !== activeIndex && "mx-6 opacity-50",
                )}
              >
                <div className="border-muted h-fit rounded-xl border p-1.5 lg:p-2">
                  <Image
                    alt=""
                    src="/asset/avatar/avatar-1.jpg"
                    width={45}
                    height={45}
                    className={cn(
                      "h-11.25 w-11.25 rounded-md lg:h-18.75 lg:w-18.75",
                      index !== activeIndex && "opacity-50",
                    )}
                  />
                </div>
                <div
                  className={cn(
                    "w-full",
                    index !== activeIndex && "opacity-50",
                  )}
                >
                  <div className="text-primary flex justify-between">
                    <div className="text-[14px] font-semibold lg:text-lg lg:font-extrabold">
                      سعید مظفری
                    </div>
                    <QuoteDown variant="Bold" />
                  </div>
                  <p className="text-subtitle mt-2 line-clamp-2 text-[10px] lg:text-[14px]">
                    خیلی مشتری مداری کردن و باهام حتی تماس گرفتن از خرید تشکر
                    کردند خرید رو برای عموم مردم لذت بخش کرده
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
