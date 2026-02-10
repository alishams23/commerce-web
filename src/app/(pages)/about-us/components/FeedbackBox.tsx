import { Button } from "@/components/ui/button";
import { ArrowLeft } from "iconsax-reactjs";

function FeedbackBox() {
  return (
    <div className="bg-muted mt-4 flex flex-col rounded-xl p-4">
      <div className="font-extrabold">دیدگاه تیم ما</div>

      <p className="text-subtitle mt-2 text-[14px] leading-8">
        نظرات شما در بهبود روند خدمات ما کمک بزرگی است و تیم بزرگ ما منتظر شنیدن
        تمامی انتقادات و پیشنهادات شما هست.با نظرات خود به ما در این زمینه کمک
        کنید.
      </p>

      <Button className="mt-6 gap-4 self-end">
        <div className="text-[14px] font-semibold">ثبت دیدگاه</div>
        <div className="relative z-0 rounded-full border p-1">
          <ArrowLeft size={13} variant="Broken" />
          <div className="absolute top-0 left-2 -z-10 h-full w-full rounded-full bg-[#FFFFFF4D]" />
        </div>
      </Button>
    </div>
  );
}

export default FeedbackBox;
