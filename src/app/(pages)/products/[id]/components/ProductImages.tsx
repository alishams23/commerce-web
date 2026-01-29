import Image from "next/image";
import { Fragment } from "react/jsx-runtime";

function ProductImages({ src, title }: { src: string; title: string }) {
  return (
    <Fragment>
      <Image alt={title} src={src} width={500} height={500} />

      <div className="flex justify-center gap-4">
        <Image alt={title} src={src} width={70} height={70} />
        <Image alt={title} src={src} width={70} height={70} />
      </div>
    </Fragment>
  );
}

export default ProductImages;
