"use client";

import { Sort } from "iconsax-reactjs";

import ProductsItemCard from "@/src/components/ProductsItemCard/ProductsItemCard";
import Breadcrumbs from "@/src/components/Breadcrumbs/Breadcrumbs";
import Pagination from "@/src/components/Pagination/Pagination";
import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";

import { PAGE_PRODUCTS } from "./constants";
import FiltersDrawer from "./components/FiltersDrawer";
import FilterBox from "@/src/components/FilterBox/FilterBox";

// TODO: clean this file GPT
function ProductsPage() {
  return (
    <div className="mx-12 lg:mx-36">
      <Breadcrumbs items={[{ name: "محصولات", href: "products" }]} />

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Button for mobile size */}
        <div className="flex justify-between lg:hidden">
          <FiltersDrawer />

          {/* Sort */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-11.5">
                <Sort />
                <div>مرتب سازی</div>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              side="left"
              className="text-subtitle right-2 flex flex-col items-end rounded-2xl"
              align="start"
            >
              <DropdownMenuItem>جدید ترین</DropdownMenuItem>
              <DropdownMenuItem>محبوب ترین</DropdownMenuItem>
              <DropdownMenuItem>ارزان ترین</DropdownMenuItem>
              <DropdownMenuItem>گران ترین</DropdownMenuItem>
              <DropdownMenuItem>بیشترین امتیاز</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <FilterBox className="hidden max-w-84 lg:flex" />

        {/* Products */}
        <div className="flex shrink-0 grow flex-col gap-6">
          <div className="hidden lg:block">
            <div className="mb-2">مرتب سازی</div>
            <div className="flex gap-2">
              <Button variant="outline">جدید ترین</Button>
              <Button variant="outline">محبوب ترین</Button>
              <Button variant="outline">ارزان ترین</Button>
              <Button variant="outline">گران ترین</Button>
              <Button variant="outline">بیشترین امتیاز</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
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
