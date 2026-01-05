import { TArticle } from "../constants";
import NewArticleCardBase from "./NewArticleCardBase";

type TNewArticleCardProps = {
  article: TArticle;
};

function NewArticleCard({ article }: TNewArticleCardProps) {
  return (
    <NewArticleCardBase
      article={article}
      showContent
      wrapperClassName="relative z-0 flex snap-start flex-col gap-2 rounded-2xl bg-[#F7F7F7] p-4 md:col-span-2 md:flex-row"
      imageClassName="relative h-50 w-62.5 overflow-hidden rounded-2xl md:h-31 md:w-36.5 md:shrink-0"
    />
  );
}

export default NewArticleCard;
