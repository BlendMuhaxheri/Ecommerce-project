<?php

use App\Models\Supplier;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('supplier_products', function (Blueprint $table) {
            $table->dropColumn('supplier_id');
        });
        Schema::table('supplier_products', function (Blueprint $table) {

            $table->foreignIdFor(Supplier::class)
                ->after('id')
                ->constrained()
                ->cascadeOnDelete();

            $table->index(['supplier_id', 'supplier_item_id'], 'sp_supplier_index');
        });
    }

    public function down(): void
    {
        Schema::table('supplier_products', function (Blueprint $table) {
            $table->dropIndex('sp_supplier_index');
            $table->dropForeign(['supplier_id']);
            $table->dropColumn('supplier_id');
            $table->string('supplier_id')->after('id');
        });
    }
};
