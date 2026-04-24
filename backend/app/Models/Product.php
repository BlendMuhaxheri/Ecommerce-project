<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'description',
        'supplier_item_id',
        'category',
        'item_status',
        'stock_balance',
        'price',
    ];
}
