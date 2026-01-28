import { Clock, Calendar } from "iconsax-reactjs";

import { toShamsi } from "@/lib/toShamsi";
import { toFaDigits } from "@/lib/toFaDigits";

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
      <div className="text-title max-w-62.5 font-semibold">{article.title}</div>

      {showContent && (
        <p className="text-subtitle hidden max-w-105.75 text-[14px] font-normal lg:block">
          {article.content}
        </p>
      )}

      <div className="mt-auto flex justify-between gap-4">
        <div className="text-subtitle flex items-center gap-1">
          <Clock size={18} variant="Broken" />
          <div>{toFaDigits(article.readTime.toString())} دقیقه</div>
        </div>

        <div className="text-subtitle flex items-center gap-1">
          <Calendar size={18} variant="Broken" />
          {toShamsi(article.date)}
        </div>
      </div>
    </div>
  );
}

export default NewArticleContent;
