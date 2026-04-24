<?php

namespace App\Modules\Product\Client;

use App\Modules\Product\DTO\ProductDTO;
use Illuminate\Support\Facades\Http;

interface Client
{
    /**
     * @return ProductDTO[]
     */
    public function getProducts(): array;
}
