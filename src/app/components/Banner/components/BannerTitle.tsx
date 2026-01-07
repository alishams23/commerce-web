import { IconDiagonalArrowLeft } from "@/src/components/icons";
import { Button } from "@/src/components/ui/button";

function BannerTitle() {
  return (
    <div className="mt-12 flex flex-col justify-center lg:mt-19">
      <div className="mb-6 px-8 text-center font-[Kalameh] text-[32px] leading-12 lg:px-0 lg:text-right lg:text-5xl">
        جدیدترین کالکشن کیف برنــــــــــــد
      </div>

      <div className="flex flex-col items-center lg:items-start">
        <p className="mb-6 max-w-112.5 px-8 text-center text-[14px] text-[#E6E6E6] lg:px-0 lg:text-right">
          لورم ایپسوم متن ساختگی با تولید سـادگی نامفهوم از صنعـت چاپ، و بـا
          استفاده از طراحان گرافیک است.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Button className="gap-1">
            کالکشن جدید
            <IconDiagonalArrowLeft color="white" />
          </Button>

          <Button variant="glass" className="px-10">
            درباره ما
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BannerTitle;
