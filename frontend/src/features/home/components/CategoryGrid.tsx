import Hr from "@/components/ui/Hr";

const categories = [
  { name: "Fashion", image: "/categories/fashion.jpg" },
  { name: "Electronics", image: "/categories/electronics.jpg" },
  { name: "Home", image: "/categories/home.jpg" },
  { name: "Beauty", image: "/categories/beauty.jpg" },
];

export default function CategoryGrid() {
  return (
    <>
      <Hr />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="relative rounded-lg overflow-hidden cursor-pointer group"
            >
              <img
                src={cat.image}
                className="w-full h-40 object-cover group-hover:scale-105 transition"
              />

              <div className="absolute inset-0 bg-black/30 flex items-end p-3">
                <p className="text-white font-medium">{cat.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
