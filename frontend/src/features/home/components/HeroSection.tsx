import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="relative w-full h-[420px] rounded-xl overflow-hidden">
          <Image
            src="/assets/hero/hero-main.png"
            alt="Hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-lg text-white px-6">
              <p className="text-sm uppercase text-gray-200">New Collection</p>

              <h1 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
                Discover Style,
                <br />
                Shop the Latest
              </h1>

              <p className="mt-4 text-gray-200">
                Explore top picks in fashion, electronics, home & more.
              </p>

              <button className="mt-6 bg-white text-black px-6 py-3 rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
