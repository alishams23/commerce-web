import Image from "next/image";

import { ArrowLeft } from "iconsax-reactjs";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TIdealCardProps = {
  titleGradient: string;
  content: string;
  title: string;
  className: string;
  src: string;
};

function IdealCard({
  className,
  title,
  titleGradient,
  content,
  src,
}: TIdealCardProps) {
  return (
    <div
      className={cn(
        "flex flex-1 justify-around rounded-3xl pt-3.5 pr-4 pb-4 lg:pt-6 lg:pr-5.5 lg:pb-6",
        className,
      )}
    >
      <div className="flex flex-col justify-center lg:gap-4">
        <div
          className={cn(
            "bg-linear-to-r text-center text-lg text-white",
            titleGradient,
          )}
        >
          {title}
        </div>
        <div className="max-w-45.5 text-2xl leading-10 font-black text-[#373254] md:max-w-fit lg:max-w-67.5 lg:text-4xl">
          {content}
        </div>
        <Button
          variant="outline"
          className="max-w-35 gap-6 rounded-lg text-[#373254]"
        >
          <div className="text-[16px] font-semibold">بیشتر</div>
          <div className="relative z-0 rounded-full border p-1">
            <ArrowLeft size={13} variant="Broken" />
            <div className="absolute top-0 left-2 -z-10 h-full w-full rounded-full bg-[#FFFFFF4D]" />
          </div>
        </Button>
      </div>
      <Image
        alt={title}
        src={src}
        width={124}
        height={124}
        className="h-31 w-31 self-center lg:h-50 lg:w-50"
      />
    </div>
  );
}

export default IdealCard;
