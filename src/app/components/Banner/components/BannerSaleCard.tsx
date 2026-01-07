import Image from "next/image";

function BannerSaleCard() {
  return (
    <div className="bottom-4 left-4 flex h-26.25 justify-between overflow-hidden rounded-3xl bg-[#EFEFEF33] pr-5 shadow-[inset_0.5px_0.3px_0_rgba(255,255,255,0.65),0_0_0_0.4px_rgba(255,255,255,0.45)] lg:absolute">
      <div className="flex flex-col items-start justify-center lg:flex-row lg:items-center lg:gap-2">
        <div className="text-primary text-2xl font-black [-webkit-text-stroke:1px_white] lg:text-[40px]">
          50%
        </div>
        <div className="text-[15px] font-semibold lg:text-2xl">
          حراج بزرگ در راه است...
        </div>
      </div>

      <div className="mr-3 flex h-26.25 w-41 items-center overflow-hidden rounded-r-3xl lg:w-51.25">
        <Image
          src="/asset/bags-black-and-white.jpg"
          alt="off-sale"
          width={256}
          height={253}
          className="grayscale"
        />
      </div>
    </div>
  );
}

export default BannerSaleCard;
