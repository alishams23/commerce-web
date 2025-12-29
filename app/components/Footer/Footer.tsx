import Image from "next/image";

import { ArrowUp } from "iconsax-reactjs";

import { Button } from "@/components/ui/button";

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
    <div className="from-primary-dark to-primary relative flex flex-col rounded-t-2xl bg-linear-to-b text-white">
      <div className="flex flex-col justify-between gap-6 px-12 pt-8 pb-6 md:flex-row md:gap-16 md:px-8">
        {/* About */}
        <div className="flex max-w-136.5 flex-col gap-4 md:pr-8">
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

          <p className="text-justify text-sm leading-6 font-normal">
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
          <div className="flex justify-between gap-6">
            <LinkColumn title="دسترسی سریع" links={QUICK_LINKS} />
            <LinkColumn title="دسترسی سریع" links={QUICK_LINKS} />
          </div>
          <AddressSection addresses={ADDRESSES} />
        </div>

        <div className="lg:hidden">
          <ContactInfo phoneNumbers={PHONE_NUMBERS} />
        </div>

        {/* Features, Contact, and Social */}
        <div className="grid grid-cols-4 gap-4 px-4 md:px-0">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.label}
              icon={feature.icon}
              label={feature.label}
            />
          ))}

          <div className="col-span-2 hidden lg:block">
            <ContactInfo phoneNumbers={PHONE_NUMBERS} />
          </div>

          <div className="col-span-2 col-start-3 flex gap-4">
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
      </div>
      <hr className="text-[#B0B0B0]" />
      <Button className="absolute bottom-1.5 left-8 hidden gap-0.5 bg-white text-[#4A4A4A] hover:bg-gray-300 md:inline-flex">
        {/* TODO: add function to go up */}
        <div className="font-normal">بریم بالا</div>
        <ArrowUp />
      </Button>
      <p className="py-3 text-center font-medium text-[#B0B0B0]">
        تمامی حقوق این وبسایت متعلق به آقای ابریشم میباشد
      </p>
    </div>
  );
}

export default Footer;
