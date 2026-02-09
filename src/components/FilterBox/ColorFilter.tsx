import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function ColorFilter() {
  return (
    <div className="bg-muted text-title flex flex-col gap-4 rounded-2xl px-4 py-3">
      <div>فیلتر براساس رنگ :</div>
      <hr className="text-title" />

      <div className="flex flex-col text-[14px]">
        {[
          { id: "red", label: "قرمز", color: "bg-red-400" },
          { id: "black", label: "مشکی", color: "bg-black" },
          { id: "white", label: "سفید", color: "bg-white border" },
          { id: "blue", label: "آبی", color: "bg-blue-500" },
        ].map(({ id, label, color }) => (
          <div key={id} className="flex items-center gap-2">
            <Input type="checkbox" id={id} className="w-4" />
            <div className={cn("h-3 w-3 rounded-full", color)} />
            <label htmlFor={id}>{label}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorFilter;
