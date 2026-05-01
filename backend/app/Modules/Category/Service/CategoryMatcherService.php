<?php

namespace App\Modules\Category\Service;

use App\Models\Category;
use App\Models\CategoryRule;
use App\Modules\Category\DTO\CategoryDTO;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class CategoryMatcherService
{
    public function match(string $title): ?CategoryDTO
    {
        $text = $this->normalize($title);

        $rules = Cache::remember(
            'category_rules',
            3600,
            fn() =>
            CategoryRule::with('category')->get()->toArray()
        );

        $scores = [];
        $categories = [];

        foreach ($rules as $rule) {
            if ($this->matches($text, $rule['keyword'])) {
                $categoryId = $rule['category_id'];
                $scores[$categoryId] = ($scores[$categoryId] ?? 0) + $rule['category_weight'];
                $categories[$categoryId] = $rule['category'];
            }
        }

        if (empty($scores)) {
            return null;
        }

        $bestCategoryId = $this->resolveBestCategory($scores);
        $score = $scores[$bestCategoryId];

        $category = $categories[$bestCategoryId] ?? null;

        if (!$category) {
            return null;
        }

        return new CategoryDTO(
            id: $category['id'],
            name: $category['name'],
            slug: $category['slug'] ?? null,
            categoryWeight: $score
        );
    }

    private function resolveBestCategory(array $scores): int
    {
        arsort($scores);

        return array_key_first($scores);
    }


    private function matches(string $text, string $keyword): bool
    {
        return str_contains($text, $this->normalize($keyword));
    }

    private function normalize(string $text): string
    {
        return strtolower(trim($text));
    }
}
