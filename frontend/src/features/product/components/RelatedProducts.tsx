"use client";

import Link from "next/link";
import { useRelatedProducts } from "../hooks/useRelatedProducts";

export default function RelatedProducts({ productId }: { productId: number }) {
  const { data, isLoading } = useRelatedProducts(productId);

  const products = data?.data ?? [];

  return (
    <div className="mt-14">
      <h2 className="text-xl font-semibold mb-6">Related Products</h2>

      {isLoading && <div className="text-sm text-gray-500">Loading...</div>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p: any) => (
          <Link
            key={p.id}
            href={`/products/${p.slug}-${p.id}`}
            className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="bg-[#f7f7f7] rounded-lg p-4">
              <img src={p.image} className="w-full h-32 object-contain" />
            </div>

            <div className="mt-3">
              <p className="text-sm font-medium">{p.name}</p>
              <p className="text-sm text-gray-500">${p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
