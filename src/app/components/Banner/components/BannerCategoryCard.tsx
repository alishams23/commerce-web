import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

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
      className={cn(
        "flex items-center justify-between px-4 py-3 lg:px-6 lg:py-0",
        gradient,
      )}
    >
      <div className="flex flex-col justify-center gap-2">
        <div className="text-2xl font-bold lg:text-xl">{title}</div>
        <div className="text-[12px]">{subtitle}</div>

        <Button variant="glass" className="h-8 w-fit rounded-xl py-0">
          مشاهده
        </Button>
      </div>

      <Image
        src={imageSrc}
        alt={title}
        width={120}
        height={120}
        className="h-22.5 w-22.5 lg:h-30 lg:w-30"
      />
    </div>
  );
}

export default BannerCategoryCard;
