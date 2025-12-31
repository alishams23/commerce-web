import { Button } from "@/src/components/ui/button";
import { IconArrowLeft } from "@/src/components/icons";

function BannerTitle() {
  return (
    <div className="mt-12 flex flex-col justify-center md:mt-19">
      <div className="mb-6 px-8 text-center font-[Kalameh] text-[32px] leading-12 md:px-0 md:text-right md:text-5xl">
        جدیدترین کالکشن کیف برنــــــــــــد
      </div>

      <div className="flex flex-col items-center md:items-start">
        <p className="mb-6 max-w-112.5 px-8 text-center text-[14px] text-[#E6E6E6] md:px-0 md:text-right">
          لورم ایپسوم متن ساختگی با تولید سـادگی نامفهوم از صنعـت چاپ، و بـا
          استفاده از طراحان گرافیک است.
        </p>

        <div>
          <Button className="ml-3 gap-1 rounded-2xl">
            کالکشن جدید
            <IconArrowLeft color="white" />
          </Button>

          <Button className="rounded-2xl bg-[#FFFFFF66] px-10 shadow-[inset_0.6px_0.3px_0_rgba(255,255,255,0.65),0_0_0_0.4px_rgba(255,255,255,0.45)]">
            درباره ما
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BannerTitle;
