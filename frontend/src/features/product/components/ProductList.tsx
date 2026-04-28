"use client";

import { useEffect, useState } from "react";
import { useProductStore } from "../store/product.store";
import { fetchProducts, ProductMeta } from "../services/product.api";
import ProductCard from "./ProductCard";
import { Product } from "../types";

export default function ProductGrid() {
  const { filters, page, setPage } = useProductStore();

  const [products, setProducts] = useState<Product[]>([]);
  const [meta, setMeta] = useState<ProductMeta | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);

        const response = await fetchProducts({
          ...filters,
          page,
        });

        if (page === 1) {
          setProducts(response.data);
        } else {
          setProducts((prev) => {
            const merged = [...prev, ...response.data];
            const unique = Array.from(
              new Map(merged.map((item) => [item.id, item])).values(),
            );

            return unique;
          });
        }

        setMeta(response.meta);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [filters, page]);

  const handleLoadMore = () => {
    if (!loading) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {meta && page < meta.last_page && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className={`px-6 py-2 rounded transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}
