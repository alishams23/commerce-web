import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import FactoryInfo from "./components/FactoryInfo/FactoryInfo";
import Gallery from "./components/Gallery/Gallery";
import Ideal from "./components/Ideal/Ideal";
import NewProducts from "./components/NewProducts/NewProducts";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 md:gap-21">
      <Banner />
      <FactoryInfo />
      <Category />
      <Ideal />
      <NewProducts />
      <Gallery />
    </div>
  );
}
