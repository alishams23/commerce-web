import BannerCategoryCard from "./components/BannerCategoryCard";
import BannerSaleCard from "./components/BannerSaleCard";
import BannerTitle from "./components/BannerTitle";
import BannerNav from "./components/BannerNav";

function Banner() {
  return (
    <div className="grid gap-2 text-white md:grid-cols-4 md:pl-36 [&>*:not(:first-child)]:rounded-3xl">
      <div className="from-primary relative z-10 row-span-4 flex flex-col gap-12 rounded-3xl bg-linear-to-l to-[#679CBC] px-1.5 pb-3 md:col-span-3 md:flex-row md:gap-16 md:rounded-r-none md:px-0 md:pb-30.5">
        {/* Decorative circle (purely visual) */}
        <div className="bg-primary absolute -right-90 z-20 hidden h-136.5 w-155.25 rounded-full border-60 border-[#1C3779] md:block" />

        <BannerNav />
        <BannerTitle />
        <BannerSaleCard />
      </div>

      <BannerCategoryCard
        title="از تولید تا مصرف"
        subtitle="خرید از ما یعنی خرید مستقیم از کارخانه"
        imageSrc="/asset/bag1.png"
        gradient="bg-linear-to-l from-[#4D2F63] to-[#9C5FC9]"
      />
      <BannerCategoryCard
        title="کیف مدرسه"
        subtitle="خرید کیف مدرسه با کیفیت"
        imageSrc="/asset/bag2.png"
        gradient="bg-linear-to-l from-[#E08544] to-[#FF3535]"
      />
      <BannerCategoryCard
        title="آماده سفر باش!"
        subtitle="کیف سفرتو از ما بیگیر"
        imageSrc="/asset/bag3.png"
        gradient="bg-linear-to-l from-[#0E1F55] to-[#6E92FF]"
      />
      <BannerCategoryCard
        title="کیف های طرح دار"
        subtitle="جدید ترین کیف های طرح دار دنیا!"
        imageSrc="/asset/bag4.png"
        gradient="bg-linear-to-l from-[#09A113] to-[#9DFF68]"
      />
    </div>
  );
}

export default Banner;
