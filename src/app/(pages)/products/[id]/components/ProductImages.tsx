import Image from "next/image";

function ProductImages({ src, title }: { src: string; title: string }) {
  return (
    <div>
      <Image alt={title} src={src} width={500} height={500} />

      <div className="flex justify-center gap-4">
        <Image alt={title} src={src} width={70} height={70} />
        <Image alt={title} src={src} width={70} height={70} />
      </div>
    </div>
  );
}

export default ProductImages;
