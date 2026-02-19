"use client";

import ProductsListRow from "@/components/ProductsListRow/ProductsListRow";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/API/Products/Products";

function NewProducts() {
  /* -------------------------------------------------------------------------- */
  /*                                 React Query                                */
  /* -------------------------------------------------------------------------- */

  const { data, isLoading, isError } = useQuery({
    queryKey: ["new-products-home"],
    queryFn: () => getProducts({ pageSize: 10 }),
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
