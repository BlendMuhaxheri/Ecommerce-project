<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('supplier_products', function (Blueprint $table) {
            $table->text('description')->nullable()->change();
            $table->string('category')->nullable()->change();
            $table->decimal('price', 10, 2)->change();
            $table->decimal('stock_balance', 10, 2)->nullable()->change();
            $table->boolean('active')->default(true)->after('image');
        });
    }

    public function down(): void
    {
        Schema::table('supplier_products', function (Blueprint $table) {
            $table->dropColumn('active');
            $table->text('description')->nullable(false)->change();
            $table->string('category')->nullable(false)->change();
            $table->decimal('price')->change();
            $table->decimal('stock_balance')->nullable(false)->change();
        });
    }
};
