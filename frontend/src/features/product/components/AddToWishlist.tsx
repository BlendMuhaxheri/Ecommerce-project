"use client";

import { Heart } from "lucide-react";
import type { ApiProduct } from "../types";

type Props = {
  product: ApiProduct;
};

export default function AddToWishlist({ product }: Props) {
  return (
    <div className="mt-8">
      <button
        type="button"
        className="flex w-full items-center 
          justify-center 
          gap-2 rounded-lg 
          border border-black 
          bg-transparent py-3 
          text-black transition 
          cursor-pointer"
      >
        <Heart className="h-5 w-5" />
        Add to Wishlist
      </button>
    </div>
  );
}
