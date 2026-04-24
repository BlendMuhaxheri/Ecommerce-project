import Hr from "@/components/ui/Hr";
import ProductCard from "@/features/product/components/ProductCard";

const products = [
  {
    id: "1",
    name: "Smart Watch",
    price: 120,
    image: "/products/watch.jpg",
  },
  {
    id: "2",
    name: "Headphones",
    price: 80,
    image: "/products/headphones.jpg",
  },
  {
    id: "3",
    name: "Handbag",
    price: 150,
    image: "/products/bag.jpg",
  },
  {
    id: "4",
    name: "Chair",
    price: 95,
    image: "/products/chair.jpg",
  },
];

export default function ProductSection() {
  return (
    <>
      <Hr />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Best Selling Products</h2>
          <button className="text-sm text-gray-500">View All</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
