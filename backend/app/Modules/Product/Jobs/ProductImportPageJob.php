<?php

namespace App\Modules\Product\Jobs;

use App\Modules\Product\Service\ProductImportService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class ProductImportPageJob implements ShouldQueue
{
    use Queueable;

    public function __construct(
        public int $supplierId,
        public int $page
    ) {}

    public function handle(ProductImportService $service): void
    {
        $service->importProductPage($this->supplierId, $this->page);
    }
}
