import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-xl font-bold text-gray-900 hover:text-black transition"
    >
      <div className="text-lg font-semibold tracking-tight text-gray-900">
        ShopEase
      </div>
    </Link>
  );
}
