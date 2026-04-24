import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bold text-xl">ShopEase</div>

        <NavLinks />

        <div className="flex items-center gap-4">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </header>
  );
}
