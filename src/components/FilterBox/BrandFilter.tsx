"use client";

import { Input } from "@/components/ui/input";
import { getBrands } from "@/lib/API/Products/Brands";
import { useQuery } from "@tanstack/react-query";

function BrandFilter() {
  /* -------------------------------------------------------------------------- */
  /*                                 React Query                                */
  /* -------------------------------------------------------------------------- */

  const BRAND_QUERY_KEY = ["brand", "product"];
  const { data, isLoading, isError } = useQuery({
    queryKey: BRAND_QUERY_KEY,
    queryFn: getBrands,
  });

  return (
    <div className="bg-muted text-title flex flex-col gap-4 rounded-2xl px-4 py-3">
      <div>فیلتر براساس برند :</div>
      <hr className="text-title" />

      <div className="flex flex-col text-[14px]">
        {!isError &&
          !isLoading &&
          data?.map(({ id, name }) => (
            <div key={id} className="flex items-center gap-2">
              <Input type="checkbox" id={name} value={id} className="w-4" />
              <label htmlFor={name}>{name}</label>
            </div>
          ))}
      </div>
    </div>
  );
}

export default BrandFilter;
