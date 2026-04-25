<?php

namespace App\Modules\Product\Service;

use App\Models\Product;
use App\Models\Supplier;
use App\Modules\Product\Factory\ClientFactory;
use App\Modules\Product\Jobs\ProductImportPageJob;

class ProductService
{
    /**
     * Dispatch import jobs for all product pages
     */
    public function dispatchProductImport(string $supplierSlug)
    {
        $products = $this->fetchSupplierData($supplierSlug, 1);
        $totalPages = $products['totalPages'];

        collect(range(1, $totalPages))
            ->chunk(100)
            ->each(function ($chunk) use ($supplierSlug) {
                foreach ($chunk as $page) {
                    ProductImportPageJob::dispatch($supplierSlug, $page)
                        ->delay(now()->addMilliseconds($page * 50));
                }
            });
    }

    /**
     * Import products for a single page
     */
    public function importProductPage(string $supplierSlug, int $page)
    {
        $response = $this->fetchSupplierData($supplierSlug, $page);

        foreach ($response['products'] as $item) {
            Product::updateOrCreate(
                ['supplier_item_id' => $item->id],
                [
                    'name'          => $item->name,
                    'description'   => $item->description,
                    'category'      => $item->category,
                    'item_status'   => $item->active,
                    'stock_balance' => $item->stockBalance === 'Available' ? 1 : 0,
                    'price'         => $item->price,
                    'image'         => $item->image
                ],
            );
        }
    }

    private function fetchSupplierData(string $supplierSlug, int $page = 1)
    {
        $supplier = Supplier::getSelfBySlug($supplierSlug);
        $client = (new ClientFactory())->make($supplier);

        return $client->getProducts($page);
    }
}
