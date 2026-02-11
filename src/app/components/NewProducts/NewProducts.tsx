import ProductsListRow from "@/components/ProductsListRow/ProductsListRow";

import { NEW_PRODUCTS } from "./constants";

function NewProducts() {
  return (
    <ProductsListRow
      products={NEW_PRODUCTS}
      title="جدید‌ترین"
      className="mx-12 lg:mx-36"
    />
  );
}

export default NewProducts;
