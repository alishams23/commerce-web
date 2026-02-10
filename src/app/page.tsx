import FactoryInfo from "@/components/FactoryInfo/FactoryInfo";

import AmazingDiscounts from "./components/AmazingDiscounts/AmazingDiscounts";
import NewProducts from "./components/NewProducts/NewProducts";
import NewArticle from "./components/NewArticle/NewArticle";
import Category from "./components/Category/Category";
import Gallery from "./components/Gallery/Gallery";
import Banner from "./components/Banner/Banner";
import Ideal from "./components/Ideal/Ideal";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 lg:gap-21">
      <Banner />
      <FactoryInfo className="mx-12 lg:mx-36" />
      <Category />
      <Ideal />
      <NewProducts />
      <Gallery />
      <AmazingDiscounts />
      <NewArticle />
    </div>
  );
}
