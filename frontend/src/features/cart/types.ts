export type CartItem = {
    id:string;
    product_id:string;
    name:string;
    slug?:string;
    image?:string;
    price:number;
    quantity:number;
}

export type Cart = {
    items : CartItem[];
    total_items:number;
    total_price:number;
    currency?:string;
}