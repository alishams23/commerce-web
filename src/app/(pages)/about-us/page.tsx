import FactoryInfo from "@/components/FactoryInfo/FactoryInfo";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import FeedbackBox from "./components/FeedbackBox";
import TestimonialsList from "./components/TestimonialsList";

function AboutUsPage() {
  console.log("first");
  return (
    <div className="mx-12 lg:mx-36">
      <Breadcrumbs items={[{ href: "", name: "درباره‌ما" }]} />

      <div className="flex flex-col">
        <div>
          <div className="font-extrabold">درباره ما</div>
          <div className="text-subtitle mt-2 text-[14px]">
            آنچه باید درباره ما بدانید
          </div>
        </div>

        <FactoryInfo />

        <div className="mt-6 flex flex-col gap-6 lg:mt-12 lg:flex-row lg:gap-30">
          <div>
            <div>
              <div className="font-extrabold lg:text-2xl">محبت کاربران</div>
              <div className="text-subtitle mt-2 text-[14px]">
                محبت شما کاربران نسبت به سایت ما
              </div>
            </div>

            <FeedbackBox />
          </div>

          <TestimonialsList />
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
