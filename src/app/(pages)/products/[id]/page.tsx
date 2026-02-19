"use client";

import { use, useEffect, useState } from "react";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import ProductPurchaseBox from "./components/ProductPurchaseBox";
import ProductTabs from "./components/ProductTabs";
import {
  getProductById,
  TProductByIdResponse,
} from "@/lib/API/Products/ProductById";
import { APIError } from "@/lib/API/APIRequest";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

function ProductIdPage({ params }: { params: Promise<{ id: string }> }) {
  /* -------------------------------------------------------------------------- */
  /*                                    Next                                    */
  /* -------------------------------------------------------------------------- */

  const router = useRouter();

  /* -------------------------------------------------------------------------- */
  /*                                    React                                   */
  /* -------------------------------------------------------------------------- */

  const { id } = use(params);
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);

  /* -------------------------------------------------------------------------- */
  /*                                 React Query                                */
  /* -------------------------------------------------------------------------- */

  const {
    data: product,
    isLoading,
    isError,
    error,
    // <TProductByIdResponse, Error, TProductByIdResponse, string[]>
  } = useQuery<TProductByIdResponse, APIError, TProductByIdResponse, string[]>({
    queryKey: ["product-by-id", id],
    queryFn: () => getProductById(id),
  });

  /* -------------------------------------------------------------------------- */
  /*                                    React                                   */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    if (error && error.status === 404) {
      router.replace("/not-found");
    }
  }, [error, router]);

  if (isLoading) return <div>Loading...</div>;
  if ((isError && (!error || error.status !== 404)) || !product)
    return <div>Something went wrong.</div>;

  const selectedColor = product.colors[selectedColorIndex];

  return (
    <div className="mx-12 flex flex-col gap-6 lg:mx-36">
      <Breadcrumbs
        items={[
          { href: "/products", name: "محصولات" },
          { href: `/products/${id}`, name: product.name },
        ]}
      />

      <div className="flex flex-col gap-6 lg:flex-row">
        <ProductImages name={product.name} images={selectedColor.images} />

        <ProductInfo
          id={product.id}
          title={product.name}
          colors={product.colors}
          brand={product.brand}
          activeColor={selectedColorIndex}
          activeColorChange={(index) => setSelectedColorIndex(index)}
        />

        <ProductPurchaseBox
          price={selectedColor.price}
          discountPercentage={product.discount_percentage}
          stock={selectedColor.stock}
        />
      </div>

      <ProductTabs description={product.description} brand={product.brand} />

      {/* <ProductsListRow
        products={NEW_PRODUCTS}
        title="محبوب‌ترین"
        shwMoreBtn={false}
      /> */}
    </div>
  );
}

export default ProductIdPage;
