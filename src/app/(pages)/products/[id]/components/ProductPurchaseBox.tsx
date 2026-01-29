import { Button } from "@/components/ui/button";

function ProductPurchaseBox({ price }: { price: number }) {
  return (
    <div className="bg-muted rounded-2xl px-6 py-8">
      <div className="mb-4 flex justify-between">
        <div className="bg-muted-foreground flex items-center gap-2 rounded-2xl p-1">
          <Button
            size="icon"
            variant="secondary"
            className="justify-center text-[30px]"
          >
            +
          </Button>
          5
          <Button size="icon" variant="secondary" className="text-[30px]">
            -
          </Button>
        </div>

        <div>
          <div className="mb-2 flex gap-2">
            <div className="text-subtitle text-[14px] font-semibold line-through">
              {price.toLocaleString("fa-IR")} تومان
            </div>
            <div className="bg-primary mr-2 rounded-full px-2 text-[12px] text-white">
              27%
            </div>
          </div>

          <div className="text-primary text-center text-[20px] font-semibold">
            {price.toLocaleString("fa-IR")} تومان
          </div>
        </div>
      </div>

      <Button className="h-11.5 w-full">افزودن به سبد خرید</Button>
    </div>
  );
}

export default ProductPurchaseBox;
