"use client";

import { useState } from "react";
import type { ApiProduct } from "../types";

type Props = {
  product: ApiProduct;
};

export default function AddToCart({ product }: Props) {
  const [qty, setQty] = useState(1);

  return (
    <div className="mt-8">
      <div className="flex items-center gap-4">
        <button onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
        <span>{qty}</span>
        <button onClick={() => setQty((q) => q + 1)}>+</button>
      </div>

      <button className="w-full mt-5 bg-black text-white py-3 rounded-lg">
        Add To Cart
      </button>
    </div>
  );
}
