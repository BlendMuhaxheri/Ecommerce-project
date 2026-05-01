<?php

namespace App\Modules\Product\Service;

use App\Models\Supplier;
use App\Models\SupplierProduct;
use App\Modules\Product\Factory\ClientFactory;
use App\Modules\Product\Jobs\ProductImportPageJob;
use App\Modules\Product\Jobs\SyncSupplierProductToCatalogJob;
use Illuminate\Support\Facades\Log;

class ProductImportService
{
    public function dispatchProductImport(Supplier $supplier): void
    {
        $maxProducts = 200;
        $perPage = 10;

        $totalPages = min(
            (int) ceil($maxProducts / $perPage),
            20
        );

        foreach (range(1, $totalPages) as $page) {
            ProductImportPageJob::dispatch($supplier->id, $page);
        }
    }

    public function importProductPage(int $supplierId, int $page): void
    {
        $supplier = Supplier::findOrFail($supplierId);

        $response = $this->fetchSupplierData($supplier, $page);

        foreach ($response['products'] as $item) {

            $supplierProduct = SupplierProduct::updateOrCreate(
                [
                    'supplier_id' => $supplier->id,
                    'supplier_item_id' => $item->externalId,
                ],
                [
                    'name'          => $item->name,
                    'description'   => $item->description,
                    'category'      => $item->category,
                    'active'        => $item->active,
                    'stock_balance' => $item->stockBalance,
                    'price'         => $item->price,
                    'image'         => $item->image,
                ]
            );

            SyncSupplierProductToCatalogJob::dispatch($supplierProduct->id)
                ->onQueue('default');
        }
    }

    private function fetchSupplierData(Supplier $supplier, int $page)
    {
        $client = (new ClientFactory())->make($supplier);
        return $client->getProducts($page);
    }
}
