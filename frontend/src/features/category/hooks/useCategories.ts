import {useQuery} from "@tanstack/react-query";
import { fetchCategories } from "../services/category.api";

export function useCategories(){
    return useQuery({
        queryKey: ["categories"],
        queryFn : fetchCategories,
        staleTime: 1000 * 60 * 30,
    });
}