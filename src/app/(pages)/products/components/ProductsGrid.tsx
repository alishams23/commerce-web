import ProductsItemCard from "@/components/ProductsItemCard/ProductsItemCard";
import { TProductResponse } from "@/lib/API/Products/Products";

function ProductsGrid({ products }: { products: TProductResponse[] }) {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
      {products.map(({ id, colors, fixed_price, name }) => {
        // TODO: Change this logic and add all images to component
        let t = "";
        colors.some((c) =>
          c.images.some((img) => {
            if (img.is_cover) t = img.image;
          }),
        );

        return (
          <ProductsItemCard
            key={id}
            colors={colors}
            price={fixed_price}
            src={t || ""}
            title={name}
            size="small"
            id={id}
          />
        );
      })}
    </div>
  );
}

export default ProductsGrid;
