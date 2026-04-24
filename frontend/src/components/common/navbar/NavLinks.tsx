import Link from "next/link";

export default function NavLinks() {
  return (
    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
      <Link href="/" className="hover:text-gray-600">
        Home
      </Link>

      <Link href="/product" className="hover:text-gray-600">
        Shop
      </Link>
       <Link href="/product" className="hover:text-gray-600">
        Categories
      </Link>
        <Link href="/product" className="hover:text-gray-600">
        Deals
      </Link>
        <Link href="/product" className="hover:text-gray-600">
        About us
      </Link>
    </div>
  );
}