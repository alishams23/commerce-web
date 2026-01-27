import { Home, Call, Category, Box, BookSaved } from "iconsax-reactjs";
import { ReactNode } from "react";

type TItem = {
  enTitle: string;
  faTitle: string;
  icon: ReactNode;
  href: string;
};

type TNavbarItem = TItem & {
  children?: TItem[];
};

export const NAVBAR_ITEMS: TNavbarItem[] = [
  {
    enTitle: "Home",
    faTitle: "صفحه‌اصلی",
    icon: <Home variant="Bold" />,
    href: "/",
  },
  {
    enTitle: "Category",
    faTitle: "دسته‌بندی",
    icon: <Category variant="Bold" />,
    href: "/category",
    children: [
      {
        enTitle: "Home",
        faTitle: "صفحه‌اصلی",
        icon: <Home variant="Bold" />,
        href: "/",
      },
    ],
  },
  {
    enTitle: "Products",
    faTitle: "محصولات",
    icon: <Box variant="Bold" />,
    href: "/products",
  },
  {
    enTitle: "Contact Us",
    faTitle: "تماس‌با‌ما",
    icon: <Call variant="Bold" />,
    href: "/contact",
  },
  {
    enTitle: "About Us",
    faTitle: "درباره‌ما",
    icon: <BookSaved variant="Bold" />,
    href: "/about",
  },
];
