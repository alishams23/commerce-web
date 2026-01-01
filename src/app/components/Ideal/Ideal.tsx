import IdealCard from "./components/IdealCard";

function Ideal() {
  return (
    <div className="mx-12 flex flex-col gap-4 md:mx-36 md:flex-row md:gap-6">
      <IdealCard
        content="معرفی بهترین کیف های مجموعه"
        className="bg-[#CCD8FF]"
        title="ایده آل ها برای شما"
        titleGradient="from-[#776BB700] via-[#776BB7] to-[#776BB700]"
        src="/asset/purple-bag.png"
      />
      <IdealCard
        content="بالا ترین کیفیت تولید"
        className="bg-[#FFF0D3]"
        title="بهترین ها از آن شماست"
        titleGradient="from-[#F6E8CC00] via-[#FFC95E] to-[#F6E8CC00]"
        src="/asset/bag-cat/bag-cat-1.png"
      />
    </div>
  );
}

export default Ideal;
