import { CloseSquare, HamburgerMenu } from "iconsax-reactjs";

import { Button } from "@/src/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/src/components/ui/drawer";

import UserButton from "./UserButton";
import Menubar from "@/src/app/(pages)/components/Menubar";

function MenuButton() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline" className="flex h-12.5 w-12.5 md:hidden">
          <HamburgerMenu variant="Broken" />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="bg-muted h-full gap-5 rounded-none px-6">
        <DrawerHeader className="p-0 pt-4">
          <DrawerClose className="text-primary">
            <CloseSquare size={32} />
          </DrawerClose>
        </DrawerHeader>

        <DrawerClose>
          <UserButton className="w-full" />
        </DrawerClose>

        <Menubar closeOnClick />
      </DrawerContent>
    </Drawer>
  );
}

export default MenuButton;
