import NewArticleHeader from "./components/NewArticleHeader";
import { ARTICLES } from "./constants";
import NewArticleFeaturedCard from "./components/NewArticleFeaturedCard";
import NewArticleCard from "./components/NewArticleCard";

function NewArticle() {
  const [featured, ...others] = ARTICLES;

  return (
    <div className="mx-12 flex flex-col gap-4 md:mx-36">
      <NewArticleHeader />

      <div className="scrollbar-hide flex snap-x snap-proximity gap-2 overflow-x-scroll scroll-smooth md:grid md:grid-cols-[auto_1fr_1fr] md:grid-rows-2">
        <NewArticleFeaturedCard article={featured} />

        {others.map((article) => (
          <NewArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default NewArticle;
