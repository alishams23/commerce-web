import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex cursor-pointer items-center gap-2">
      <Image alt="کیف ابراشیم" src="/logo.svg" width={27} height={34.5} />
      <div className="text-primary content-end font-[Kalameh] text-2xl leading-2 font-black">
        کیف ابراشیم
      </div>
    </Link>
  );
}

export default Logo;
