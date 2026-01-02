import IconStart from "@/src/components/icons/IconStart";
import Image from "next/image";

const IMAGES: { src: string; title: string }[] = [
  { title: "تولیدی کیف های کارتونی", src: "/asset/gallery/gallery1.jpg" },
  { title: "تولیدی کیف های کارتونی", src: "/asset/gallery/gallery2.jpg" },
  { title: "تولیدی کیف های کارتونی", src: "/asset/gallery/gallery3.jpg" },
  { title: "تولیدی کیف های کارتونی", src: "/asset/gallery/gallery4.jpg" },
];

function Gallery() {
  return (
    <div className="flex flex-col items-center overflow-x-auto bg-[#F7F7F7] pt-8">
      <div className="text-2xl font-bold md:text-4xl">گالری تولیدی ما</div>
      <IconStart size={24} />
      <div className="flex gap-6 overflow-x-auto px-13">
        {IMAGES.map(({ title, src }, index) => (
          <div
            key={title + index}
            className="relative h-[550px] w-[307px] overflow-hidden rounded-3xl"
          >
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover"
              sizes="307px"
              priority={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
