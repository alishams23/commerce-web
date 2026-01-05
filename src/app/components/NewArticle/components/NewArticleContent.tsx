import { toShamsi } from "@/src/lib/utils";
import { Clock, Calendar } from "iconsax-reactjs";
import { TArticle } from "../constants";

type TNewArticleContentProps = {
  article: TArticle;
  showContent?: boolean;
};

function NewArticleContent({
  article,
  showContent = false,
}: TNewArticleContentProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="max-w-62.5 font-semibold text-[#494949]">
        {article.title}
      </div>

      {showContent && (
        <p className="hidden max-w-105.75 text-[14px] font-normal text-[#808080] md:block">
          {article.content}
        </p>
      )}

      <div className="mt-auto flex justify-between gap-4">
        <div className="flex items-center gap-1 text-[#8B8B8B]">
          <Clock size={18} variant="Broken" />
          <div>{article.readTime} دقیقه</div>
        </div>

        <div className="flex items-center gap-1 text-[#8B8B8B]">
          <Calendar size={18} variant="Broken" />
          {toShamsi(article.date)}
        </div>
      </div>
    </div>
  );
}

export default NewArticleContent;
