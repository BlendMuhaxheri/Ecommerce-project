import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductBenefits from "./ProductBenefits";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./RelatedProducts";

export default function ProductDetailsView({ product }: any) {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-10">
            <ProductGallery product={product} />
            <ProductInfo product={product} />
          </div>

          <ProductBenefits />

          <ProductTabs product={product} />
          <RelatedProducts productId={product.id} />
        </div>
      </div>
    </div>
  );
}
