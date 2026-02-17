export type GetProductsParams = {
  page?: number;
  pageSize?: number;
  search?: string;
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

  const queryString = query.toString();

  return "?" + queryString;
}
