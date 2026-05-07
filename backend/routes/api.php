<?php

use App\Modules\Cart\Http\Controllers\CartController;
use App\Modules\Category\Http\Controllers\CategoryController;
use App\Modules\Product\Client\BestBuy;
use App\Modules\Product\Client\FakeStore;
use App\Modules\Product\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{product}', [ProductController::class, 'show']);
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/cart', [CartController::class, 'index']);
Route::post('/cart/items', [CartController::class, 'store']);

Route::get('/test', function () {
    $client = new FakeStore();

    $prods = $client->getProducts();

    dd($prods);
});
