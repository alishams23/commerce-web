import { cn } from "@/lib/utils";

import FactoryInfoInstagram from "./components/FactoryInfoInstagram";
import FactoryInfoActions from "./components/FactoryInfoActions";
import FactoryInfoContent from "./components/FactoryInfoContent";
import FactoryInfoMedia from "./components/FactoryInfoMedia";

function FactoryInfo({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-6 lg:flex-row lg:gap-30", className)}>
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
