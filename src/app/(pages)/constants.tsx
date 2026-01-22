import { Home, Call } from "iconsax-reactjs";
import { ReactNode } from "react";

type TItem = {
  enTitle: string;
  faTitle: string;
  icon: ReactNode;
  // href: string;
};

type TNavbarItem = TItem & {
  children?: TItem[];
};

export const NAVBAR_ITEMS: TNavbarItem[] = [
  { enTitle: "Home", faTitle: "صفحه‌اصلی", icon: <Home variant="Bold" /> },
  {
    enTitle: "Category",
    faTitle: "دسته‌بندی",
    icon: <Home variant="Bold" />,
    children: [
      { enTitle: "Home", faTitle: "صفحه‌اصلی", icon: <Home variant="Bold" /> },
    ],
  },
  { enTitle: "Products", faTitle: "محصولات", icon: <Home variant="Bold" /> },
  {
    enTitle: "Contact Us",
    faTitle: "تماس‌با‌ما",
    icon: <Call variant="Bold" />,
  },
  { enTitle: "About Us", faTitle: "درباره‌ما", icon: <Home variant="Bold" /> },
];
