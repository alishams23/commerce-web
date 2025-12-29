import { ReactElement } from "react";

type SocialButtonProps = {
  icon: ReactElement;
  label: string;
  href: string;
};

function SocialButton({ icon, label, href }: SocialButtonProps) {
  return (
    <a
      href={href}
      className="flex h-28 grow flex-col items-center justify-between gap-1 rounded-2xl bg-[#F7F7F733] py-3.5 font-normal transition-opacity hover:opacity-80"
    >
      {icon}
      <div className="sideways-lr text-sm">{label}</div>
    </a>
  );
}

export default SocialButton;
