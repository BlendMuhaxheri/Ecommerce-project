<?php

namespace App\Models;

use App\Modules\Product\Http\Filters\QueryFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    protected $fillable = [
        'name',
        'description',
        'supplier_item_id',
        'category_id',
        'item_status',
        'stock_balance',
        'price',
        'image',
        'slug'
    ];

    public function scopeFilter(Builder $builder, QueryFilter $filters)
    {
        return $filters->apply($builder);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
