export default function SearchBar() {
  return (
    <div className="relative w-full max-w-sm → max-w-md">
      <input
        placeholder="Search for products..."
        className="w-full text-gray-900 bg-gray-100 rounded-lg px-4 py-2.5 pl-10 text-sm outline-none focus:ring-1 focus:ring-gray-300"
      />

      <svg
        className="absolute left-3 top-3 w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 3.5a7.5 7.5 0 0013.15 13.15z"
        />
      </svg>
    </div>
  );
}
