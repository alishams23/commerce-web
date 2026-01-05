import IconStart from "@/src/components/icons/IconStart";
import { Button } from "@/src/components/ui/button";

function NewArticleHeader() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-1 text-xl">
        <IconStart />
        <span className="font-extrabold">جدید ترین</span> محصولات
      </div>

      <Button className="rounded-xl border border-[#B0B0B0] bg-transparent font-normal text-[#B0B0B0]">
        مشاهده همه
      </Button>
    </div>
  );
}

export default NewArticleHeader;
