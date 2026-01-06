import { Button } from "@/src/components/ui/button";
import { LikeShapes } from "iconsax-reactjs";
import { IconInstagram } from "@/src/components/icons";

function FactoryInfoInstagram() {
  return (
    <div className="bg-secondary flex flex-col items-center justify-between gap-2 rounded-full px-6 py-3 text-white md:flex-row md:py-5">
      <div className="flex items-center gap-1 md:gap-2">
        <LikeShapes variant="Bold" className="size-6 md:size-12" />
        <div className="text-lg">ما را در اینستگرام دنبال کنید.</div>
      </div>

      <Button className="text-primary rounded-full bg-white font-semibold">
        <div>صفحه اینستاگرام</div>
        <IconInstagram color="#051F6F" />
      </Button>
    </div>
  );
}

export default FactoryInfoInstagram;
