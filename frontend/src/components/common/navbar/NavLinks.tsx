import Link from "next/link";

export default function NavLinks() {
  return (
    <div className="hidden lg:flex items-center gap-14 text-md font-medium text-gray-600">
      <Link href="/" className="hover:text-black transition">
        Home
      </Link>

      <Link href="/product" className="hover:text-black transition">
        Shop
      </Link>
      <Link href="/product" className="hover:text-black transition">
        Categories
      </Link>
      <Link href="/product" className="hover:text-black transition">
        Deals
      </Link>
      <Link href="/product" className="hover:text-black transition">
        About us
      </Link>
    </div>
  );
}
