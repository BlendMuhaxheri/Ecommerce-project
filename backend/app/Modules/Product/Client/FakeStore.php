<?php

namespace App\Modules\Product\Client;

use App\Modules\Product\DTO\SupplierProductDTO;
use Illuminate\Support\Facades\Http;
use Override;

class FakeStore implements Client
{
    protected string $uri;

    public function __construct()
    {
        $this->uri = config('services.clients.fake_store.base_uri');
    }

    public function getProducts(): array
    {
        $results = Http::get($this->uri)->json();

        return [
            'products' => array_map(function ($item) {
                return new SupplierProductDTO(
                    externalId: $item['id'],
                    name: $item['title'],
                    description: $item['description'],
                    category: $item['category'],
                    active: $item['active'] ?? 1,
                    stockBalance: $item['stock'] ?? 0,
                    price: $item['price'],
                    image: $item['image'],
                );
            }, $results),
        ];
    }
}
