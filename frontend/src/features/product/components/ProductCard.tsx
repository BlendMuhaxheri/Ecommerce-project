import { Product } from "../types";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
      {product.image?.trim() ? (
        <div className="relative w-full aspect-square bg-gray-100 rounded-t-xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-2"
          />
        </div>
      ) : (
        <div className="w-full h-48 bg-gray-100 rounded-t-xl flex items-center justify-center text-sm text-gray-500">
          No image found
        </div>
      )}
      <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>

      <p className="text-sm text-gray-500 mt-1">${product.price}</p>
    </div>
  );
}
