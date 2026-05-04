import HeroSection from "@/features/home/components/HeroSection";
import FeatureBar from "@/features/home/components/FeatureBar";
import CategoryGrid from "@/features/home/components/CategoryGrid";
import ProductSection from "@/features/home/components/ProductSection";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { getProductsSSR } from "@/features/product/server/getProductsSSR";
import { SortBy } from "@/features/product/types";

type PageProps = {
  searchParams?: {
    category?: string;
    sort?: string;
    search?: string;
    priceMin?: string;
    priceMax?: string;
    page?: string;
  };
};

export default async function Page({ searchParams }: PageProps) {
  const queryClient = new QueryClient();

  const rawSort = searchParams?.sort;

  const sort: SortBy | undefined =
    rawSort === "price_asc" || rawSort === "price_desc" || rawSort === "newest"
      ? rawSort
      : undefined;

  const params = {
    category: searchParams?.category,
    sort,
    search: searchParams?.search,

    priceMin: searchParams?.priceMin
      ? Number(searchParams.priceMin)
      : undefined,

    priceMax: searchParams?.priceMax
      ? Number(searchParams.priceMax)
      : undefined,

    page: searchParams?.page ? Number(searchParams.page) : 1,
  };

  const queryKey = [
    "products",
    params.category,
    params.sort,
    params.search,
    params.priceMin,
    params.priceMax,
    params.page,
  ];

  await queryClient.prefetchQuery({
    queryKey,
    queryFn: () => getProductsSSR(params),
  });

  return (
    <>
      <HeroSection />
      <FeatureBar />
      <CategoryGrid />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProductSection />
      </HydrationBoundary>
    </>
  );
}
