"use client";

import ProductsListRow from "@/components/ProductsListRow/ProductsListRow";

import { useQuery } from "@tanstack/react-query";
import { getNewProducts } from "@/lib/API/Home/productsNew";

function NewProducts() {
  /* -------------------------------------------------------------------------- */
  /*                                 React Query                                */
  /* -------------------------------------------------------------------------- */

  const NEW_PRODUCTS_QUERY_KEY = ["products", "new", "home"];
  const { data, isLoading, isError } = useQuery({
    queryKey: NEW_PRODUCTS_QUERY_KEY,
    queryFn: getNewProducts,
  });

  return (
    !isLoading &&
    !isError && (
      <ProductsListRow
        products={data?.results || []}
        title="جدید‌ترین"
        className="mx-12 lg:mx-36"
      />
    )
  );
}

export default NewProducts;
