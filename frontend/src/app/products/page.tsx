import ProductList from "@/features/product/components/ProductList";
import ProductFilters from "@/features/product/components/ProductFilters";
import ProductSort from "@/features/product/components/ProductSort";

export default function ProductsPage() {
  return (
    <div className="w-full px-6 xl:px-10 2xl:px-16 py-10">
      <div className="flex gap-10 items-start">
        {/* LEFT SIDEBAR */}
        <div className="w-64 xl:w-72 hidden lg:block shrink-0">
          <ProductFilters />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1">
          {/* HEADER (MOVE HERE) */}
          <div className="mb-6 flex items-start justify-between">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">All Products</h1>
              <p className="text-sm text-gray-400">
                Showing 1–12 of 120 products
              </p>
            </div>

            <ProductSort />
          </div>

          {/* GRID */}
          <ProductList />
        </div>
      </div>
    </div>
  );
}
