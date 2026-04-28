import { apiClient } from "@/lib/apiClient";
import { buildProductQuery, ProductQueryParams } from "./product.query";
import { Product } from "../types";

type RawProduct = {
  type: string;
  id: number;
  attributes: {
    name: string;
    image: string;
    price: string;
  };
};

export type ProductMeta = {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
};

type ProductResponse = {
  data: RawProduct[];
  meta: ProductMeta;
};

export async function fetchProducts(
  params: ProductQueryParams
): Promise<{
  data: Product[];
  meta: ProductMeta;
}> {
  const query = buildProductQuery(params);

  const response = await apiClient<ProductResponse>(
    `/products?${query}`
  );

  return {
    data: response.data.map((item) => ({
      id: String(item.id),
      name: item.attributes.name,
      image: item.attributes.image,
      price: Number(item.attributes.price),
    })),
    meta: response.meta,
  };
}