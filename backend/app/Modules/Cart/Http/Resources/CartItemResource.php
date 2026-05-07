<?php

namespace App\Modules\Cart\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CartItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request)
    {
        return [
            'id' => $this['id'],
            'product_id' => $this['product_id'],
            'name' => $this['name'],
            'slug'  => $this['slug'],
            'image' => $this['image'],
            'price'    => (float) $this['price'],
            'quantity' => $this['quantity'],
            'subtotal' => $this['price'] * $this['quantity'],
        ];
    }
}
