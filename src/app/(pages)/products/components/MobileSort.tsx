import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sort } from "iconsax-reactjs";
import { SORT_OPTIONS } from "./constants";

function MobileSort() {
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
        className="text-subtitle right-2 flex flex-col items-end rounded-2xl"
      >
        {SORT_OPTIONS.map((option) => (
          <DropdownMenuItem key={option}>{option}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MobileSort;
