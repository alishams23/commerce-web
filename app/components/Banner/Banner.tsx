import Image from "next/image";

import { BookSaved, Box, CallCalling, Category, Home2 } from "iconsax-reactjs";

import { IconArrowLeft } from "@/components/icons";
import { Button } from "@/components/ui/button";

function Banner() {
  return (
    <div className="grid grid-cols-4 gap-2 pl-36 [&>*:not(:first-child)]:rounded-3xl">
      <div className="relative col-span-3 row-span-4 flex rounded-l-3xl bg-linear-to-l from-[#051F6F] to-[#679CBC]">
        <div className="flex flex-col gap-6">
          <Button className="hover:bg-primary h-fit max-w-40 gap-1 rounded-xl bg-[#FFFFFFB2] py-2">
            <Home2 variant="Bold" />
            <div className="flex flex-col items-start text-white">
              <div className="text-[12px] font-semibold opacity-70">Home</div>
              <div className="text-[16px] font-semibold">صفحه اصلی</div>
            </div>
          </Button>
          <Button className="hover:bg-primary h-fit max-w-40 gap-1 rounded-xl bg-[#FFFFFFB2] py-2">
            <Category variant="Bold" />
            <div className="flex flex-col items-start text-white">
              <div className="text-[12px] font-semibold opacity-70">
                Category
              </div>
              <div className="text-[16px] font-semibold">دسته بندی</div>
            </div>
          </Button>
          <Button className="hover:bg-primary h-fit max-w-40 gap-1 rounded-xl bg-[#FFFFFFB2] py-2">
            <Box variant="Bold" />
            <div className="flex flex-col items-start text-white">
              <div className="text-[12px] font-semibold opacity-70">
                Products
              </div>
              <div className="text-[16px] font-semibold">محصولات</div>
            </div>
          </Button>
          <Button className="hover:bg-primary h-fit max-w-40 gap-1 rounded-xl bg-[#FFFFFFB2] py-2">
            <CallCalling variant="Bold" />
            <div className="flex flex-col items-start text-white">
              <div className="text-[12px] font-semibold opacity-70">
                Contact Us
              </div>
              <div className="text-[16px] font-semibold">تماس با ما</div>
            </div>
          </Button>
          <Button className="hover:bg-primary h-fit max-w-40 gap-1 rounded-xl bg-[#FFFFFFB2] py-2">
            <BookSaved variant="Bold" />
            <div className="flex flex-col items-start text-white">
              <div className="text-[12px] font-semibold opacity-70">
                About Us
              </div>
              <div className="text-[16px] font-semibold">درباره ما</div>
            </div>
          </Button>
        </div>
        <div className="flex flex-col justify-center text-white">
          <div className="mb-6 font-[Kalameh] text-5xl">
            جدیدترین کالکشن کیف برنــــــــــــد
          </div>
          <div>
            <p className="mb-6 max-w-112.5 text-[14px] text-[#E6E6E6]">
              لورم ایپسوم متن ساختگی با تولید سـادگی نامفهوم از صنعـت چاپ، و بـا
              استفاده از طراحان گرافیک است.
            </p>
            <Button className="ml-3 rounded-2xl">
              <div>کالکشن جدید</div>
              <IconArrowLeft color="white" />
            </Button>
            <Button className="rounded-2xl bg-[#FFFFFF66] px-10 shadow-[inset_0.6px_0.3px_0_rgba(255,255,255,0.65),0_0_0_0.4px_rgba(255,255,255,0.45)]">
              درباره ما
            </Button>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 flex h-26.25 items-center overflow-hidden rounded-3xl bg-[#EFEFEF33] pr-5 text-white shadow-[inset_0.5px_0.3px_0_rgba(255,255,255,0.65),0_0_0_0.4px_rgba(255,255,255,0.45)]">
          <div className="text-primary text-[40px] font-black [-webkit-text-stroke:1px_white]">
            50%
          </div>
          <div className="pr-2 text-[24px] font-semibold">
            حراج بزرگ در راه است...
          </div>
          <div className="mr-3 flex h-26.25 w-51.25 items-center overflow-hidden rounded-r-3xl">
            <Image
              alt="off-sale"
              src="/asset/bags-black-and-white.jpg"
              width={256}
              height={253}
              className="grayscale"
            />
          </div>
        </div>
      </div>

      <div className="bg-linear-to-l from-[#4D2F63] to-[#9C5FC9]">2</div>
      <div className="bg-linear-to-l from-[#E08544] to-[#FF3535]">3</div>
      <div className="bg-linear-to-l from-[#0E1F55] to-[#6E92FF]">4</div>
      <div className="bg-linear-to-l from-[#09A113] to-[#9DFF68]">5</div>
    </div>
  );
}

export default Banner;
