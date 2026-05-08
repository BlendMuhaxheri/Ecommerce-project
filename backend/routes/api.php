<?php

use App\Modules\Auth\Http\Controllers\AuthenticateController;
use App\Modules\Auth\Http\Controllers\MeController;
use App\Modules\Auth\Http\Controllers\RegisterController;
use App\Modules\Cart\Http\Controllers\CartController;
use App\Modules\Category\Http\Controllers\CategoryController;
use App\Modules\Product\Client\BestBuy;
use App\Modules\Product\Client\FakeStore;
use App\Modules\Product\Http\Controllers\ProductController;
use App\Modules\Wishlist\Http\Controllers\WishlistController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [RegisterController::class, 'store']);
Route::post('/login', [AuthenticateController::class, 'store']);

Route::get('/me', [MeController::class])->middleware('auth:sanctum');

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{product}', [ProductController::class, 'show']);
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/cart', [CartController::class, 'index']);
Route::post('/cart/items', [CartController::class, 'store']);

Route::get('/wishlist', [WishlistController::class, 'index']);
Route::post('/wishlist/items', [WishlistController::class, 'store']);

Route::get('/test', function () {
    $client = new FakeStore();

    $prods = $client->getProducts();

    dd($prods);
});
