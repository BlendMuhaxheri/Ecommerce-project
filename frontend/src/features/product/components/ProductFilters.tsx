"use client";

import { useCategories } from "@/features/category/hooks/useCategories";
import { useProductFilters } from "../hooks/useProductFilters";

const brands = ["Nike", "Adidas", "Apple"];

export default function ProductFilters() {
  const { filters, setFilters } = useProductFilters();
  const { data: categories = [], isLoading } = useCategories();

  const min = filters.priceMin ?? 0;
  const max = filters.priceMax ?? 2500;

  return (
    <div className="p-4 border-r border-gray-200">
      <h3 className="font-semibold text-lg mb-6">Filters</h3>

      {/* CATEGORY */}
      <div className="mb-6">
        <p className="text-sm font-medium mb-3 text-gray-700">Category</p>

        <div className="space-y-2 text-sm text-gray-600">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            categories.map((c) => (
              <label
                key={c.id}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="category"
                  value={c.slug}
                  checked={filters.category === c.slug}
                  onChange={() => setFilters({ category: c.slug, page: 1 })}
                />
                {c.name}
              </label>
            ))
          )}
        </div>
      </div>

      {/* PRICE */}
      <div className="mb-6">
        <p className="text-sm font-medium mb-3 text-gray-700">Price Range</p>

        <input
          type="range"
          min={0}
          max={2500}
          value={min}
          onChange={(e) => {
            const value = Number(e.target.value);

            setFilters({
              priceMin: Math.min(value, max - 1),
              page: 1,
            });
          }}
          className="w-full accent-black cursor-pointer"
        />
        <input
          type="range"
          min={0}
          max={2500}
          value={max}
          onChange={(e) => {
            const value = Number(e.target.value);

            setFilters({
              priceMax: Math.max(value, min + 1),
              page: 1,
            });
          }}
          className="w-full accent-black cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>${min}</span>
          <span>${max}</span>
        </div>
      </div>

      {/* BRAND (still static for now) */}
      <div>
        <p className="text-sm font-medium mb-3 text-gray-700">Brand</p>

        <div className="space-y-2 text-sm text-gray-600">
          {brands.map((b) => (
            <label key={b} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" />
              {b}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
