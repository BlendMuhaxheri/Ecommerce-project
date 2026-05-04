export type Product = {
  id    : string;
  name  : string;
  price : number;
  image : string;
};

export type SortBy = "price_asc" | "price_desc" | "newest";