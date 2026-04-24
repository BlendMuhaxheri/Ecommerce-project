<?php

namespace App\Modules\Product\DTO;


class ProductDTO
{
    public function __construct(
        public string $name,
        public ?string $image,
        public int    $regularPrice,
        public int|string $sku,
        public ?string $class,
        public ?string $orderable,
        public bool $active,
        public ?string $longDescription
    ) {}
}
