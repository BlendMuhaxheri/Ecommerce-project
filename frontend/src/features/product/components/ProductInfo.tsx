"use client";

import AddToCart from "./AddToCart";
import type { ApiProduct } from "../types";

type Props = {
  product: ApiProduct;
};

export default function ProductInfo({ product }: Props) {
  return (
    <div>
      <h1 className="text-3xl font-semibold">{product.attributes.name}</h1>

      <div className="mt-3 flex gap-2 text-sm text-gray-500">
        ★★★★★ (85 reviews)
      </div>

      <div className="mt-5 flex items-center gap-4">
        <span className="text-3xl font-bold">${product.attributes.price}</span>

        {/* {product.old_price && (
          <span className="line-through text-gray-400">
            ${product.old_price}
          </span>
        )} */}
      </div>

      <p className="mt-5 text-gray-600">{product.attributes.description}</p>

      <AddToCart product={product} />
    </div>
  );
}
