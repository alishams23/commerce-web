import { Button } from "@/components/ui/button";
import { Heart, Share } from "iconsax-reactjs";

function ProductActions() {
  return (
    <div className="flex gap-2 self-end lg:self-start">
      <Button
        size="icon"
        variant="outline"
        className="bg-muted text-subtitle rounded-lg border-none"
      >
        <Share />
      </Button>
      <Button
        size="icon"
        variant="outline"
        className="bg-muted text-subtitle rounded-lg border-none"
      >
        <Heart />
      </Button>
    </div>
  );
}

export default ProductActions;
