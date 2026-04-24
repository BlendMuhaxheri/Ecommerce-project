<?php

namespace App\Modules\Product\Console\Commands;

use App\Modules\Product\Jobs\ProductImportJob;
use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;


class ProductImportCommand extends Command
{
    protected $signature = 'product:import {supplier}';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $supplier = $this->argument('supplier');

        ProductImportJob::dispatch($supplier);
    }
}
