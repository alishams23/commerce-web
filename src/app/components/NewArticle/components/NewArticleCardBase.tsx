import Image from "next/image";
import NewArticleContent from "./NewArticleContent";
import { TArticle } from "../constants";

type TNewArticleCardBaseProps = {
  article: TArticle;
  imageClassName: string;
  wrapperClassName: string;
  showContent?: boolean;
};

function NewArticleCardBase({
  article,
  imageClassName,
  wrapperClassName,
  showContent,
}: TNewArticleCardBaseProps) {
  return (
    <div className={wrapperClassName}>
      <div className="bg-primary absolute top-8 left-0 z-10 rounded-r-xl px-3 py-2 text-[14px] text-white">
        دسته بندی نشده
      </div>

      <div className={imageClassName}>
        <Image
          alt={article.title}
          src={article.src}
          fill
          className="object-cover"
        />
      </div>

      <NewArticleContent article={article} showContent={showContent} />
    </div>
  );
}

export default NewArticleCardBase;
