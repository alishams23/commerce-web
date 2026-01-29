import { Button } from "@/components/ui/button";

function ProductColors({ colors }: { colors: string[] }) {
  return (
    <div className="scrollbar-hide flex gap-2 overflow-x-auto">
      {colors.map((color) => (
        <Button key={color} variant="outline">
          <div
            className="h-7 w-7 rounded-lg"
            style={{ backgroundColor: color }}
          />
          {color}
        </Button>
      ))}
    </div>
  );
}

export default ProductColors;
