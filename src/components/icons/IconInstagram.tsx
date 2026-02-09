import Icon from "./Icon";
import { IconProps } from "./IconType";

function IconInstagram({ color = "white", size = 20 }: IconProps) {
  return (
    <Icon size={size} viewBox="0 0 24 24">
      <g>
        <path
          d="M9.5 22H15.5C20.5 22 22.5 20 22.5 15V9C22.5 4 20.5 2 15.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 15.5C14.433 15.5 16 13.933 16 12C16 10.067 14.433 8.5 12.5 8.5C10.567 8.5 9 10.067 9 12C9 13.933 10.567 15.5 12.5 15.5Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.136 7H18.1476"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </Icon>
  );
}

export default IconInstagram;
