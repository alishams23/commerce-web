import { Verify } from "iconsax-reactjs";

function FactoryInfoNotice() {
  return (
    <div className="flex gap-3 rounded-2xl bg-[#F4F7FF] px-5 py-3">
      <Verify variant="Bold" className="text-primary shrink-0" width={80} />
      <p className="text-[14px] leading-8">
        محصولات کارخانه ما با قیمت بسیار عالی در سایت وجود دارد که با بهترین
        کیفیت موجود در ایران ساخته شده و برای شما قابل فروش می باشد.
      </p>
    </div>
  );
}

export default FactoryInfoNotice;
