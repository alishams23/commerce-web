import { JSX } from "react";

function SquarePattern({ className }: { className?: string }): JSX.Element {
  return (
    <div className={`absolute flex w-5 flex-col ${className}`}>
      <div className="h-2.5 w-2.5 self-end bg-[#F7F7F766]" />
      <div className="h-2.5 w-2.5 bg-[#F7F7F766]" />
      <div className="h-2.5 w-2.5 self-end bg-[#F7F7F766]" />
    </div>
  );
}

export default SquarePattern;
