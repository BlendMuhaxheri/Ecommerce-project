<?php

namespace App\Models;

use App\Modules\Product\Factory\ClientFactory;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    public static function getSelfBySlug($slug)
    {
        return self::where('slug', $slug)->firstOrFail();
    }
}
