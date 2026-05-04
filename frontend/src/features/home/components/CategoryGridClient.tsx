"use client";

import Hr from "@/components/ui/Hr";
import { useCategories } from "@/features/category/hooks/useCategories";

export default function CategoryGridClient() {
  const { data: categories = [], isLoading } = useCategories();

  return (
    <>
      <Hr />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="relative rounded-lg overflow-hidden cursor-pointer group"
              >
                <img
                  src={cat.image ?? "/placeholder.jpg"}
                  className="w-full h-40 object-cover group-hover:scale-105 transition"
                />

                <div className="absolute inset-0 bg-black/30 flex items-end p-3">
                  <p className="text-white font-medium">{cat.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
