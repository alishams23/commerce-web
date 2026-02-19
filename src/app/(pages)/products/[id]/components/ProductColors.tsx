import { Button } from "@/components/ui/button";
import { TProductColor } from "@/lib/API/Products/Products";
import { cn } from "@/lib/utils";

function ProductColors({
  colors,
  activeColor,
  activeColorChange,
}: {
  colors: TProductColor[];
  activeColor: number;
  activeColorChange: (index: number) => void;
}) {
  return (
    <div className="scrollbar-hide flex gap-2 overflow-x-auto lg:flex-col">
      {colors.map(({ color, id }, index) => (
        <Button
          key={id}
          variant="outline"
          className={cn(activeColor !== index && "border-muted")}
          onClick={() => activeColorChange(index)}
        >
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
