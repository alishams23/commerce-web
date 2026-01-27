import Breadcrumbs from "@/src/components/Breadcrumbs/Breadcrumbs";

function ProductsPage() {
  return (
    <div className="mx-12 lg:mx-36">
      <Breadcrumbs items={[{ name: "محصولات", href: "products" }]} />
      <div>ProductsPage</div>
    </div>
  );
}

export default ProductsPage;
