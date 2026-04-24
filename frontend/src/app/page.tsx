import HeroSection from "@/features/home/components/HeroSection";
import FeatureBar from "@/features/home/components/FeatureBar";
import CategoryGrid from "@/features/home/components/CategoryGrid";
import ProductSection from "@/features/home/components/ProductSection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <FeatureBar />
      <CategoryGrid />
      <ProductSection/>
    </>
  );
}