import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateCartItemPayload, updateCartItem } from "../services/cart.api";
import { cartKeys } from "../services/cart.query";

export function useUpdateCartItem(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn : (payload : UpdateCartItemPayload) => updateCartItem(payload),
        onSuccess : (updatedCart) => {
            queryClient.setQueryData(cartKeys.details(), updatedCart)
        }
    })
}