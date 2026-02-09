import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CloseSquare, FilterAdd } from "iconsax-reactjs";
import FilterBox from "@/components/FilterBox/FilterBox";

function FiltersDrawer() {
  return (
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

        <FilterBox />
      </DrawerContent>
    </Drawer>
  );
}

export default FiltersDrawer;
