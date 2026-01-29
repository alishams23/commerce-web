import ProductsItemCard from "@/components/ProductsItemCard/ProductsItemCard";
import { PAGE_PRODUCTS } from "../constants";

function ProductsGrid() {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
      {PAGE_PRODUCTS.map(({ id, colors, price, src, title }, index) => (
        <ProductsItemCard
          key={`${title}-${index}`}
          colors={colors}
          price={price}
          src={src}
          title={title}
          size="small"
          id={id}
        />
      ))}
    </div>
  );
}

export default ProductsGrid;
