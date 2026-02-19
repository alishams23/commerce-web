import Image from "next/image";

import { QuoteDown } from "iconsax-reactjs";

import { cn } from "@/lib/cn";

type TTestimonialCardProps = {
  isActive: boolean;
  avatar: string;
  name: string;
  text: string;
};

function TestimonialCard({
  isActive,
  avatar,
  name,
  text,
}: TTestimonialCardProps) {
  return (
    <div
      className={cn(
        "border-muted flex gap-1.5 rounded-xl border-2 p-2 transition-all duration-700 ease-in-out",
        isActive && "scale-100 shadow-lg",
        !isActive && "mx-6 opacity-50",
      )}
    >
      <div className="border-muted h-fit rounded-xl border p-1.5 lg:p-2">
        <Image
          alt={name}
          src={avatar}
          width={45}
          height={45}
          className={cn(
            "h-11.25 w-11.25 rounded-md lg:h-18.75 lg:w-18.75",
            !isActive && "opacity-50",
          )}
        />
      </div>

      <div className={cn("w-full", !isActive && "opacity-50")}>
        <div className="text-primary flex justify-between">
          <div className="text-[14px] font-semibold lg:text-lg lg:font-extrabold">
            {name}
          </div>
          <QuoteDown variant="Bold" />
        </div>

        <p className="text-subtitle mt-2 line-clamp-2 text-[10px] lg:text-[14px]">
          {text}
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;
