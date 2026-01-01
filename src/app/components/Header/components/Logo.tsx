import Image from "next/image";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image alt="کیف ابراشیم" src="/logo.svg" width={27} height={34.5} />
      <div className="text-primary content-end font-[Kalameh] text-2xl leading-2 font-black">
        کیف ابراشیم
      </div>
    </div>
  );
}

export default Logo;
