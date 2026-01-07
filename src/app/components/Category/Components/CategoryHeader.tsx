import { Button } from "@/src/components/ui/button";

function CategoryHeader() {
  return (
    <div className="flex shrink-0 flex-col items-center gap-6 lg:items-start lg:gap-4">
      <div className="text-lg font-light">
        <span className="font-bold lg:ml-1">دسته بندی</span> محصولات
      </div>

      <Button className="bg-secondary hover:bg-secondary-foreground w-fit border border-white">
        مشاهده همه
      </Button>
    </div>
  );
}

export default CategoryHeader;
