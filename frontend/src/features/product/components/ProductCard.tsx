import { Product } from "../types";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>

      <p className="text-sm text-gray-500 mt-1">${product.price}</p>
    </div>
  );
}
