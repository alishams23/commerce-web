import type { ComponentType } from "react";

type IconProps = {
  variant?: "Bold" | "Broken" | "Bulk" | "Linear" | "Outline" | "TwoTone";
  size?: number | string;
};

type FeatureCardProps = {
  icon: ComponentType<IconProps>;
  label: string;
};

function FeatureCard({ icon: Icon, label }: FeatureCardProps) {
  return (
    <div className="col-span-2 flex flex-col items-center justify-center gap-1 rounded-2xl bg-[#F7F7F733] py-3.5 font-normal">
      <Icon variant="Bold" size={24} />
      <div className="text-sm">{label}</div>
    </div>
  );
}

export default FeatureCard;
