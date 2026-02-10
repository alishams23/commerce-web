import AmazingDiscountsProducts from "./components/AmazingDiscountsProducts";
import AmazingDiscountsHeader from "./components/AmazingDiscountsHeader";
import AmazingDiscountsTimer from "./components/AmazingDiscountsTimer";

function AmazingDiscounts() {
  return (
    <div className="mx-12 flex flex-col items-center gap-4 lg:mx-36">
      {/* Mobile header */}
      <div className="flex flex-col items-center gap-4 lg:hidden">
        <AmazingDiscountsHeader />
      </div>

      <div className="bg-primary flex w-full flex-col gap-12 overflow-hidden rounded-4xl pt-8 pb-10 lg:flex-row lg:gap-0 lg:bg-transparent lg:py-0">
        {/* Timer + desktop header */}
        <div className="flex flex-col">
          <AmazingDiscountsTimer />

          <div className="mt-6 hidden flex-col items-start gap-4 lg:flex">
            <AmazingDiscountsHeader />
          </div>
        </div>

        <AmazingDiscountsProducts />
      </div>
    </div>
  );
}

export default AmazingDiscounts;
