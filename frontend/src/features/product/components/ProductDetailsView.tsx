import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./RelatedProducts";

import type { ApiProduct } from "../types";
import FeatureBar from "@/components/common/FeatureBar";
import Hr from "@/components/ui/Hr";

import { Truck, RefreshCcw, ShieldCheck, Headphones } from "lucide-react";

type Props = {
  product: ApiProduct;
};

export default function ProductDetailsView({ product }: Props) {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-10">
            <ProductGallery product={product} />
            <ProductInfo product={product} />
          </div>
          <Hr />
          <FeatureBar
            items={[
              {
                icon: Truck,
                title: "Free Shipping",
                desc: "Orders over $50",
              },
              {
                icon: RefreshCcw,
                title: "Easy Returns",
                desc: "30-day policy",
              },
              {
                icon: ShieldCheck,
                title: "Secure Payment",
                desc: "Protected checkout",
              },
            ]}
          />
          <Hr />
          <ProductTabs product={product} />
          <RelatedProducts productId={product.id} />
        </div>
      </div>
    </div>
  );
}
