import { Button } from "@/components/ui/button";
import { SORT_OPTIONS } from "./constants";

function DesktopSort() {
    return (
      <div className="hidden lg:block">
        <div className="mb-2">مرتب سازی</div>
        <div className="flex gap-2">
          {SORT_OPTIONS.map((option) => (
            <Button key={option} variant="outline">
              {option}
            </Button>
          ))}
        </div>
      </div>
    );
  }
  
  export default DesktopSort;
  