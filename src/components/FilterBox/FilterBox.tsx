import SearchInput from "@/src/app/components/Header/components/SearchInput";
import { Button } from "../ui/button";
import BrandFilter from "./BrandFilter";
import ColorFilter from "./ColorFilter";
import PriceFilter from "./PriceFilter";
import FactoryInfoNotice from "./FactoryInfoNotice";
import FiltersHeader from "./FiltersHeader";

function FilterBox() {
  return (
    <div className="flex flex-col gap-5">
      <FiltersHeader />
      <FactoryInfoNotice />

      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <Button className="grow" variant="secondary">
            محصولات فروشگاه
          </Button>
          <Button className="grow">محصولات کارخانه</Button>
        </div>

        <SearchInput />

        <PriceFilter />
        <ColorFilter />
        <BrandFilter />
      </div>
    </div>
  );
}

export default FilterBox;
