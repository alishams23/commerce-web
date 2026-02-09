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
      wrapperClassName="relative z-0 flex snap-start flex-col gap-2 rounded-2xl bg-muted p-4 lg:col-span-2 lg:flex-row"
      imageClassName="relative h-50 w-62.5 overflow-hidden rounded-2xl lg:h-31 lg:w-36.5 lg:shrink-0"
    />
  );
}

export default NewArticleCard;
