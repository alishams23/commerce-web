import IconStart from "@/src/components/icons/IconStart";
import { Button } from "@/src/components/ui/button";

function NewArticleHeader() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-1 text-xl">
        <IconStart />
        <span className="font-extrabold">جدید ترین</span> محصولات
      </div>

      <Button className="border-subtitle text-subtitle hover:bg-subtitle/10 rounded-xl border bg-transparent font-normal">
        مشاهده همه
      </Button>
    </div>
  );
}

export default NewArticleHeader;
