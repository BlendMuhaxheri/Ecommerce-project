import HeroSection from "@/features/home/components/HeroSection";
import FeatureBar from "@/components/common/FeatureBar";
import CategoryGrid from "@/features/home/components/CategoryGrid";
import ProductSection from "@/features/home/components/ProductSection";

import { Truck, RefreshCcw, ShieldCheck, Headphones } from "lucide-react";

export default function Page() {
  return (
    <>
      <HeroSection />
      <FeatureBar
        items={[
          {
            icon: Truck,
            title: "Free Shipping",
            desc: "On all orders over $50",
          },
          {
            icon: RefreshCcw,
            title: "Easy Returns",
            desc: "30-day return policy",
          },
          {
            icon: ShieldCheck,
            title: "Secure Payment",
            desc: "100% protected checkout",
          },
          {
            icon: Headphones,
            title: "24/7 Support",
            desc: "We’re here to help anytime",
          },
        ]}
      />
      <CategoryGrid />
      <ProductSection />
    </>
  );
}
