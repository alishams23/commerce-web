import Image from "next/image";

import { ArrowLeft } from "iconsax-reactjs";

import { Button } from "@/src/components/ui/button";

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
      className={`flex flex-1 rounded-3xl pt-3.5 pr-4 pb-4 md:pt-6 md:pr-5.5 md:pb-6 ${className}`}
    >
      <div className="flex flex-col justify-center md:gap-4">
        <div
          className={`bg-linear-to-r text-center text-lg text-white ${titleGradient}`}
        >
          {title}
        </div>
        <div className="max-w-45.5 text-2xl leading-10 font-black text-[#373254] md:max-w-67.5 md:text-4xl">
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
        className="h-31 w-31 self-end md:h-50 md:w-50"
      />
    </div>
  );
}

export default IdealCard;
