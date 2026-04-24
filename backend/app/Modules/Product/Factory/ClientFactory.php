<?php

namespace App\Modules\Product\Factory;

use App\Models\Supplier;
use App\Modules\Product\Client\Client;
use App\Modules\Product\Exception\ClientException;
use Illuminate\Support\Str;

class ClientFactory
{
    public function make(Supplier $supplier)
    {
        $class  = "App\\Modules\\Product\\Client\\" . Str::studly($supplier->name);

        if (!class_exists($class)) {
            throw new ClientException('Client not found for ' . $supplier->name);
        }

        return new $class;
    }
}
