<?php

namespace App\Modules\Product\Jobs;

use App\Modules\Product\Service\ProductSyncService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Log;

class SyncSupplierProductToCatalogJob implements ShouldQueue
{
    use Queueable;

    public function __construct(
        public int $supplierProductId
    ) {}

    public function handle(ProductSyncService $service): void
    {
        $service->syncSupplierProduct($this->supplierProductId);
    }
}
