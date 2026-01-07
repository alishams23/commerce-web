import { Button } from "@/src/components/ui/button";
import { ArrowLeft, Location } from "iconsax-reactjs";

/**
 * Action buttons: Google Map & More Info
 */
function FactoryInfoActions() {
  return (
    <div className="flex flex-wrap justify-center gap-6 lg:justify-start">
      <Button className="bg-secondary hover:bg-secondary-foreground rounded-full pr-1 pl-2">
        <span className="rounded-full bg-white px-3 py-1 font-light text-black">
          گوگل مپ
        </span>
        <Location variant="Broken" className="text-primary" />
      </Button>

      <Button className="rounded-full pr-1 pl-2">
        <span className="rounded-full bg-white px-3 py-1 font-light text-black">
          اطلاعات بیشتر
        </span>
        <ArrowLeft variant="Broken" />
      </Button>
    </div>
  );
}

export default FactoryInfoActions;
