import { useMutation, useQueryClient } from "@tanstack/react-query";
import {login, LoginPayload} from "../services/auth.api"

export function useLogin(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload:LoginPayload) => login(payload),
         onSuccess: () => {
               queryClient.invalidateQueries({ queryKey: ["me"] });
            },
    })
}