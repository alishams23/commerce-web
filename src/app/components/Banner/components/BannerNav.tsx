import { Button } from "@/components/ui/button";
import { NAV_BUTTON_BASE, NAV_ITEMS } from "./constants";
import { cn } from "@/lib/cn";
import Link from "next/link";

function BannerNav() {
  return (
    <div className="z-30 mt-19 hidden flex-col gap-6 lg:flex">
      {NAV_ITEMS.map(({ titleEn, className, href, icon, titleFa }) => (
        <Link href={href} key={titleEn}>
          <Button className={cn(NAV_BUTTON_BASE, className)}>
            {icon}
            <div className="flex flex-col items-start">
              <div className="text-[12px] font-semibold opacity-70">
                {titleEn}
              </div>
              <div className="text-[16px] font-semibold">{titleFa}</div>
            </div>
          </Button>
        </Link>
      ))}
    </div>
  );
}

export default BannerNav;
