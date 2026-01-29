"use client";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Pagination from "@/components/Pagination/Pagination";

import FiltersDrawer from "./components/FiltersDrawer";
import FilterBox from "@/components/FilterBox/FilterBox";
import MobileSort from "./components/MobileSort";
import DesktopSort from "./components/DesktopSort";
import ProductsGrid from "./components/ProductsGrid";

// TODO: clean this file GPT
function ProductsPage() {
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
          <ProductsGrid />

          <Pagination
            totalPages={4}
            currentPage={1}
            onPageChange={() => console.log("first")}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;


