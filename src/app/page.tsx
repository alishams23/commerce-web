import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import FactoryInfo from "./components/FactoryInfo/FactoryInfo";
import Ideal from "./components/Ideal/Ideal";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 md:gap-21">
      <Banner />
      <div className="flex flex-col gap-12 md:gap-21 md:px-36">
        <FactoryInfo />
        <Category />
        <Ideal />
      </div>
    </div>
  );
}
