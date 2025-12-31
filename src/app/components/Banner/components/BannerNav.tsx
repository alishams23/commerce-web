import { Button } from "@/src/components/ui/button";
import { NAV_BUTTON_BASE, NAV_ITEMS } from "./constants";

function BannerNav() {
  return (
    <div className="z-30 mt-19 hidden flex-col gap-6 md:flex">
      {NAV_ITEMS.map((item) => (
        <Button
          key={item.titleEn}
          className={`${NAV_BUTTON_BASE} ${item.className}`}
        >
          {item.icon}
          <div className="flex flex-col items-start">
            <div className="text-[12px] font-semibold opacity-70">
              {item.titleEn}
            </div>
            <div className="text-[16px] font-semibold">{item.titleFa}</div>
          </div>
        </Button>
      ))}
    </div>
  );
}

export default BannerNav;
