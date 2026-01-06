import { HamburgerMenu } from "iconsax-reactjs";

import { Button } from "@/src/components/ui/button";

function MenuButton() {
  return (
    <Button
      variant="outline"
      className="text-primary flex h-12.5 w-12.5 md:hidden"
    >
      <HamburgerMenu />
    </Button>
  );
}

export default MenuButton;
