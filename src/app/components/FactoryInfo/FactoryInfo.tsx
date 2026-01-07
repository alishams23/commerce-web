import FactoryInfoInstagram from "./components/FactoryInfoInstagram";
import FactoryInfoActions from "./components/FactoryInfoActions";
import FactoryInfoContent from "./components/FactoryInfoContent";
import FactoryInfoMedia from "./components/FactoryInfoMedia";

function FactoryInfo() {
  return (
    <div className="mx-12 flex flex-col gap-6 lg:mx-36 lg:flex-row lg:gap-30">
      {/* Contents and Actions */}
      <div className="flex flex-col gap-2 lg:w-1/2 lg:gap-6">
        <FactoryInfoContent />
        <FactoryInfoActions />
      </div>

      {/* Media and Instagram Id */}
      <div className="flex flex-col gap-2 lg:w-1/2 lg:gap-4">
        <FactoryInfoMedia />
        <FactoryInfoInstagram />
      </div>
    </div>
  );
}

export default FactoryInfo;
