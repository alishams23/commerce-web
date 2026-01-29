import { use } from "react";
import { notFound } from "next/navigation";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

import { PAGE_PRODUCTS } from "../constants";

import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import ProductPurchaseBox from "./components/ProductPurchaseBox";
import ProductTabs from "./components/ProductTabs";

function ProductIdPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  // TODO: Get item from API
  const product = PAGE_PRODUCTS.find((item) => item.id === Number(id));

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-12 flex flex-col gap-6 lg:mx-36">
      <Breadcrumbs
        items={[
          { href: "/products", name: "محصولات" },
          { href: `/products/${id}`, name: product.title },
        ]}
      />

      <div className="flex flex-col gap-6 lg:flex-row">
        <ProductImages src={product.src} title={product.title} />
        <ProductInfo
          title={product.title}
          id={product.id}
          colors={product.colors}
        />
        <ProductPurchaseBox price={product.price} discountPercent={27} />
      </div>
      <ProductTabs />
    </div>
  );
}

export default ProductIdPage;
