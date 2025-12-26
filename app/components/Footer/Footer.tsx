import Image from "next/image";

import {
  ADDRESSES,
  FEATURES,
  PHONE_NUMBERS,
  QUICK_LINKS,
  SOCIAL_LINKS,
} from "./constants";

import AddressSection from "./components/AddressSection";
import BadgeSlider from "./components/BadgeSlider";
import ContactInfo from "./components/ContactInfo";
import FeatureCard from "./components/FeatureCard";
import LinkColumn from "./components/LinkColumn";
import SocialButton from "./components/SocialButton";

function Footer() {
  return (
    <div className="from-primary-dark to-primary flex flex-col rounded-t-2xl bg-linear-to-b text-white">
      <div className="flex justify-between gap-16 px-8 pt-8 pb-6">
        {/* About */}
        <div className="flex max-w-[38%] flex-col gap-4 pr-8">
          <div className="flex gap-2">
            <Image
              alt="کیف ابراشیم"
              src={"/logo-white.svg"}
              width={27}
              height={34.5}
            />
            <div className="content-end text-2xl leading-2 font-black">
              کیف ابراشیم
            </div>
          </div>

          <p className="text-sm font-normal">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی شصت و سه درصد گذشته
            حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
            افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
            خلاقی.
          </p>

          <BadgeSlider />
        </div>

        {/* Links and Address */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-6">
            <LinkColumn title="دسترسی سریع" links={QUICK_LINKS} />
            <LinkColumn title="دسترسی سریع" links={QUICK_LINKS} />
          </div>
          <AddressSection addresses={ADDRESSES} />
        </div>

        {/* Features, Contact, and Social */}
        <div className="grid grid-cols-4 gap-4">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.label}
              icon={feature.icon}
              label={feature.label}
            />
          ))}

          <ContactInfo phoneNumbers={PHONE_NUMBERS} />

          {SOCIAL_LINKS.map((social) => (
            <SocialButton
              key={`${social.label}`}
              icon={social.icon}
              label={social.label}
              href={social.href}
            />
          ))}
        </div>
      </div>
      <hr className="text-[#B0B0B0]" />
      <p className="py-3 text-center font-medium text-[#B0B0B0]">
        تمامی حقوق این وبسایت متعلق به آقای ابریشم میباشد
      </p>
    </div>
  );
}

export default Footer;
