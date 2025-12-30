import { IconInstagram } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ArrowLeft, LikeShapes, Location } from "iconsax-reactjs";

function FactoryInfo() {
  return (
    <div className="flex gap-30">
      <div className="flex w-1/2 flex-col gap-6">
        <div className="text-primary text-[32px] font-extrabold">
          کارخانه <span className="text-[#5A6E99]">کیف سازی ما</span>
        </div>
        <div className="text-justify leading-8 text-[#4D555A]">
          لورم ایپسوم متن ساختگی با تولید سـادگی نامفهوم از صنعـت چاپ، و بـا
          استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سـادگی
          نامفهوم از صنعـت چاپ، و بـا استفاده از طراحان گرافیک است.لورم ایپسوم
          متن ساختگی با تولید سـادگی نامفهوم از صنعـت چاپ، و بـا استفاده از
          طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سـادگی نامفهوم از
          صنعـت چاپ، و بـا استفاده از طراحان گرافیک است.
        </div>
        <div className="flex gap-6">
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

      <div className="flex w-1/2 flex-col gap-4">
        <div className="bg-primary h-74.5 rounded-[28px]"></div>
        <div className="flex items-center justify-between rounded-full bg-[#679CBC] px-6 py-5 text-white">
          <div className="flex items-center gap-2">
            <LikeShapes variant="Bold" size={48} />
            <div className="text-lg font-semibold"></div>
            ما را در اینستگرام دنبال کنید.
          </div>
          <Button className="text-primary rounded-full bg-white">
            <div>صفحه اینستاگرام</div>
            <IconInstagram color="#051F6F" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FactoryInfo;
