"use client";

import {useQuery} from "@tanstack/react-query";
import { getMe } from "../services/auth.api";

export function useAuth()
{
    return useQuery({
        queryKey:["me"],
        queryFn:getMe,
        retry:false
    })
}