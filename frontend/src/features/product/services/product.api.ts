import { apiClient } from "@/lib/apiClient";
import { buildProductQuery, ProductQueryParams } from "./product.query";
import { Product, ApiProduct } from "../types";

export type ProductMeta = {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
};

type ProductResponse = {
  data: ApiProduct[];
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
      slug: item.attributes.slug,
      image: item.attributes.image,
      price: Number(item.attributes.price),
    })),
    meta: response.meta,
  };
}

export async function getProduct(id: number): Promise<{ data: ApiProduct }> {
  return apiClient<{ data: ApiProduct }>(`/products/${id}`);
}

export async function getRelatedProducts(id: number) {
  return apiClient(`/products/${id}/related`);
}