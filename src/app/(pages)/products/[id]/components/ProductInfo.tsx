import { TProductColor } from "@/lib/API/Home/ProductsNew";
import ProductColors from "./ProductColors";

type TProductInfoProps = {
  title: string;
  id: number;
  colors: TProductColor[];
  brand: { id: number; name: string } | null;
};

function ProductInfo({ id, title, colors, brand }: TProductInfoProps) {
  return (
    <div className="flex grow flex-col gap-2 overflow-hidden">
      <div className="text-lg font-black">{title}</div>
      <div className="text-subtitle text-[14px]">کیف اسپرت</div>

      <ul className="text-subtitle list-disc pr-4 text-[14px]">
        {brand && <li>برند: {brand.name}</li>}
        <li>شناسه محصول: {id}</li>
        <li>رنگ:</li>
      </ul>

      <ProductColors colors={colors} />
    </div>
  );
}

export default ProductInfo;
