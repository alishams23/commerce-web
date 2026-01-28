"use client";

import { CloseSquare, FilterAdd, Sort, Verify } from "iconsax-reactjs";

import { useState } from "react";
import ProductsItemCard from "@/src/components/ProductsItemCard/ProductsItemCard";
import Breadcrumbs from "@/src/components/Breadcrumbs/Breadcrumbs";
import Pagination from "@/src/components/Pagination/Pagination";
import { Button } from "@/src/components/ui/button";

import { PAGE_PRODUCTS } from "./constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/src/components/ui/drawer";
import SearchInput from "../../components/Header/components/SearchInput";
import { Slider } from "@/src/components/ui/slider";
import { Input } from "@/src/components/ui/input";

function ProductsPage() {
  /* -------------------------------------------------------------------------- */
  /*                                    React                                   */
  /* -------------------------------------------------------------------------- */

  const [priceRange, setPriceRange] = useState([50, 500]);

  return (
    <div className="mx-12 lg:mx-36">
      <Breadcrumbs items={[{ name: "محصولات", href: "products" }]} />

      <div className="flex flex-col gap-6">
        {/* Button */}
        <div className="flex justify-between">
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Button variant="outline" className="h-11.5">
                <FilterAdd />
                <div>فیلتر ها</div>
              </Button>
            </DrawerTrigger>

            <DrawerContent className="h-full gap-5 rounded-none px-6 pt-4 pb-10">
              <DrawerHeader className="p-0 text-start">
                <DrawerClose className="text-primary">
                  <CloseSquare size={32} />
                </DrawerClose>
              </DrawerHeader>
              <div>
                <div className="text-2xl font-extrabold">فیلترها</div>
                <div className="text-subtitle">دسته بندی محصولات</div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <Button className="grow" variant="secondary">
                    محصولات فروشگاه
                  </Button>
                  <Button className="grow">محصولات کارخانه</Button>
                </div>

                <div className="flex gap-3 rounded-2xl bg-[#F4F7FF] px-5 py-3">
                  <Verify
                    variant="Bold"
                    className="text-primary shrink-0"
                    width={80}
                  />
                  <p className="text-[14px] leading-8">
                    محصولات کارخانه ما با قیمت بسیار عالی در سایت وجود دارد که
                    با بهترین کیفیت موجود در ایران ساخته شده و برای شما قابل
                    فروش می باشد.
                  </p>
                </div>

                <SearchInput />

                <div className="bg-muted text-title flex flex-col gap-4 rounded-2xl px-4 py-3">
                  <div>فیلتر بر اساس قیمت:</div>
                  <hr className="text-title" />
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={1000}
                    step={5}
                    className="mx-auto w-full max-w-xs"
                  />
                  <div className="flex items-center justify-between">
                    <Button variant="secondary" className="bg-muted-foreground">
                      فیلتر
                    </Button>
                    <div className="text-subtitle">
                      {(priceRange[1] * 10000).toLocaleString()} تومان
                    </div>
                    <div className="text-subtitle">
                      {(priceRange[0] * 10000).toLocaleString()} تومان
                    </div>
                  </div>
                </div>

                <div className="bg-muted text-title flex flex-col gap-4 rounded-2xl px-4 py-3">
                  <div>فیلتر براساس رنگ :</div>
                  <hr className="text-title" />

                  <div className="flex flex-col text-[14px]">
                    <div className="flex items-center gap-2">
                      <Input type="checkbox" id="red" className="w-4" />
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <label htmlFor="red">قرمز</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input type="checkbox" id="black" className="w-4" />
                      <div className="h-3 w-3 rounded-full bg-black" />
                      <label htmlFor="black">مشکی</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input type="checkbox" id="white" className="w-4" />
                      <div className="h-3 w-3 rounded-full bg-white" />
                      <label htmlFor="white">سفید</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input type="checkbox" id="blue" className="w-4" />
                      <div className="h-3 w-3 rounded-full bg-blue-500" />
                      <label htmlFor="blue">آبی</label>
                    </div>
                  </div>
                </div>

                <div className="bg-muted text-title flex flex-col gap-4 rounded-2xl px-4 py-3">
                  <div>فیلتر براساس برند :</div>
                  <hr className="text-title" />

                  <div className="flex flex-col text-[14px]">
                    <div className="flex items-center gap-2">
                      <Input type="checkbox" id="cat" className="w-4" />
                      <label htmlFor="cat">CAT</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input type="checkbox" id="nike" className="w-4" />
                      <label htmlFor="nike">NIKE</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input type="checkbox" id="adidas" className="w-4" />
                      <label htmlFor="adidas">ADIDAS</label>
                    </div>
                  </div>
                </div>
              </div>
            </DrawerContent>
          </Drawer>

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
        <Pagination totalPages={4} currentPage={1} onPageChange={() => {}} />
      </div>
    </div>
  );
}

export default ProductsPage;
