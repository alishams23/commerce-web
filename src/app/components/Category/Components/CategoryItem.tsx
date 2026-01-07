import Image from "next/image";
import { TCategoryItem } from "../constants";

function CategoryItem({ title, src }: TCategoryItem) {
  return (
    <div className="flex h-29.5 w-24 shrink-0 flex-col items-center gap-2 rounded-2xl bg-white lg:w-31">
      <Image
        src={src}
        alt={title}
        width={100}
        height={100}
        className="h-17.5 w-17.5"
      />
      <div>{title}</div>
    </div>
  );
}

export default CategoryItem;
