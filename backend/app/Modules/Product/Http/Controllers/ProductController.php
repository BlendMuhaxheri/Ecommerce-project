<?php

namespace App\Modules\Product\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Modules\Product\Http\Filters\ProductQueryFilter;
use App\Modules\Product\Http\Resources\ProductResource;

class ProductController extends Controller
{
    public function index(ProductQueryFilter $filters)
    {
        $products = Product::query()
            ->filter($filters)
            ->paginate(20);

        return ProductResource::collection($products);
    }
}
