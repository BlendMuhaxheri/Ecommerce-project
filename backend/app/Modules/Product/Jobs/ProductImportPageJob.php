<?php

namespace App\Modules\Product\Jobs;

use App\Modules\Product\Service\ProductService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class ProductImportPageJob implements ShouldQueue
{
    use Queueable;

    protected string $supplierSlug;
    protected int $page;
    /**
     * Create a new job instance.
     */
    public function __construct(string $supplierSlug, int $page)
    {
        $this->supplierSlug = $supplierSlug;
        $this->page         = $page;
    }

    /**
     * Execute the job.
     */
    public function handle(ProductService $service): void
    {
        $service->importPage($this->supplierSlug, $this->page);
    }
}
