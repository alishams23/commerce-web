"use client";

import { FilterAdd, Sort } from "iconsax-reactjs";

import ProductsItemCard from "@/src/components/ProductsItemCard/ProductsItemCard";
import Breadcrumbs from "@/src/components/Breadcrumbs/Breadcrumbs";
import Pagination from "@/src/components/Pagination/Pagination";
import { Button } from "@/src/components/ui/button";

import { PAGE_PRODUCTS } from "./constants";

function ProductsPage() {
  return (
    <div className="mx-12 lg:mx-36">
      <Breadcrumbs items={[{ name: "محصولات", href: "products" }]} />

      <div className="flex flex-col gap-6">
        {/* Button */}
        <div className="flex justify-between">
          <Button variant="outline" className="h-11.5">
            <FilterAdd />
            <div>فیلتر ها</div>
          </Button>
          <Button variant="outline" className="h-11.5">
            <Sort />
            <div>مرتب سازی</div>
          </Button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 gap-2">
          {PAGE_PRODUCTS.map(({ colors, price, src, title }, index) => (
            <ProductsItemCard
              key={title + index}
              colors={colors}
              price={price}
              src={src}
              title={title}
              size="small"
            />
          ))}
        </div>

        {/* Pagination */}
        <Pagination totalPages={4} currentPage={1} onPageChange={() => {}} />
      </div>
    </div>
  );
}

export default ProductsPage;
