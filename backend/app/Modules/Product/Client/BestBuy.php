<?php

namespace App\Modules\Product\Client;

use App\Modules\Product\DTO\ProductDTO;
use Illuminate\Support\Facades\Http;

class BestBuy implements Client
{
    protected $uri;
    protected $apiKey;

    public function __construct()
    {
        $this->uri    = config('services.clients.best_buy.base_uri');
        $this->apiKey = config('services.clients.best_buy.api_key');
    }

    public function getProducts(int $page = 1): array
    {
        $results = Http::get($this->endpoint($page));

        return [
            'products' => array_map(function ($item) {
                return new ProductDTO(
                    id: $item['sku'],
                    name: $item['name'],
                    description: $item['longDescription'],
                    category: $item['class'],
                    active: $item['active'],
                    stockBalance: $item['orderable'],
                    price: $item['regularPrice'],
                    image: $item['images'][0]['href'] ?? null,
                );
            }, $results['products']),

            'total'       => $results['total'],
            'totalPages'  => $results['totalPages'],
            'currentPage' => $results['currentPage'],
        ];
    }

    public function endpoint(int $page): string
    {
        return $this->uri . $this->apiKey . "&page=" . $page;
    }
}
