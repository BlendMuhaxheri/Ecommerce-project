import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RemoveCartItemPayload, removeCartItem } from "../services/cart.api";
import { cartKeys } from "../services/cart.query";

export default function useRemoveFromCart(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn : (payload: RemoveCartItemPayload) => removeCartItem(payload),
         onSuccess: (updatedCart) => {
      queryClient.setQueryData(cartKeys.details(), updatedCart);
    }
    })

}