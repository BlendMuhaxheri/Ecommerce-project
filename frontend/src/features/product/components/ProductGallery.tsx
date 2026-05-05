"use client";

import { useState } from "react";
import type { ApiProduct } from "../types";

type Props = {
  product: ApiProduct;
};

export default function ProductGallery({ product }: Props) {
  const image = product.attributes.image;
  const [active, setActive] = useState(image);

  return (
    <div className="flex gap-6">
      {/* Thumbnail */}
      <div className="space-y-3">
        <button
          onClick={() => setActive(image)}
          className="w-24 h-24 border rounded-xl bg-white p-2 shadow-sm"
        >
          <img
            src={image}
            alt={product.attributes.name}
            className="w-full h-full object-contain"
          />
        </button>
      </div>

      {/* Main Large Image */}
      <div className="flex-1 bg-[#f7f7f7] rounded-2xl p-8 min-h-[520px] flex items-center justify-center">
        <img
          src={active}
          alt={product.attributes.name}
          className="max-h-[460px] w-full object-contain"
        />
      </div>
    </div>
  );
}
