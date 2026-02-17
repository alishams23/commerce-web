import { Button } from "@/components/ui/button";
import { TProductColor } from "@/lib/API/Products/Products";

function ProductColors({ colors }: { colors: TProductColor[] }) {
  return (
    <div className="scrollbar-hide flex gap-2 overflow-x-auto lg:flex-col">
      {colors.map(({ color, id }) => (
        <Button key={id} variant="outline">
          <div
            className="h-7 w-7 rounded-lg"
            style={{ backgroundColor: color.code }}
          />
          {color.name}
        </Button>
      ))}
    </div>
  );
}

export default ProductColors;
