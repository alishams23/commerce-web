"use client";

import { cn } from "@/lib/cn";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { getColors } from "@/lib/API/Products/Colors";

function ColorFilter() {
  /* -------------------------------------------------------------------------- */
  /*                                 React Query                                */
  /* -------------------------------------------------------------------------- */

  const { data, isLoading } = useQuery({
    queryKey: ["colors"],
    queryFn: getColors,
  });

  return (
    <div className="bg-muted text-title flex flex-col gap-4 rounded-2xl px-4 py-3">
      <div>فیلتر براساس رنگ :</div>
      <hr className="text-title" />

      <div className="flex flex-col text-[14px]">
        {!isLoading &&
          data &&
          data.map(({ id, code, name }) => (
            <div key={id} className="flex items-center gap-2">
              <Input
                type="checkbox"
                id={id.toString()}
                value={id}
                className="w-4"
              />
              <div
                style={{ backgroundColor: code }}
                className={cn("h-3 w-3 rounded-full")}
              />
              <label htmlFor={id.toString()}>{name}</label>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ColorFilter;
