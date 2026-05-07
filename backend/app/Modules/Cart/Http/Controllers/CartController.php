<?php

namespace App\Modules\Cart\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use App\Modules\Cart\Http\Resources\CartResource;
use App\Modules\Cart\Service\CartService;
use Illuminate\Http\Request;

class CartController
{
    public function __construct(private CartService $cartService) {}

    public function index(CartService $cartService)
    {
        $cart = $cartService->getCart();

        return new CartResource((object) $cart);
    }

    public function store(Request $request)
    {
        $product = Product::findOrFail($request->product_id);

        $cart = $this->cartService->addItem([
            'id' => $product->id,
            'name' => $product->name,
            'price' => $product->price,
            'image' => $product->image,
        ], $request->quantity ?? 1);

        return new CartResource((object) $cart);
    }
}
