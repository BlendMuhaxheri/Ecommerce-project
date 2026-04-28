"use client";

import { useProductStore } from "../store/product.store";
import type { SortBy } from "../store/product.store";

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
];

export default function ProductSort() {
  const { filters, setFilters } = useProductStore();

  return (
    <select
      value={filters.sort ?? ""}
      onChange={(e) =>
        setFilters({
          sort: e.target.value as SortBy,
        })
      }
      className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none"
    >
      <option value="">Sort by Popularity</option>

      {sortOptions.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
