import { Product } from "../types";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  console.log(product, "fromproductcard");
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
      {product.image?.trim() ? (
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-48 object-cover rounded-t-xl"
        />
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
