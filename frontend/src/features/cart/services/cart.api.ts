import { apiClient } from "@/lib/apiClient";
import { Cart } from "../types";

export type AddToCartPayload = {
    product_id : string;
    quantity: number;
}

export type UpdateCartItemPayload = {
  item_id: string;
  quantity: number;
};

export type RemoveCartItemPayload = {
  item_id: string;
};

export async function getCart(): Promise<Cart>{
    return apiClient<Cart>("/cart");
}

export async function addToCart(payload:AddToCartPayload):Promise<Cart>{
    return apiClient<Cart>("/cart/items", {
        method:"POST",
        body:JSON.stringify(payload),
    });
}

export async function updateCartItem(
  payload: UpdateCartItemPayload
): Promise<Cart> {
  return apiClient<Cart>(`/cart/items/${payload.item_id}`, {
    method: "PATCH",
    body: JSON.stringify({
      quantity: payload.quantity,
    }),
  });
}

export async function removeCartItem(
  payload: RemoveCartItemPayload
): Promise<Cart> {
  return apiClient<Cart>(`/cart/items/${payload.item_id}`, {
    method: "DELETE",
  });
}