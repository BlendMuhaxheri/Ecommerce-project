"use client";

import { User, Heart, ShoppingCart } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useAuthModal } from "@/features/auth/store/useAuthModal.store";

export default function NavIcons() {
  const { data: user, isLoading } = useAuth();
  const openAuth = useAuthModal((s) => s.open);

  function handleWishlistClick() {
    if (!user) {
      openAuth("login");
      return;
    }

    // TODO: later -> open wishlist page or modal
    console.log("open wishlist");
  }

  function handleUserClick() {
    console.log("clicked");
    if (!user) {
      openAuth("login");
      return;
    }

    // TODO: later -> open dropdown menu
    console.log("open user menu");
  }

  if (isLoading) {
    return (
      <div className="flex items-center gap-5 text-gray-700">
        <User className="w-5 h-5 opacity-40" />
        <Heart className="w-5 h-5 opacity-40" />
        <ShoppingCart className="w-5 h-5 opacity-40" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-5 text-gray-700">
      {/* USER */}
      <User className="w-5 h-5 cursor-pointer" onClick={handleUserClick} />

      {/* WISHLIST */}
      <Heart className="w-5 h-5 cursor-pointer" onClick={handleWishlistClick} />

      {/* CART */}
      <div className="relative cursor-pointer">
        <ShoppingCart className="w-5 h-5" />
        <span className="absolute -top-2 -right-2 text-xs bg-black text-white rounded-full w-4 h-4 flex items-center justify-center">
          2
        </span>
      </div>
    </div>
  );
}
