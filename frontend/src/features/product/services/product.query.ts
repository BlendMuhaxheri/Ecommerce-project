import type { SortBy } from "../types";

export type ProductQueryParams = {
    search?:string;
    sort?:SortBy;
    category?:string|null;
    priceMin?:number|null;
    priceMax?:number|null;
    page?:number;
}

export function buildProductQuery(params: ProductQueryParams):string {
    const query = new URLSearchParams();

    if(params.search){
        query.append("search", params.search);
    }

    if(params.sort){
        query.append("sort", params.sort);
    }

    if(params.category){
        query.append("category", params.category);
    }

    if (params.priceMin !== null && params.priceMin !== undefined) {
        query.append("priceMin", String(params.priceMin));
    }

    if (params.priceMax !== null && params.priceMax !== undefined) {
        query.append("priceMax", String(params.priceMax));
    }

    if(params.page){
        query.append("page", String(params.page));
    }

    return query.toString();
}