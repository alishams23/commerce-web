import Icon from "./Icon";
import { IconProps } from "./IconType";

function IconTelegram({ color = "white", size = 20 }: IconProps) {
  return (
    <Icon size={size} viewBox="0 0 24 24">
      <g>
        <path
          d="M7.89993 6.32015L16.3899 3.49015C20.1999 2.22015 22.2699 4.30015 21.0099 8.11015L18.1799 16.6001C16.2799 22.3101 13.1599 22.3101 11.2599 16.6001L10.4199 14.0801L7.89993 13.2401C2.18993 11.3401 2.18993 8.23015 7.89993 6.32015Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.6101 13.6505L14.1901 10.0605"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </Icon>
  );
}

export default IconTelegram;
