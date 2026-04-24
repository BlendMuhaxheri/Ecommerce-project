import { User, Heart, ShoppingCart } from "lucide-react";

export default function NavIcons() {
  return (
    <div className="flex items-center gap-4 text-gray-700">
      <User className="w-5 h-5 cursor-pointer" />
      <Heart className="w-5 h-5 cursor-pointer" />
      
      <div className="relative cursor-pointer">
        <ShoppingCart className="w-5 h-5" />
        <span className="absolute -top-2 -right-2 text-xs bg-black text-white rounded-full w-4 h-4 flex items-center justify-center">
          2
        </span>
      </div>
    </div>
  );
}