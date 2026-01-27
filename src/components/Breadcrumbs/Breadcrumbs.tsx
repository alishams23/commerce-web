import { Fragment } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

type TBreadcrumbsProps = {
  items: {
    name: string;
    href: string;
  }[];
};

function Breadcrumbs({ items }: TBreadcrumbsProps) {
  /* -------------------------------------------------------------------------- */
  /*                                  Constant                                  */
  /* -------------------------------------------------------------------------- */

  const lastIndex = items.length - 1;

  return (
    <Breadcrumb className="my-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="font-normal" href="/">
            صفحه اصلی
          </BreadcrumbLink>
        </BreadcrumbItem>

        {items.map(({ name, href }, index) => (
          <Fragment key={name}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href={href}
                className={
                  index === lastIndex ? "text-primary font-semibold" : ""
                }
              >
                {name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default Breadcrumbs;
