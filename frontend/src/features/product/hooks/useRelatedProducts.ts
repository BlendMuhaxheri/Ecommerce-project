"use client";

import { useQuery } from "@tanstack/react-query";
import { getRelatedProducts } from "../services/product.api";

export function useRelatedProducts(id: number) {
  return useQuery({
    queryKey: ["related-products", id],
    queryFn: () => getRelatedProducts(id),
  });
}