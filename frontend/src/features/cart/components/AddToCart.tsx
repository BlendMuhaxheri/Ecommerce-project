"use client";

import { useState } from "react";
import type { ApiProduct } from "@/features/product/types";
import { useAddToCart } from "../hooks/useAddToCart";

type Props = {
  product: ApiProduct;
};

export default function AddToCart({ product }: Props) {
  const [qty, setQty] = useState(1);
  const { mutate: addToCart, isPending } = useAddToCart();

  const handleAddToCart = () => {
    addToCart({
      product_id: String(product.id),
      quantity: qty,
    });
  };

  return (
    <div className="mt-8">
      {/* Quantity selector */}
      <div className="flex items-stretch">
        <button
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="h-10 w-10 border border-gray-300 bg-transparent text-black rounded-l-md cursor-pointer"
        >
          -
        </button>

        <div className="flex h-10 w-12 items-center justify-center border-y border-gray-300 bg-transparent text-black">
          {qty}
        </div>

        <button
          onClick={() => setQty((q) => q + 1)}
          className="h-10 w-10 border border-gray-300 bg-transparent text-black rounded-r-md cursor-pointer"
        >
          +
        </button>
      </div>

      {/* Add to cart button */}
      <button
        onClick={handleAddToCart}
        className="mt-5 w-full rounded-lg border border-black bg-black py-3 text-white cursor-pointer"
      >
        {isPending ? "Adding..." : "Add To Cart"}
      </button>
    </div>
  );
}
