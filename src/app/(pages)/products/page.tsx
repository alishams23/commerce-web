"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Pagination from "@/components/Pagination/Pagination";

import FiltersDrawer from "./components/FiltersDrawer";
import FilterBox from "@/components/FilterBox/FilterBox";
import MobileSort from "./components/MobileSort";
import DesktopSort from "./components/DesktopSort";
import ProductsGrid from "./components/ProductsGrid";
import { getProducts } from "@/lib/API/Products/Products";

function ProductsPage() {
  /* -------------------------------------------------------------------------- */
  /*                                    Next                                    */
  /* -------------------------------------------------------------------------- */

  const router = useRouter();
  const searchParams = useSearchParams();

  /* -------------------------------------------------------------------------- */
  /*                                  Constant                                  */
  /* -------------------------------------------------------------------------- */

  const ordering = searchParams.get("ordering") ?? "";
  const maxPrice = searchParams.get("max_price") ?? "";
  const minPrice = searchParams.get("min_price") ?? "";
  const colors = searchParams.get("colors") ?? "";
  const brands = searchParams.get("brand") ?? "";

  /* -------------------------------------------------------------------------- */
  /*                                    React                                   */
  /* -------------------------------------------------------------------------- */

  const [currentPage, setCurrentPage] = useState<number>(1);

  /* -------------------------------------------------------------------------- */
  /*                                 React Query                                */
  /* -------------------------------------------------------------------------- */

  const { data, isLoading } = useQuery({
    queryKey: [
      "products",
      currentPage,
      ordering,
      maxPrice,
      minPrice,
      colors,
      brands,
    ],
    queryFn: () =>
      getProducts({
        pageSize: 9,
        page: currentPage,
        ordering,
        maxPrice,
        minPrice,
        colors,
        brands,
      }),
  });

  const totalPages = data?.total_pages ?? 1;

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */

  function handleSortChange(newSort: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (newSort === params.get("ordering")) {
      params.delete("ordering");
    } else {
      params.set("ordering", newSort);
    }

    router.push(`?${params.toString()}`);
  }

  return (
    <div className="mx-12 lg:mx-36">
      <Breadcrumbs items={[{ name: "محصولات", href: "products" }]} />

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Mobile header */}
        <div className="flex justify-between lg:hidden">
          <FiltersDrawer />
          <MobileSort
            handleSortChange={handleSortChange}
            activeSort={ordering}
          />
        </div>

        <FilterBox isInDrawer={false} className="hidden max-w-84 lg:flex" />

        {/* Products section */}
        <div className="flex shrink-0 grow flex-col gap-6">
          <DesktopSort
            handleSortChange={handleSortChange}
            activeSort={ordering}
          />

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
