import ProductColors from "./ProductColors";

function ProductInfo({
  title,
  id,
  colors,
}: {
  title: string;
  id: number;
  colors: string[];
}) {
  return (
    <div className="flex grow flex-col gap-2 overflow-hidden">
      <div className="text-lg font-black">{title}</div>
      <div className="text-subtitle text-[14px]">کیف اسپرت</div>

      <ul className="text-subtitle list-disc pr-4 text-[14px]">
        <li>برند: آدیداس</li>
        <li>شناسه محصول: {id}</li>
        <li>رنگ:</li>
      </ul>

      <ProductColors colors={colors} />
    </div>
  );
}

export default ProductInfo;
