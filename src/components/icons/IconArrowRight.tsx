import Icon from "./Icon";
import { IconProps } from "./IconType";

function IconArrowLeft({ color = "#9B9B9B", size = 18 }: IconProps) {
  return (
    <Icon size={size}>
      <path
        fill-rule="evenodd"
        fill={color}
        clip-rule="evenodd"
        d="M6.42208 16.0382L12.8871 9.57316L12.8812 6.40821L8.24768 6.41661L8.65998 2.36221L6.29778 0L4.0599 2.23788L8.23868 6.41663L0 6.43157L0.00573969 9.59636L8.40328 9.58116L4.18422 13.8003L6.42208 16.0382Z"
      />
    </Icon>
  );
}

export default IconArrowLeft;
