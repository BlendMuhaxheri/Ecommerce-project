<?php

namespace App\Modules\Product\Jobs;

use App\Modules\Product\Service\ProductService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class ProductImportJob implements ShouldQueue
{
    use Queueable;

    protected string $supplierSlug;

    /**
     * Create a new job instance.
     */
    public function __construct(string $supplierSlug)
    {
        $this->supplierSlug = $supplierSlug;
    }

    /**
     * Execute the job.
     */
    public function handle(ProductService $service): void
    {
        $service->dispatchProductImport($this->supplierSlug);
    }
}
