import ProductsItemCard from "@/components/ProductsItemCard/ProductsItemCard";

import { TProductResponse } from "@/lib/API/Products/Products";

function AmazingDiscountsProducts({
  products,
}: {
  products: TProductResponse[];
}) {
  return (
    <div className="scrollbar-hide relative flex gap-7 overflow-x-auto px-7 lg:w-full lg:px-16 lg:pt-6">
      {/* background shape (desktop only) */}
      <div className="bg-primary absolute top-0 right-0 hidden h-4/5 w-full rounded-tl-4xl rounded-b-4xl lg:block" />

      {products.map(({ colors, fixed_price, id, name }, index) => (
        <ProductsItemCard
          key={`${index}-${id}`}
          id={id}
          title={name}
          price={fixed_price}
          colors={colors}
          className="grow"
        />
      ))}
    </div>
  );
}

export default AmazingDiscountsProducts;
