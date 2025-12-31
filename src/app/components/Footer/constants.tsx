import { IconInstagram, IconTelegram } from "@/src/components/icons";
import { BagTick2, I24Support, ShieldTick, TruckFast } from "iconsax-reactjs";

export const BADGES = [
  { src: "/Footer/namad.png", alt: "نماد" },
  { src: "/Footer/meli-badge.png", alt: "ملی‌نماد" },
  { src: "/Footer/kasbokar.png", alt: "کسب‌و‌کار" },
  { src: "/Footer/namad.png", alt: "نماد2" },
  { src: "/Footer/meli-badge.png", alt: "2ملی‌نماد" },
] as const;

export const QUICK_LINKS = [
  { label: "دسته بندی", href: "#" },
  { label: "محصولات تخفیف‌ دار", href: "#" },
  { label: "تماس باما", href: "#" },
  { label: "درباره ما", href: "#" },
] as const;

export const ADDRESSES = [
  "آدرس فروشگاه: یزد ، بلوار ۱۷ شهریور ، رو به روی سینما جام جم",
  "آدرس کارخانه: یزد ، شهرک صنعتی ، بلوک بهار",
] as const;

export const PHONE_NUMBERS = [
  { label: "۰۳۵-۸۲۴۹۸۳۴", href: "tel:۰۳۵۸۲۴۹۸۳۴" },
  { label: "۰۹۱۳۵۶۷۲۳۴۳", href: "tel:۰۹۱۳۵۶۷۲۳۴۳" },
] as const;

export const FEATURES = [
  {
    icon: BagTick2,
    label: "تحویل اکسپرس",
  },
  {
    icon: I24Support,
    label: "مشاوره و پشتیبانی",
  },
  {
    icon: TruckFast,
    label: "ارسال رایگان",
  },
  {
    icon: ShieldTick,
    label: "گارانتی بازگشت وجه",
  },
] as const;

export const SOCIAL_LINKS = [
  {
    icon: <IconTelegram />,
    label: "تلگرام",
    href: "#",
  },
  {
    icon: <IconInstagram />,
    label: "اینستاگرام",
    href: "#",
  },
] as const;
