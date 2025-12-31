import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import FactoryInfo from "./components/FactoryInfo/FactoryInfo";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 md:gap-21">
      <Banner />
      <div className="flex flex-col gap-12 md:gap-21 md:px-36">
        <FactoryInfo />
        <Category />
      </div>
    </div>
  );
}
