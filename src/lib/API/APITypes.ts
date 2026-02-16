/* -------------------------------------------------------------------------- */
/*                                 Pagination                                 */
/* -------------------------------------------------------------------------- */

export type PaginatedResponse<T> = {
  links: {
    next: string | null;
    prev: string | null;
  };
  count: number;
  total_pages: number;
  results: T;
};
