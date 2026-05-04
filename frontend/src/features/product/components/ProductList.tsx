"use client";

import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts";
import { useProductFilters } from "../hooks/useProductFilters";

export default function ProductGrid() {
  const { filters, setFilters } = useProductFilters();

  const { data, isLoading, isFetching } = useProducts({
    category: filters.category,
    sort: filters.sort,
    search: filters.search,
    priceMin: filters.priceMin,
    priceMax: filters.priceMax,
    page: filters.page,
  });

  const products = data?.data ?? [];
  const meta = data?.meta;

  const handleLoadMore = () => {
    if (isFetching) return;

    setFilters({
      page: (filters.page ?? 1) + 1,
    });
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {meta && filters.page < meta.last_page && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            disabled={isFetching}
            className="px-6 py-2 rounded bg-black text-white"
          >
            {isFetching ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}
