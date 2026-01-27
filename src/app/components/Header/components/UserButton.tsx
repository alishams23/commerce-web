import { Button } from "@/src/components/ui/button";
import { User } from "iconsax-reactjs";

function UserButton({ className }: { className?: string }) {
  return (
    <Button variant="outline" className={`h-12.5 ${className}`}>
      <User variant="Broken" />
      <div className="text-[16px] font-semibold">علی ابریشم</div>
    </Button>
  );
}

export default UserButton;
