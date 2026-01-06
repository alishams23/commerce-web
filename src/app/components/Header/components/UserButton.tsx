import { Button } from "@/src/components/ui/button";
import { User } from "iconsax-reactjs";

function UserButton() {
  return (
    <Button variant="outline" className="hidden h-12.5 md:flex">
      <User variant="Broken" />
      <div className="text-[16px] font-semibold">علی ابریشم</div>
    </Button>
  );
}

export default UserButton;
