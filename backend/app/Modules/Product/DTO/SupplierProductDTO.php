<?php

namespace App\Modules\Product\DTO;

class SupplierProductDTO
{
    public function __construct(
        public string $externalId,
        public string $name,
        public ?string $description,
        public ?string $category,
        public float $price,
        public ?float $stockBalance,
        public ?string $image,
        public bool $active
    ) {}
}
