import { IconArrowLeft, IconArrowRight } from "@/src/components/icons";
import IconStart from "@/src/components/icons/IconStart";
import { Button } from "@/src/components/ui/button";
import { ArrowLeft, Bag } from "iconsax-reactjs";
import Image from "next/image";

function NewProductsItemCard({
  colors,
  title,
  price,
  src,
}: {
  src: string;
  colors: string[];
  title: string;
  price: number;
}) {
  return (
    <div className="relative flex min-w-fit flex-col gap-2 rounded-3xl bg-[#F7F7F7] p-4">
      <div className="flex flex-col rounded-2xl bg-white">
        <div className="flex justify-between">
          <div className="rounded-tr-2xl rounded-bl-2xl border-2 border-[#E2E2E2] p-2">
            <IconArrowRight color="#E2E2E2" />
          </div>
          <div className="rounded-tl-2xl rounded-br-2xl border-2 border-[#E2E2E2] p-2">
            <IconArrowLeft color="#E2E2E2" />
          </div>
        </div>
        <Image
          alt={title}
          src={src}
          width={120}
          height={120}
          className="mx-8 h-30 w-30"
        />

        <div className="flex gap-1 self-end p-1">
          {colors.map((color) => (
            <div
              className="h-6 w-6 rounded-lg"
              key={color}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>
      <div className="font-semibold text-[#505050]">{title}</div>
      <div className="pb-4 text-[14px] font-normal text-[#9F9F9F]">
        {price} تومان
      </div>

      <Button className="absolute bottom-4 left-4 rounded-2xl bg-white p-3">
        <Bag color="#9F9F9F" />
      </Button>
    </div>
  );
}

const NEW_PRODUCTS: {
  colors: string[];
  price: number;
  title: string;
  src: string;
}[] = [
  {
    colors: ["#FF7676", "#453A77", "#4D2F63"],
    price: 12000,
    title: "کیف ورزشی مدل راکوتن",
    src: "/asset/purple-bag.png",
  },
  {
    colors: ["#FF7676", "#453A77", "#4D2F63"],
    price: 212000,
    title: "کیف ورزشی مدل راکوتن",
    src: "/asset/bag-cat/bag-cat-1.png",
  },
  {
    colors: ["#FF7676", "#453A77", "#4D2F63"],
    price: 12000,
    title: "کیف ورزشی مدل راکوتن",
    src: "/asset/purple-bag.png",
  },
  {
    colors: ["#FF7676", "#453A77", "#4D2F63"],
    price: 12000,
    title: "کیف ورزشی مدل راکوتن",
    src: "/asset/bag-cat/bag-cat-3.png",
  },
  {
    colors: ["#FF7676", "#453A77", "#4D2F63"],
    price: 12000,
    title: "کیف ورزشی مدل راکوتن",
    src: "/asset/bag-cat/bag-cat-1.png",
  },
];

function NewProducts() {
  return (
    <div className="mx-12 flex flex-col gap-3 md:mx-36">
      <div className="flex justify-between">
        <div className="flex items-center gap-1 text-xl">
          <IconStart />
          <span className="font-extrabold">جدید ترین</span> محصولات
        </div>
        <Button className="hidden w-fit gap-3 rounded-lg bg-[#EBF0FF] p-6 text-[#373254] md:flex">
          <div className="text-[16px] font-semibold">مشاهده همه</div>
          <div className="relative z-0 rounded-full border-2 p-1">
            <ArrowLeft size={13} />
            <div className="absolute top-0 left-2 -z-10 h-full w-full rounded-full bg-[#051F6F30]" />
          </div>
        </Button>
      </div>

      {/* Items */}
      <div className="scrollbar-hide flex justify-between gap-3 overflow-x-auto md:mx-0">
        {NEW_PRODUCTS.map(({ colors, title, src, price }, index) => (
          <NewProductsItemCard
            key={title + index}
            colors={colors}
            price={price}
            src={src}
            title={title}
          />
        ))}
      </div>

      <Button className="flex w-fit gap-3 self-center rounded-lg bg-[#EBF0FF] p-6 text-[#373254] md:hidden">
        <div className="text-[16px] font-semibold">مشاهده همه</div>
        <div className="relative z-0 rounded-full border-2 p-1">
          <ArrowLeft size={13} />
          <div className="absolute top-0 left-2 -z-10 h-full w-full rounded-full bg-[#051F6F30]" />
        </div>
      </Button>
    </div>
  );
}

export default NewProducts;
