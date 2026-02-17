"use client";

import { useState } from "react";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Pagination from "@/components/Pagination/Pagination";

import FiltersDrawer from "./components/FiltersDrawer";
import FilterBox from "@/components/FilterBox/FilterBox";
import MobileSort from "./components/MobileSort";
import DesktopSort from "./components/DesktopSort";
import ProductsGrid from "./components/ProductsGrid";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/API/Products/Products";

function ProductsPage() {
  /* -------------------------------------------------------------------------- */
  /*                                    React                                   */
  /* -------------------------------------------------------------------------- */

  const [totalPages, setTotalPages] = useState<number>(4);
  const [currentPage, setCurrentPage] = useState<number>(1);

  /* -------------------------------------------------------------------------- */
  /*                                 React Query                                */
  /* -------------------------------------------------------------------------- */

  const { data, isLoading } = useQuery({
    queryKey: ["paginatedProduct", currentPage],
    queryFn: async () => {
      const res = await getProducts({ pageSize: 9, page: currentPage });

      setTotalPages(res.total_pages);

      return res;
    },
  });

  return (
    <div className="mx-12 lg:mx-36">
      <Breadcrumbs items={[{ name: "محصولات", href: "products" }]} />

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Mobile header */}
        <div className="flex justify-between lg:hidden">
          <FiltersDrawer />
          <MobileSort />
        </div>

        <FilterBox className="hidden max-w-84 lg:flex" />

        {/* Products section */}
        <div className="flex shrink-0 grow flex-col gap-6">
          <DesktopSort />

          {!isLoading && data && <ProductsGrid products={data.results} />}

          {!isLoading && data && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
