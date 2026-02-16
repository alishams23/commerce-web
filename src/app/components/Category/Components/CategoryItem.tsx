import { TCategoryChild } from "@/lib/API/Home/categories";
import Image from "next/image";

function CategoryItem({
  name,
  src,
}: Omit<TCategoryChild, "id" | "order"> & { src: string }) {
  return (
    <div className="flex h-29.5 w-24 shrink-0 cursor-pointer flex-col items-center gap-2 rounded-2xl bg-white lg:w-31">
      <Image
        src={src}
        alt={name}
        width={100}
        height={100}
        className="h-17.5 w-17.5"
      />
      <div>{name}</div>
    </div>
  );
}

export default CategoryItem;
