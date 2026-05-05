export type Product = {
  id    : string;
  name  : string;
  slug : string;
  price : number;
  image : string;
};

export type ApiProduct = {
  type: string;
  id: number;
  attributes: {
    name: string;
    image: string;
    price: string;
    active: boolean | null;
    description: string;
    slug: string;
  };
};

export type SortBy = "price_asc" | "price_desc" | "newest";