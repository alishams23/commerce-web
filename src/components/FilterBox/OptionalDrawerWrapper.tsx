import { Fragment, ReactElement } from "react";
import { DrawerClose } from "../ui/drawer";

type TOptionalDrawerWrapperProps = {
  isInDrawer: boolean;
  children: ReactElement;
};

function OptionalDrawerWrapper({
  isInDrawer,
  children,
}: TOptionalDrawerWrapperProps) {
  return isInDrawer ? (
    <DrawerClose asChild>{children}</DrawerClose>
  ) : (
    <Fragment>{children}</Fragment>
  );
}

export default OptionalDrawerWrapper;
