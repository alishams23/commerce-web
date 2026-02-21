export type GetProductsParams = {
  page?: number;
  pageSize?: number;
  search?: string;
  ordering?: string;
  minPrice?: string;
  maxPrice?: string;
  colors?: string;
  brands?: string;
};

export function queryParamGenerator(params?: GetProductsParams) {
  if (!params) return "";

  const query = new URLSearchParams();

  if (params.page !== undefined) {
    query.append("page", params.page.toString());
  }

  if (params.pageSize !== undefined) {
    query.append("page_size", params.pageSize.toString());
  }

  if (params.search) {
    query.append("search", params.search);
  }

  if (params.ordering) {
    query.append("ordering", params.ordering);
  }

  if (params.maxPrice) {
    query.append("max_price", params.maxPrice);
  }

  if (params.minPrice) {
    query.append("min_price", params.minPrice);
  }

  if (params.colors) {
    query.append("color", params.colors);
  }

  if (params.brands) {
    query.append("brand", params.brands);
  }

  const queryString = query.toString();

  return "?" + queryString;
}
