"use client";

import { useState } from "react";
import { useProductStore } from "../store/product.store";

const categories = ["Fashion", "Electronics", "Home", "Beauty"];
const brands = ["Nike", "Adidas", "Apple"];

export default function ProductFilters() {
  const { filters, setFilters } = useProductStore();

  return (
    <div className="p-4 border-r border-gray-200">
      <h3 className="font-semibold text-lg mb-6">Filters</h3>

      {/* CATEGORY */}
      <div className="mb-6">
        <p className="text-sm font-medium mb-3 text-gray-700">Category</p>
        <div className="space-y-2 text-sm text-gray-600">
          {categories.map((c) => (
            <label key={c} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={filters.category === c}
                onChange={() => setFilters({ category: c })}
              />
              {c}
            </label>
          ))}
        </div>
      </div>

      {/* PRICE */}
      <div className="mb-6">
        <p className="text-sm font-medium mb-3 text-gray-700">Price Range</p>
        <input type="range" className="w-full accent-black cursor-pointer" />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>$0</span>
          <span>$500</span>
        </div>
      </div>

      {/* BRAND */}
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
