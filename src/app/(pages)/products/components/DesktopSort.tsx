import { Button } from "@/components/ui/button";
import { SORT_OPTIONS } from "./constants";

type TDesktopSortProps = {
  activeSort: string;
  handleSortChange: (val: string) => void;
};

function DesktopSort({ activeSort, handleSortChange }: TDesktopSortProps) {
  return (
    <div className="hidden lg:block">
      <div className="mb-2">مرتب سازی</div>
      <div className="flex gap-2">
        {SORT_OPTIONS.map(({ name, value }) => (
          <Button
            key={name}
            variant={activeSort === value ? "default" : "outline"}
            onClick={() => handleSortChange(value)}
          >
            {name}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default DesktopSort;
