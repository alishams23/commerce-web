import Image from "next/image";

type TProductImagesProps = { src: string; name: string };

function ProductImages({ src, name }: TProductImagesProps) {
  return (
    <div>
      <Image alt={name} src={src} width={500} height={500} />

      <div className="flex justify-center gap-4">
        <Image alt={name} src={src} width={70} height={70} />
        <Image alt={name} src={src} width={70} height={70} />
      </div>
    </div>
  );
}

export default ProductImages;
