<?php

namespace App\Models;

use App\Modules\Product\Http\Filters\QueryFilter;
use Illuminate\Database\Eloquent\Builder;
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
        'image'
    ];

    public function scopeFilter(Builder $builder, QueryFilter $filters)
    {
        return $filters->apply($builder);
    }
}
