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
    <div className="col-span-2 flex flex-col items-center justify-center gap-1 rounded-2xl bg-[#F7F7F733] py-3.5 font-normal shadow-[inset_0.3px_0.6px_0_rgba(255,255,255,0.65),0_0_0_0.4px_rgba(255,255,255,0.45)]">
      <Icon variant="Bold" size={24} />
      <div className="text-sm">{label}</div>
    </div>
  );
}

export default FeatureCard;
