"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { ArrowDown2 } from "iconsax-reactjs";

import { NAVBAR_ITEMS } from "../constants";
import { DrawerClose } from "@/src/components/ui/drawer";

type TMenubarProps = {
  closeOnClick?: boolean;
};

function Menubar({ closeOnClick = false }: TMenubarProps) {
  /* -------------------------------------------------------------------------- */
  /*                                    Next                                    */
  /* -------------------------------------------------------------------------- */

  const pathname = usePathname();

  return (
    <div className="border-muted flex flex-col gap-4 border-b pb-2 md:mx-12 md:mt-9 md:flex-row md:gap-5 lg:mx-36">
      {NAVBAR_ITEMS.map(({ enTitle, href, faTitle, icon, children }) => {
        const isActive = pathname === href;

        const content = (
          <Link
            href={href}
            className={`text-title flex items-center gap-2 rounded-2xl px-4 py-2 ${isActive ? "bg-primary text-white" : "bg-white hover:text-black"}`}
          >
            {icon}

            <div>
              <div className="text-[12px] leading-3 opacity-80">{enTitle}</div>
              <div>{faTitle}</div>
            </div>

            {children && <ArrowDown2 className="mr-auto" />}
          </Link>
        );

        return closeOnClick ? (
          <DrawerClose key={enTitle} asChild>
            {content}
          </DrawerClose>
        ) : (
          <div key={enTitle}>{content}</div> // react error for missing key
        );
      })}
    </div>
  );
}

export default Menubar;
