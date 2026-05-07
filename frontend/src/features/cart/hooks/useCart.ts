import { useQuery } from "@tanstack/react-query";
import { getCart } from "../services/cart.api";
import { cartKeys } from "../services/cart.query";


export function useCart() {
  return useQuery({
    queryKey: cartKeys.details(),
    queryFn: getCart,
    staleTime: 1000 * 30
  });
}