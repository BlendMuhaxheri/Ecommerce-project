<?php

namespace App\Modules\Product\Service;

use App\Models\Product;
use App\Models\SupplierProduct;
use App\Modules\Category\Service\CategoryMatcherService;
use App\Modules\Product\DTO\ProductDTO;
use Illuminate\Support\Facades\Log;

class ProductSyncService
{
    public function __construct(
        private CategoryMatcherService $matcher
    ) {}

    public function syncSupplierProduct(int $supplierProductId): ProductDTO
    {
        $supplierProduct = SupplierProduct::find($supplierProductId);

        $product = Product::updateOrCreate(
            [
                'supplier_item_id' => $supplierProduct->supplier_item_id,
            ],
            [
                'name'          => $supplierProduct->name,
                'description'   => $supplierProduct->description,
                'price'         => $supplierProduct->price,
                'image'         => $supplierProduct->image,
                'active'        => $supplierProduct->active,
                'stock_balance' => 100,
                'category_id' => optional(
                    $this->matcher->match($supplierProduct->category)
                )?->id,

            ]
        );

        return new ProductDTO(
            id: $product->id,
            name: $product->name,
            image: $product->image,
            price: (int) $product->price,
            category: $product->category_id,
            stockBalance: $product->stock_balance,
            active: (bool) $product->active,
            description: $product->description,
        );
    }
}
