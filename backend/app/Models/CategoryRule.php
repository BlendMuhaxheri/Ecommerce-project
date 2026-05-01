<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CategoryRule extends Model
{
    protected $fillable = [
        'keyword',
        'priority',
        'category_id',
        'category_weight'
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
