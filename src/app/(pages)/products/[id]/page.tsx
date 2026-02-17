"use client";

import { use } from "react";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import ProductPurchaseBox from "./components/ProductPurchaseBox";
import ProductTabs from "./components/ProductTabs";
import { getProductById } from "@/lib/API/Products/ProductById";
import { useQuery } from "@tanstack/react-query";

function ProductIdPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  /* -------------------------------------------------------------------------- */
  /*                                 React Query                                */
  /* -------------------------------------------------------------------------- */

  const PRODUCT_QUERY_KEY = ["product-by-id"];
  const { data, isLoading, isError } = useQuery({
    queryKey: PRODUCT_QUERY_KEY,
    queryFn: () => getProductById(id),
  });

  return (
    <div className="mx-12 flex flex-col gap-6 lg:mx-36">
      <Breadcrumbs
        items={[
          { href: "/products", name: "محصولات" },
          { href: `/products/${id}`, name: data?.name || "" },
        ]}
      />

      {!isError && !isLoading && data && (
        <div className="flex flex-col gap-6 lg:flex-row">
          <ProductImages
            src={data.colors[0].images[0].image}
            name={data.name}
          />
          <ProductInfo
            title={data.name}
            id={data.id}
            colors={data.colors}
            brand={data.brand}
          />
          <ProductPurchaseBox
            price={data.fixed_price}
            discountPercent={data.percentage}
          />
        </div>
      )}

      {!isError && !isLoading && data && (
        <ProductTabs description={data.description} brand={data.brand} />
      )}

      {/* <ProductsListRow
        products={NEW_PRODUCTS}
        title="محبوب‌ترین"
        shwMoreBtn={false}
      /> */}
    </div>
  );
}

export default ProductIdPage;
