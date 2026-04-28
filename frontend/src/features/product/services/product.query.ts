import {SortBy} from "../store/product.store";

export type ProductQueryParams = {
    search?:string;
    sort?:SortBy;
    category?:string|null;
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

    if(params.page){
        query.append("page", String(params.page));
    }

    return query.toString();
}