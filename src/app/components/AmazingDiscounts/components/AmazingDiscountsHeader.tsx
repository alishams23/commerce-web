import { Button } from "@/src/components/ui/button";
import { Fragment } from "react/jsx-runtime";

function AmazingDiscountsHeader() {
  return (
    <Fragment>
      <div className="text-primary text-xl font-black">
        تخفیف های شگفت انگیز
      </div>
      <Button className="text-primary border bg-white">مشاهده همه</Button>
    </Fragment>
  );
}

export default AmazingDiscountsHeader;
