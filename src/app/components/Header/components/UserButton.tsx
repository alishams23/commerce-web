import { Button } from "@/src/components/ui/button";
import { User } from "iconsax-reactjs";

function UserButton() {
  return (
    <Button
      variant="outline"
      className="text-primary hidden h-12.5 rounded-2xl md:flex"
    >
      <User />
      <div className="text-[16px] font-semibold">علی ابریشم</div>
    </Button>
  );
}

export default UserButton;
