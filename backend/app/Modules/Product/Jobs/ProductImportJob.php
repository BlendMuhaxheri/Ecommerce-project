<?php

namespace App\Modules\Product\Jobs;

use App\Models\Supplier;
use App\Modules\Product\Service\ProductImportService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class ProductImportJob implements ShouldQueue
{
    use Queueable;

    public function __construct(
        protected string $supplierSlug
    ) {}

    public function handle(ProductImportService $service): void
    {
        $supplier = Supplier::getSelfBySlug($this->supplierSlug);

        $service->dispatchProductImport($supplier);
    }
}
