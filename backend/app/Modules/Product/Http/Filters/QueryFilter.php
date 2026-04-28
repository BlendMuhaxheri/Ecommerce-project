<?php

namespace App\Modules\Product\Http\Filters;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

abstract class QueryFilter
{
    protected Builder $builder;
    protected Request $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function apply(Builder $builder)
    {
        $this->builder = $builder;
        $filters = $this->request->only($this->filters());

        foreach ($filters as $key => $value) {
            $method = 'filter' . ucfirst($key);

            if (method_exists($this, $method)) {
                $this->$method($value);
            }
        }

        return $this->builder;
    }

    protected function filters(): array
    {
        return [];
    }
}
