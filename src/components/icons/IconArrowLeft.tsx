import Icon from "./Icon";
import { IconProps } from "./IconType";

function IconArrowLeft({ color = "#9B9B9B", size = 18 }: IconProps) {
  return (
    <Icon size={size}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.57153 15.4287V5.14292L5.09388 2.62988L8.77312 6.3225L11.6704 2.7693H15.4287V6.32974H8.78033L15.3222 12.8955L12.8001 15.4085L6.13197 8.71613V15.4287H2.57153Z"
        fill={color}
      />
    </Icon>
  );
}

export default IconArrowLeft;
