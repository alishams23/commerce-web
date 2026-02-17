import ProductsItemCard from "@/components/ProductsItemCard/ProductsItemCard";
import { TProductResponse } from "@/lib/API/Products/Products";

function ProductsGrid({ products }: { products: TProductResponse[] }) {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
      {products.map(({ id, colors, cover_image, fixed_price, name }) => (
        <ProductsItemCard
          key={id}
          colors={colors}
          price={fixed_price}
          src={cover_image || ""}
          title={name}
          size="small"
          id={id}
        />
      ))}
    </div>
  );
}

export default ProductsGrid;
