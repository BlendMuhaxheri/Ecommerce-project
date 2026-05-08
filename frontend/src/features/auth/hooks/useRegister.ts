import { useMutation, useQueryClient } from "@tanstack/react-query";
import {register, RegisterPayload} from "../services/auth.api"

export function useRegister(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload:RegisterPayload) => register(payload),
         onSuccess: () => {
               queryClient.invalidateQueries({ queryKey: ["me"] });
            },
    })
}