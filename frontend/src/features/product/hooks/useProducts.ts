import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchProducts } from "../services/product.api";
import { ProductQueryParams } from "../services/product.query";

export function useProducts(params: ProductQueryParams) {
  return useQuery({
    queryKey: [
      "products",
      params.category,
      params.sort,
      params.search,
      params.priceMin,
      params.priceMax,
      params.page,
    ],
    queryFn: () => fetchProducts(params),
  });
}