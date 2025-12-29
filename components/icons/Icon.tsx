import { ReactElement } from "react";

type IconProps = {
  size: number;
  children: ReactElement;
  viewBox?: string;
};

function Icon({ size, children, viewBox = "0 0 18 18" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

export default Icon;
