"use client";

import ProductsListRow from "@/components/ProductsListRow/ProductsListRow";
import { useNewProducts } from "@/lib/queries/products";

import { NEW_PRODUCTS } from "./constants";

function NewProducts() {
  /* -------------------------------------------------------------------------- */
  /*                                 React Query                                */
  /* -------------------------------------------------------------------------- */

  const { data: products, isLoading, isError } = useNewProducts();
  console.log(products, isLoading, isError);

  return (
    <ProductsListRow
      products={NEW_PRODUCTS}
      title="جدید‌ترین"
      className="mx-12 lg:mx-36"
    />
  );
}

export default NewProducts;
