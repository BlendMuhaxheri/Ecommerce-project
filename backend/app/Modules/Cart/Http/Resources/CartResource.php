<?php

namespace App\Modules\Cart\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request)
    {
        return [
            'type' => 'Cart',
            'attributes' => [
                'items' => CartItemResource::collection($this->items),
                'total_items' => $this->total_items,
                'total_price' => $this->total_price,
                'currency'    => $this->currency ?? 'EUR',
            ],
        ];
    }
}
