export type GetProductsParams = {
  page?: number;
  pageSize?: number;
  search?: string;
  ordering?: string;
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

  const queryString = query.toString();

  return "?" + queryString;
}
