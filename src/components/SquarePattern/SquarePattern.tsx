import { cn } from "@/lib/cn";
import { JSX } from "react";

function SquarePattern({
  className,
  color = "bg-[#F7F7F766]",
  size = 10, // px
}: {
  className?: string;
  color?: string;
  size?: number;
}): JSX.Element {
  const style = { width: size, height: size };

  return (
    <div
      style={{ width: size * 2 }}
      className={cn("absolute flex flex-col", className)}
    >
      <div style={style} className={cn("self-end", color)} />
      <div style={style} className={color} />
      <div style={style} className={cn("self-end", color)} />
    </div>
  );
}

export default SquarePattern;
