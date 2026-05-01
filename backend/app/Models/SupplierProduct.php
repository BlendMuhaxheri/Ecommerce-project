<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SupplierProduct extends Model
{
    protected $fillable = [
        'supplier_item_id',
        'name',
        'description',
        'category',
        'price',
        'stock_balance',
        'image',
        'item_status',
        'supplier_id'
    ];
}
