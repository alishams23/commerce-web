import Image from "next/image";
import { Button } from "@/src/components/ui/button";

type CategoryCardProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  gradient: string;
};

function BannerCategoryCard({
  title,
  subtitle,
  imageSrc,
  gradient,
}: CategoryCardProps) {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 md:px-6 md:py-0 ${gradient}`}
    >
      <div className="flex flex-col justify-center gap-2">
        <div className="text-2xl font-bold md:text-xl">{title}</div>
        <div className="text-[12px]">{subtitle}</div>

        <Button className="h-8 w-fit rounded-xl bg-[#FFFFFF66] py-0 shadow-[inset_0.6px_0.3px_0_rgba(255,255,255,0.65),0_0_0_0.4px_rgba(255,255,255,0.45)]">
          مشاهده
        </Button>
      </div>

      <Image
        src={imageSrc}
        alt={title}
        width={120}
        height={120}
        className="h-22.5 w-22.5 md:h-30 md:w-30"
      />
    </div>
  );
}

export default BannerCategoryCard;
