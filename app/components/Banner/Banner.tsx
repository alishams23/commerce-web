import Image from "next/image";

import { BookSaved, Box, CallCalling, Category, Home2 } from "iconsax-reactjs";

import { IconArrowLeft } from "@/components/icons";
import { Button } from "@/components/ui/button";

function Banner() {
  return (
    <div className="grid gap-2 text-white md:grid-cols-4 md:pl-36 [&>*:not(:first-child)]:rounded-3xl">
      <div className="from-primary relative z-10 row-span-4 flex flex-col gap-12 rounded-3xl bg-linear-to-l to-[#679CBC] px-1.5 pb-3 md:col-span-3 md:flex-row md:gap-16 md:rounded-l-3xl md:px-0 md:pb-30.5 [&>*:not(:first-child)]:z-30">
        <div className="bg-primary absolute -right-90 z-20 hidden h-136.5 w-155.25 rounded-full border-60 border-[#1C3779] md:block"></div>

        {/* Button */}
        <div className="mt-19 hidden flex-col gap-6 md:flex">
          <Button className="hover:bg-primary mr-25 h-fit w-40 justify-start gap-1 rounded-xl bg-[#FFFFFFB2] py-2 transition-transform duration-300 ease-out hover:-translate-1 hover:shadow-[0_10px_5px_0_rgba(0,0,0,0.15)]">
            <Home2 variant="Bold" />
            <div className="flex flex-col items-start">
              <div className="text-[12px] font-semibold opacity-70">Home</div>
              <div className="text-[16px] font-semibold">صفحه اصلی</div>
            </div>
          </Button>
          <Button className="hover:bg-primary mr-37.5 h-fit w-40 justify-start gap-1 rounded-xl bg-[#FFFFFFB2] py-2 transition-transform duration-300 ease-out hover:-translate-1 hover:shadow-[0_10px_5px_0_rgba(0,0,0,0.15)]">
            <Category variant="Bold" />
            <div className="flex flex-col items-start">
              <div className="text-[12px] font-semibold opacity-70">
                Category
              </div>
              <div className="text-[16px] font-semibold">دسته بندی</div>
            </div>
          </Button>
          <Button className="hover:bg-primary mr-50 h-fit w-40 justify-start gap-1 rounded-xl bg-[#FFFFFFB2] py-2 transition-transform duration-300 ease-out hover:-translate-1 hover:shadow-[0_10px_5px_0_rgba(0,0,0,0.15)]">
            <Box variant="Bold" />
            <div className="flex flex-col items-start">
              <div className="text-[12px] font-semibold opacity-70">
                Products
              </div>
              <div className="text-[16px] font-semibold">محصولات</div>
            </div>
          </Button>
          <Button className="hover:bg-primary mr-37.5 h-fit w-40 justify-start gap-1 rounded-xl bg-[#FFFFFFB2] py-2 transition-transform duration-300 ease-out hover:-translate-1 hover:shadow-[0_10px_5px_0_rgba(0,0,0,0.15)]">
            <CallCalling variant="Bold" />
            <div className="flex flex-col items-start">
              <div className="text-[12px] font-semibold opacity-70">
                Contact Us
              </div>
              <div className="text-[16px] font-semibold">تماس با ما</div>
            </div>
          </Button>
          <Button className="hover:bg-primary mr-25 h-fit w-40 justify-start gap-1 rounded-xl bg-[#FFFFFFB2] py-2 transition-transform duration-300 ease-out hover:-translate-1 hover:shadow-[0_10px_5px_0_rgba(0,0,0,0.15)]">
            <BookSaved variant="Bold" />
            <div className="flex flex-col items-start">
              <div className="text-[12px] font-semibold opacity-70">
                About Us
              </div>
              <div className="text-[16px] font-semibold">درباره ما</div>
            </div>
          </Button>
        </div>
        {/* Title */}
        <div className="mt-12 flex flex-col justify-center md:mt-19 md:px-0">
          <div className="mb-6 px-8 text-center font-[Kalameh] text-[32px] leading-12 md:text-right md:text-5xl">
            جدیدترین کالکشن کیف برنــــــــــــد
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="mb-6 max-w-112.5 px-8 text-center text-[14px] text-[#E6E6E6] md:text-right">
              لورم ایپسوم متن ساختگی با تولید سـادگی نامفهوم از صنعـت چاپ، و بـا
              استفاده از طراحان گرافیک است.
            </p>
            <div className="">
              <Button className="ml-3 gap-1 rounded-2xl">
                <div>کالکشن جدید</div>
                <IconArrowLeft color="white" />
              </Button>
              <Button className="rounded-2xl bg-[#FFFFFF66] px-10 shadow-[inset_0.6px_0.3px_0_rgba(255,255,255,0.65),0_0_0_0.4px_rgba(255,255,255,0.45)]">
                درباره ما
              </Button>
            </div>
          </div>
        </div>
        {/* Off sale card */}
        <div className="bottom-4 left-4 flex h-26.25 overflow-hidden rounded-3xl bg-[#EFEFEF33] pr-5 shadow-[inset_0.5px_0.3px_0_rgba(255,255,255,0.65),0_0_0_0.4px_rgba(255,255,255,0.45)] md:absolute">
          <div className="flex flex-col items-start justify-center md:flex-row md:items-center md:gap-2">
            <div className="text-primary text-2xl font-black [-webkit-text-stroke:1px_white] md:text-[40px]">
              50%
            </div>
            <div className="text-[15px] font-semibold md:text-2xl">
              حراج بزرگ در راه است...
            </div>
          </div>
          <div className="mr-3 flex h-26.25 w-41 items-center overflow-hidden rounded-r-3xl md:w-51.25">
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

      <div className="flex items-center justify-between bg-linear-to-l from-[#4D2F63] to-[#9C5FC9] px-4 py-3 md:px-6 md:py-0">
        <div className="flex flex-col justify-center gap-2">
          <div className="text-2xl font-bold">از تولید تا مصرف</div>
          <div className="text-[12px] md:text-sm">
            خرید از ما یعنی خرید مستقیم از کارخانه
          </div>
          <Button className="h-8 w-fit rounded-xl bg-[#FFFFFF66] py-0 shadow-[inset_0.6px_0.3px_0_rgba(255,255,255,0.65),0_0_0_0.4px_rgba(255,255,255,0.45)]">
            مشاهده
          </Button>
        </div>
        <Image
          alt="1"
          src="/asset/bag1.png"
          width={90}
          height={90}
          className="h-fit"
        />
      </div>
      <div className="flex items-center justify-between bg-linear-to-l from-[#E08544] to-[#FF3535] px-4 py-3 md:px-6 md:py-0">
        <div className="flex flex-col justify-center gap-2">
          <div className="text-2xl font-bold">کیف مدرسه</div>
          <div className="text-[12px] md:text-sm">خرید کیف مدرسه با کیفیت</div>
          <Button className="h-8 w-fit rounded-xl bg-[#FFFFFF66] py-0 shadow-[inset_0.6px_0.3px_0_rgba(255,255,255,0.65),0_0_0_0.4px_rgba(255,255,255,0.45)]">
            مشاهده
          </Button>
        </div>
        <Image
          alt="2"
          src="/asset/bag2.png"
          width={90}
          height={90}
          className="h-fit"
        />
      </div>
      <div className="flex items-center justify-between bg-linear-to-l from-[#0E1F55] to-[#6E92FF] px-4 py-3 md:px-6 md:py-0">
        <div className="flex flex-col justify-center gap-2">
          <div className="text-2xl font-bold">آماده سفر باش!</div>
          <div className="text-[12px] md:text-sm">کیف سفرتو از ما بیگیر</div>
          <Button className="h-8 w-fit rounded-xl bg-[#FFFFFF66] py-0 shadow-[inset_0.6px_0.3px_0_rgba(255,255,255,0.65),0_0_0_0.4px_rgba(255,255,255,0.45)]">
            مشاهده
          </Button>
        </div>
        <Image
          alt="3"
          src="/asset/bag3.png"
          width={90}
          height={90}
          className="h-fit"
        />
      </div>
      <div className="flex items-center justify-between bg-linear-to-l from-[#09A113] to-[#9DFF68] px-4 py-3 md:px-6 md:py-0">
        <div className="flex flex-col justify-center gap-2">
          <div className="text-2xl font-bold">کیف های طرح دار</div>
          <div className="text-[12px] md:text-sm">
            جدید ترین کیف های طرح دار دنیا!
          </div>
          <Button className="h-8 w-fit rounded-xl bg-[#FFFFFF66] py-0 shadow-[inset_0.6px_0.3px_0_rgba(255,255,255,0.65),0_0_0_0.4px_rgba(255,255,255,0.45)]">
            مشاهده
          </Button>
        </div>
        <Image
          alt="4"
          src="/asset/bag4.png"
          width={90}
          height={90}
          className="h-fit"
        />
      </div>
    </div>
  );
}

export default Banner;
