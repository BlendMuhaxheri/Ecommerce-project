import { apiClient } from "@/lib/apiClient";
import { Category } from "../types";

type RawCategory = {
    type:string;
    id:number;
    attributes : {
        name:string;
        slug:string;
        categoryWeight:number;
    };
};

type CategoryResponse = {
    data: RawCategory[];
};

export async function fetchCategories(): Promise<Category[]> {
    const response = await apiClient<CategoryResponse>("/categories");

  return response.data.map((item) => ({
    id: String(item.id),
    name: item.attributes.name,
    slug: item.attributes.slug,
    categoryWeight: item.attributes.categoryWeight,
  }));
}