import IconStar from "@/components/icons/IconStar";
import { Button } from "@/components/ui/button";

function NewArticleHeader() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-1 text-xl">
        <IconStar />
        <span className="font-extrabold">جدید ترین</span> محصولات
      </div>

      <Button className="border-subtitle text-subtitle hover:bg-subtitle/10 rounded-xl border bg-transparent font-normal">
        مشاهده همه
      </Button>
    </div>
  );
}

export default NewArticleHeader;
