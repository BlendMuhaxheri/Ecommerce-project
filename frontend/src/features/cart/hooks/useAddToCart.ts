import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddToCartPayload, addToCart } from "../services/cart.api";
import { cartKeys } from "../services/cart.query";


export function useAddToCart() {
    const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: AddToCartPayload) => addToCart(payload),
    onSuccess: (data) => {
      queryClient.setQueryData(cartKeys.details(), data);
    },
  });
    
}