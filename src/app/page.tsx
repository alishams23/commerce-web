import Banner from "./components/Banner/Banner";
import FactoryInfo from "./components/FactoryInfo/FactoryInfo";

export default function Home() {
  return (
    <div className="flex flex-col gap-21">
      <Banner />
      <div className="md:px-36">
        <FactoryInfo />
      </div>
    </div>
  );
}
