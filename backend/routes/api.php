<?php

use App\Modules\Category\Http\Controllers\CategoryController;
use App\Modules\Product\Client\BestBuy;
use App\Modules\Product\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('/products', [ProductController::class, 'index']);
Route::get('/categories', [CategoryController::class, 'index']);

Route::get('/test', function () {
    $client = new BestBuy();

    $page = request()->get('page', 1);

    $prods = $client->getProducts($page);

    dd($prods);
});
