import NewArticleCardBase from "./NewArticleCardBase";
import { TArticle } from "../constants";

type TNewArticleFeaturedCardProps = {
  article: TArticle;
};

function NewArticleFeaturedCard({ article }: TNewArticleFeaturedCardProps) {
  return (
    <NewArticleCardBase
      article={article}
      wrapperClassName="relative z-0 flex snap-start flex-col gap-2 rounded-2xl bg-[#F7F7F7] p-4 md:row-span-2"
      imageClassName="relative h-50 w-62.5 overflow-hidden rounded-2xl md:w-70.5"
    />
  );
}

export default NewArticleFeaturedCard;
