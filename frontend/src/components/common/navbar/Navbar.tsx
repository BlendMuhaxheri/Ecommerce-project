import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-100 bg-white">
      <div className="w-full px-6 xl:px-10 2xl:px-16 h-16 flex items-center">
        <Logo />

        {/* CENTER AREA */}
        <div className="flex-1 flex items-center justify-center gap-10">
          <NavLinks />
        </div>

        {/* RIGHT AREA */}
        <div className="flex items-center gap-4 ml-auto">
          <div className="w-[240px]">
            <SearchBar />
          </div>

          <NavIcons />
        </div>
      </div>
    </header>
  );
}
