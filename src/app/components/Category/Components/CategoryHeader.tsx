import { Button } from "@/src/components/ui/button";

function CategoryHeader() {
  return (
    <div className="flex shrink-0 flex-col items-center gap-6 md:items-start md:gap-4">
      <div className="text-lg font-light">
        <span className="font-bold md:ml-1">دسته بندی</span> محصولات
      </div>

      <Button className="w-fit rounded-2xl border border-white bg-[#679CBC]">
        مشاهده همه
      </Button>
    </div>
  );
}

export default CategoryHeader;
