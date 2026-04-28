import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type SortBy = "price_asc" | "price_desc" | "newest" | null;

type Filters = {
  search: string;
  category: string | null;
  sort: SortBy;
};

type ProductState = {
  filters: Filters;
  page: number;

  setFilters: (filters: Partial<Filters>) => void;
  setPage: (value: number) => void;
  resetFilters: () => void;
};

export const useProductStore = create<ProductState>()(
  devtools(
    (set) => ({
      filters: {
        search: "",
        sort: null,
        category: null,
      },

      page: 1,

      setFilters: (newFilters) =>
        set(
          (state) => ({
            filters: {
              ...state.filters,
              ...newFilters,
            },
            page: 1,
          }),
          false,
          "product/setFilters"
        ),

      setPage: (page) => set({ page }, false, "product/setPage"),

      resetFilters: () =>
        set(
          {
            filters: {
              search: "",
              sort: null,
              category: null,
            },
            page: 1,
          },
          false,
          "product/resetFilters"
        ),
    }),
    {
      name: "product-store",
    }
  )
);