import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bag, SearchNormal1, User } from "iconsax-reactjs";
import Image from "next/image";

function Header() {
  return (
    <div className="flex justify-between px-36 pt-10 pb-12">
      <div className="flex items-center gap-2">
        <Image alt="کیف ابراشیم" src={"/logo.svg"} width={27} height={34.5} />
        <div className="text-primary content-end text-2xl leading-2 font-black">
          کیف ابراشیم
        </div>
      </div>

      <div className="flex gap-3">
        <div className="relative w-85">
          <Input placeholder="جست و جو . . ." variant="filled" type="search" />
          <Button className="absolute top-1/2 left-2 h-8.5 w-8.5 -translate-y-1/2 rounded-2xl bg-white hover:bg-transparent">
            <SearchNormal1 className="h-5 w-5 text-gray-500" />
          </Button>
        </div>

        <Button variant="outline" className="text-primary rounded-2xl">
          <User />
          <div className="text-[16px] font-semibold">علی ابریشم</div>
        </Button>
        <Button className="rounded-2xl">
          <Bag variant="Bold" />
        </Button>
      </div>
    </div>
  );
}

export default Header;
