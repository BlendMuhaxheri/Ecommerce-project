<?php

use App\Modules\Product\Client\BestBuy;
use App\Modules\Products\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('/products', [ProductController::class, 'index']);

Route::get('/test', function () {
    $client = new BestBuy();
    $prods = $client->getProducts();
    dd($prods);
});
