"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import type { SortBy } from "../types";

type Filters = {
  category?: string;
  sort?: SortBy;
  search?: string;
  priceMin?: number;
  priceMax?: number;
  page: number;
};

export function useProductFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const rawSort = searchParams.get("sort");

  const sort: SortBy | undefined =
    rawSort === "price_asc" ||
    rawSort === "price_desc" ||
    rawSort === "newest"
      ? rawSort
      : undefined;

  const filters: Filters = {
    category: searchParams.get("category") ?? undefined,
    sort,
    search: searchParams.get("search") ?? undefined,

    priceMin: searchParams.get("priceMin")
      ? Number(searchParams.get("priceMin"))
      : 0,

    priceMax: searchParams.get("priceMax")
      ? Number(searchParams.get("priceMax"))
      : 2500,

    page: searchParams.get("page")
      ? Number(searchParams.get("page"))
      : 1,
  };

  const setFilters = (newFilters: Partial<Filters>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(newFilters).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "") {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }
    });

    // reset page on filter change (except when page itself changes)
    if (!("page" in newFilters)) {
      params.set("page", "1");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return { filters, setFilters };
}