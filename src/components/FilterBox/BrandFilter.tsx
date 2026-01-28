import { Input } from "@/src/components/ui/input";

function BrandFilter() {
  return (
    <div className="bg-muted text-title flex flex-col gap-4 rounded-2xl px-4 py-3">
      <div>فیلتر براساس برند :</div>
      <hr className="text-title" />

      <div className="flex flex-col text-[14px]">
        {["CAT", "NIKE", "ADIDAS"].map((brand) => (
          <div key={brand} className="flex items-center gap-2">
            <Input type="checkbox" id={brand} className="w-4" />
            <label htmlFor={brand}>{brand}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandFilter;
