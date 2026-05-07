import { useCart } from "./useCart";

export function useCartTotal(){
    const {data:cart} = useCart();

    return {
    totalItems: cart?.total_items ?? 0,
    totalPrice: cart?.total_price ?? 0,
  };
}