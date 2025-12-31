import { Bag } from "iconsax-reactjs";

import { Button } from "@/components/ui/button";

function CartButton() {
  return (
    <Button className="h-12.5 w-12.5 rounded-2xl">
      <Bag variant="Bold" />
    </Button>
  );
}

export default CartButton;
