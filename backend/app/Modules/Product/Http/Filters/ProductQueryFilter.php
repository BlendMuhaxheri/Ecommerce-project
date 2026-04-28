<?php

namespace App\Modules\Product\Http\Filters;

class ProductQueryFilter extends QueryFilter
{
    protected function filters(): array
    {
        return [
            'search',
            'category',
            'sort'
        ];
    }

    public function filterSearch(string $value)
    {
        $this->builder->where('name', 'like', "%{$value}%");
    }

    public function filterCategory(string $slug)
    {
        $this->builder->whereHas('category', function ($query) use ($slug) {
            $query->where('slug', $slug);
        });
    }

    public function filterSort(string $value)
    {
        match ($value) {
            'price_asc'  => $this->builder->orderBy('price', 'asc'),
            'price_desc' => $this->builder->orderBy('price', 'desc'),
            'newest'     => $this->builder->orderBy('created_at', 'desc'),
            default      => null,
        };
    }
}
