import SquarePattern from "@/src/components/SquarePattern/SquarePattern";
import CategoryHeader from "./Components/CategoryHeader";
import CategorySlider from "./Components/CategorySlider";
import CategoryDots from "./Components/CategoryDots";
import { CATEGORIES } from "./constants";

function Category() {
  return (
    <div className="bg-primary relative mx-12 flex flex-col items-center gap-8 rounded-4xl py-7 text-white lg:mx-36 lg:flex-row lg:gap-21 lg:px-9.5 lg:py-4">
      <SquarePattern className="top-3 left-6 lg:top-1/2 lg:left-0" />
      <SquarePattern className="top-25 right-6 rotate-180 lg:hidden" />

      <CategoryHeader />
      <CategorySlider />
      <CategoryDots count={CATEGORIES.length} />
    </div>
  );
}

export default Category;
