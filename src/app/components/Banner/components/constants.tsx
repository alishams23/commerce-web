import { ReactNode } from "react";

import { BookSaved, Box, CallCalling, Category, Home2 } from "iconsax-reactjs";

type NavItem = {
  titleEn: string;
  titleFa: string;
  icon: ReactNode;
  className: string;
};

export const NAV_BUTTON_BASE =
  "h-fit w-40 justify-start gap-1 rounded-xl bg-[#FFFFFFB2] py-2 transition-transform duration-300 ease-out hover:-translate-1 hover:shadow-[0_10px_5px_0_rgba(0,0,0,0.15)] hover:bg-primary";

export const NAV_ITEMS: NavItem[] = [
  {
    titleEn: "Home",
    titleFa: "صفحه اصلی",
    icon: <Home2 variant="Bold" />,
    className: "mr-25",
  },
  {
    titleEn: "Category",
    titleFa: "دسته بندی",
    icon: <Category variant="Bold" />,
    className: "mr-37.5",
  },
  {
    titleEn: "Products",
    titleFa: "محصولات",
    icon: <Box variant="Bold" />,
    className: "mr-50",
  },
  {
    titleEn: "Contact Us",
    titleFa: "تماس با ما",
    icon: <CallCalling variant="Bold" />,
    className: "mr-37.5",
  },
  {
    titleEn: "About Us",
    titleFa: "درباره ما",
    icon: <BookSaved variant="Bold" />,
    className: "mr-25",
  },
];
