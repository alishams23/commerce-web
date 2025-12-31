import { IconInstagram } from "@/src/components/icons";
import { Button } from "@/src/components/ui/button";
import { ArrowLeft, LikeShapes, Location } from "iconsax-reactjs";

function FactoryInfo() {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-30">
      <div className="flex flex-col gap-2 md:w-1/2 md:gap-6">
        <div className="text-primary text-[20px] font-extrabold md:text-[32px]">
          کارخانه <span className="text-[#5A6E99]">کیف سازی ما</span>
        </div>
        <div className="text-justify text-[14px] leading-8 text-[#4D555A] md:text-[16px]">
          لورم ایپسوم متن ساختگی با تولید سـادگی نامفهوم از صنعـت چاپ، و بـا
          استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سـادگی
          نامفهوم از صنعـت چاپ، و بـا استفاده از طراحان گرافیک است.لورم ایپسوم
          متن ساختگی با تولید سـادگی نامفهوم از صنعـت چاپ، و بـا استفاده از
          طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سـادگی نامفهوم از
          صنعـت چاپ، و بـا استفاده از طراحان گرافیک است.
        </div>
        <div className="flex gap-6 self-center">
          <Button className="rounded-full bg-[#679CBC] pr-1 pl-2">
            <span className="rounded-full bg-white px-3 py-1 font-light text-black">
              گوگل مپ
            </span>
            <Location className="text-primary" />
          </Button>
          <Button className="rounded-full pr-1 pl-2">
            <span className="rounded-full bg-white px-3 py-1 font-light text-black">
              اطلاعات بیشتر
            </span>
            <ArrowLeft />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2 md:w-1/2 md:gap-4">
        <div className="bg-primary h-74.5 rounded-[28px]"></div>
        <div className="flex flex-col items-center justify-between gap-2 rounded-full bg-[#679CBC] px-6 py-3 text-white md:flex-row md:py-5">
          <div className="flex items-center gap-1 md:gap-2">
            <LikeShapes variant="Bold" className="size-6 md:size-12" />
            <div className="text-lg">ما را در اینستگرام دنبال کنید.</div>
          </div>
          <Button className="text-primary rounded-full bg-white font-semibold">
            <div>صفحه اینستاگرام</div>
            <IconInstagram color="#051F6F" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FactoryInfo;
