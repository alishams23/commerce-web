import Icon from "./Icon";
import { IconProps } from "./IconType";

function IconStar({ color = "#051F6F", size = 18 }: IconProps) {
  return (
    <Icon size={size}>
      <path
        d="M8 0C8 0 8.44139 4.11995 10.1607 5.83928C11.8801 7.55861 16 8 16 8C16 8 11.8801 8.44139 10.1607 10.1607C8.44139 11.8801 8 16 8 16C8 16 7.55861 11.8801 5.83928 10.1607C4.11995 8.44139 0 8 0 8C0 8 4.11995 7.55861 5.83928 5.83928C7.55861 4.11995 8 0 8 0Z"
        fill={color}
      />
    </Icon>
  );
}

export default IconStar;
