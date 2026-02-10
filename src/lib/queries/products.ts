import { useQuery } from "@tanstack/react-query";

import { getNewProducts } from "../API/products";

const NEW_PRODUCTS_QUERY_KEY = ["products", "new"];

export function useNewProducts() {
  return useQuery({
    queryKey: NEW_PRODUCTS_QUERY_KEY,
    queryFn: getNewProducts,
  });
}
