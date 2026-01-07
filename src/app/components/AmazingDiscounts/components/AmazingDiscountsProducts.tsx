import ProductsItemCard from "@/src/components/ProductsItemCard/ProductsItemCard";

import { PRODUCTS } from "../constants";

function AmazingDiscountsProducts() {
  return (
    <div className="scrollbar-hide relative flex gap-7 overflow-x-auto px-7 lg:w-full lg:justify-between lg:px-16 lg:pt-6">
      {/* background shape (desktop only) */}
      <div className="bg-primary absolute top-0 right-0 hidden h-4/5 w-full rounded-tl-4xl rounded-b-4xl lg:block" />

      {PRODUCTS.map(({ title, src, price, colors }, index) => (
        <ProductsItemCard
          key={index}
          title={title}
          src={src}
          price={price}
          colors={colors}
        />
      ))}
    </div>
  );
}

export default AmazingDiscountsProducts;
