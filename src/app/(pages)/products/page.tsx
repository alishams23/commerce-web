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

function ProductsPage() {
  return (
    <div className="mx-12 lg:mx-36">
      <Breadcrumbs items={[{ name: "محصولات", href: "products" }]} />

      <div className="flex flex-col gap-6">
        {/* Button */}
        <div className="flex justify-between">
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
        <Pagination
          totalPages={4}
          currentPage={1}
          onPageChange={() => console.log("first")}
        />
      </div>
    </div>
  );
}

export default ProductsPage;
