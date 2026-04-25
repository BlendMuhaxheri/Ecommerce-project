<?php

namespace App\Modules\Product\DTO;


class ProductDTO
{
    public function __construct(
        public string $name,
        public ?string $image,
        public int $price,
        public int|string $id,
        public ?string $category,
        public ?string $stockBalance,
        public bool $active,
        public ?string $description
    ) {}
}
