import { Button } from "@/src/components/ui/button";
import { ArrowLeft, Location } from "iconsax-reactjs";

/**
 * Action buttons: Google Map & More Info
 */
function FactoryInfoActions() {
  return (
    <div className="flex gap-6 self-center">
      <Button className="rounded-full bg-[#679CBC] pr-1 pl-2">
        <span className="rounded-full bg-white px-3 py-1 font-light text-black">
          گوگل مپ
        </span>
        <Location className="text-primary" />
      </Button>

      <Button className="rounded-full pr-1 pl-2">
        <span className="rounded-full bg-white px-3 py-1 font-light text-black">
          اطلاعات بیشتر
        </span>
        <ArrowLeft />
      </Button>
    </div>
  );
}

export default FactoryInfoActions;
