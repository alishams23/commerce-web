import Icon from "./Icon";
import { IconProps } from "./IconType";

function IconArrowRight({ color = "#9B9B9B", size = 18 }: IconProps) {
  return (
    <Icon size={size}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4285 2.57129V12.857L12.9061 15.3701L9.22685 11.6775L6.32954 15.2307H2.57129V11.6702H9.21964L2.67773 5.1045L5.1999 2.59146L11.868 9.2838V2.57129H15.4285Z"
        fill={color}
      />
    </Icon>
  );
}

export default IconArrowRight;
