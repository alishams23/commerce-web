import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sort } from "iconsax-reactjs";
import { SORT_OPTIONS } from "./constants";
import { cn } from "@/lib/cn";

type TMobileSortProps = {
  activeSort: string;
  handleSortChange: (val: string) => void;
};

function MobileSort({ activeSort, handleSortChange }: TMobileSortProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-11.5">
          <Sort />
          <div>مرتب سازی</div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="left"
        align="start"
        className="text-subtitle right-2 flex flex-col rounded-2xl"
      >
        {SORT_OPTIONS.map(({ name, value }) => (
          <DropdownMenuItem
            dir="rtl"
            key={value}
            className={cn(activeSort === value && "text-primary font-semibold")}
            onClick={() => handleSortChange(value)}
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MobileSort;
