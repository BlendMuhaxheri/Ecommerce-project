import ProductList from "@/features/product/components/ProductList";
import ProductFilters from "@/features/product/components/ProductFilters";
import ProductSort from "@/features/product/components/ProductSort";

import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
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

export default async function ProductsPage({ searchParams }: PageProps) {
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

    priceMin: searchParams?.priceMin ? Number(searchParams.priceMin) : 0,

    priceMax: searchParams?.priceMax ? Number(searchParams.priceMax) : 2500,

    page: searchParams?.page ? Number(searchParams.page) : 1,
  };

  const queryKey = [
    "products",
    params.category ?? null,
    params.sort ?? null,
    params.search ?? null,
    params.priceMin,
    params.priceMax,
    params.page,
  ];

  await queryClient.prefetchQuery({
    queryKey,
    queryFn: () => getProductsSSR(params),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="w-full px-6 xl:px-10 2xl:px-16 py-10">
        <div className="flex gap-10 items-start">
          {/* LEFT SIDEBAR */}
          <div className="w-64 xl:w-72 hidden lg:block shrink-0">
            <ProductFilters />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1">
            {/* HEADER */}
            <div className="mb-6 flex items-start justify-between">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold">All Products</h1>

                <p className="text-sm text-gray-400">Showing products</p>
              </div>

              <ProductSort />
            </div>

            {/* GRID */}
            <ProductList />
          </div>
        </div>
      </div>
    </HydrationBoundary>
  );
}
