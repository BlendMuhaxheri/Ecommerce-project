<?php

namespace App\Modules\Cart\Service;

class CartService
{
    public function getCart(): array
    {
        return session()->get('cart', [
            'items' => [],
            'total_items' => 0,
            'total_price' => 0
        ]);
    }

    public function addItem(array $product, int $quantity = 1): array
    {
        $cart = $this->getCart();

        $items = $cart['items'];
        $foundIndex = null;

        foreach ($items as $index => $item) {
            if ($item['product_id'] === (string) $product['id']) {
                $foundIndex = $index;
                break;
            }
        }

        if ($foundIndex !== null) {
            $items[$foundIndex]['quantity'] += $quantity;
        } else {
            $items[] = [
                'id' => (string) count($items) + 1,
                'product_id' => (string) $product['id'],
                'name' => $product['name'],
                'slug' => $product['slug'] ?? null,
                'price' => (float) $product['price'],
                'image' => $product['image'] ?? null,
                'quantity' => $quantity,
            ];
        }

        return $this->persistCart($items);
    }
    private function persistCart(array $items): array
    {
        $totalItems = 0;
        $totalPrice = 0;

        foreach ($items as $item) {
            $totalItems += $item['quantity'];
            $totalPrice += $item['price'] * $item['quantity'];
        }

        $cart = [
            'items' => $items,
            'total_items' => $totalItems,
            'total_price' => $totalPrice,
        ];

        session()->put('cart', $cart);

        return $cart;
    }
}
