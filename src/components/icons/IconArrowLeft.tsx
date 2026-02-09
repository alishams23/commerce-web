import Icon from "./Icon";
import { IconProps } from "./IconType";

function IconArrowLeft({ color = "#9B9B9B", size = 18 }: IconProps) {
  return (
    <Icon size={size} viewBox="0 0 14 16">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.46497 16.0382L0 9.57316L0.00584984 6.40821L4.63936 6.41661L4.2271 2.36221L6.58927 0L8.82717 2.23788L4.64843 6.41663L12.8871 6.43157L12.8814 9.59636L4.48378 9.58116L8.70287 13.8003L6.46497 16.0382Z"
        fill={color}
      />
    </Icon>
  );
}

export default IconArrowLeft;
