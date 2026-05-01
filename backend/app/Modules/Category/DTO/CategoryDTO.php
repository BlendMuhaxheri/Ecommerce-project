<?php

namespace App\Modules\Category\DTO;

class CategoryDTO
{
    public function __construct(
        public int $id,
        public string $name,
        public ?string $slug,
        public int $categoryWeight,
    ) {}
}
