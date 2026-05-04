import { fetchProducts } from "../services/product.api";
import { ProductQueryParams } from "../services/product.query";

export async function getProductsSSR(params: ProductQueryParams) {
  return fetchProducts(params);
}