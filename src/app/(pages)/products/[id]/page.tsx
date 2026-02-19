"use client";

import { use, useState } from "react";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import ProductPurchaseBox from "./components/ProductPurchaseBox";
import ProductTabs from "./components/ProductTabs";
import { getProductById } from "@/lib/API/Products/ProductById";
import { useQuery } from "@tanstack/react-query";

function ProductIdPage({ params }: { params: Promise<{ id: string }> }) {
  /* -------------------------------------------------------------------------- */
  /*                                    React                                   */
  /* -------------------------------------------------------------------------- */

  const { id } = use(params);
  const [activeColor, setActiveColor] = useState<number>(0);

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
            name={data.name}
            images={data.colors[activeColor].images}
          />

          <ProductInfo
            id={data.id}
            title={data.name}
            colors={data.colors}
            brand={data.brand}
            activeColor={activeColor}
            activeColorChange={(index) => setActiveColor(index)}
          />

          <ProductPurchaseBox
            price={data.colors[activeColor].price}
            discountPercentage={data.percentage}
            stock={data.colors[activeColor].stock}
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
