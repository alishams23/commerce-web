"use client";

import { cn } from "@/lib/cn";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { getColors } from "@/lib/API/Products/Colors";
import { Button } from "../ui/button";
import { useFilterQuerySync } from "./hooks/useFilterQuerySync";
import OptionalDrawerWrapper from "./OptionalDrawerWrapper";

function ColorFilter({ isInDrawer }: { isInDrawer: boolean }) {
  /* -------------------------------------------------------------------------- */
  /*                                 React Query                                */
  /* -------------------------------------------------------------------------- */

  const { data, isLoading } = useQuery({
    queryKey: ["colors"],
    queryFn: getColors,
  });

  /* -------------------------------------------------------------------------- */
  /*                              Filter Query Sync                             */
  /* -------------------------------------------------------------------------- */

  const handleSubmit = useFilterQuerySync("colors");

  return (
    <div className="bg-muted text-title flex flex-col gap-4 rounded-2xl px-4 py-3">
      <div>فیلتر براساس رنگ :</div>
      <hr className="text-title" />

      <form onSubmit={handleSubmit} className="flex flex-col text-[14px]">
        {!isLoading &&
          data &&
          data.map(({ id, code, name }) => (
            <div key={id} className="flex items-center gap-2">
              <Input
                id={id.toString()}
                name="colors"
                type="checkbox"
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

        <OptionalDrawerWrapper isInDrawer={isInDrawer}>
          <Button
            type="submit"
            variant="secondary"
            className="bg-muted-foreground w-fit self-end"
          >
            فیلتر
          </Button>
        </OptionalDrawerWrapper>
      </form>
    </div>
  );
}

export default ColorFilter;
