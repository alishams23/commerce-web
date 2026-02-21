import { cn } from "@/lib/cn";

// import SearchInput from "@/app/components/Header/components/SearchInput";

import { Button } from "../ui/button";

import BrandFilter from "./BrandFilter";
import ColorFilter from "./ColorFilter";
import PriceFilter from "./PriceFilter";
import FactoryInfoNotice from "./FactoryInfoNotice";
import FiltersHeader from "./FiltersHeader";

type TFilterBoxProps = {
  isInDrawer: boolean;
  className?: string;
};

function FilterBox({ isInDrawer, className }: TFilterBoxProps) {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      <FiltersHeader />
      <FactoryInfoNotice />

      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <Button className="grow" variant="secondary">
            محصولات فروشگاه
          </Button>
          <Button className="grow">محصولات کارخانه</Button>
        </div>

        {/* <SearchInput /> */}

        <PriceFilter isInDrawer={isInDrawer} />
        <ColorFilter isInDrawer={isInDrawer} />
        <BrandFilter isInDrawer={isInDrawer} />
      </div>
    </div>
  );
}

export default FilterBox;
