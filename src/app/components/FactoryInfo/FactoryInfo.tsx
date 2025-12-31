import FactoryInfoInstagram from "./components/FactoryInfoInstagram";
import FactoryInfoActions from "./components/FactoryInfoActions";
import FactoryInfoContent from "./components/FactoryInfoContent";
import FactoryInfoMedia from "./components/FactoryInfoMedia";

function FactoryInfo() {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-30">
      {/* Contents and Actions */}
      <div className="flex flex-col gap-2 md:w-1/2 md:gap-6">
        <FactoryInfoContent />
        <FactoryInfoActions />
      </div>

      {/* Media and Instagram Id */}
      <div className="flex flex-col gap-2 md:w-1/2 md:gap-4">
        <FactoryInfoMedia />
        <FactoryInfoInstagram />
      </div>
    </div>
  );
}

export default FactoryInfo;
