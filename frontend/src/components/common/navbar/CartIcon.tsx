import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function CartIcon() {
  return (
    <Link href="/cart" className="relative text-gray-700 hover:text-gray-900">
      <ShoppingCart size={20} />

      <span className="absolute -top-2 -right-3 bg-black text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
        0
      </span>
    </Link>
  );
}