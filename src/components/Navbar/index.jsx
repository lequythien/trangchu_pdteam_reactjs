import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Phone, Menu, X, Search } from "lucide-react";
import Logo from "../../assets/images/logo.png";
import DiscoverMoreButton from "../Button";

const menuItems = {
  Home: [
    { title: "Home 1", href: "/" },
    { title: "Home 2", href: "/" },
    { title: "Home 3", href: "/" },
    { title: "Home 4", href: "/" },
    { title: "Home 5", href: "/" },
    { title: "Home 6", href: "/" },
    { title: "Home 7", href: "/" },
    { title: "Home 8", href: "/" },
    { title: "Home 9", href: "/" },
  ],
  Service: [
    { title: "Service 1", href: "/" },
    { title: "Service 2", href: "/" },
    { title: "Service 3", href: "/" },
    { title: "Service 4", href: "/" },
    { title: "Service 5", href: "/" },
    { title: "Service 6", href: "/" },
  ],
  Pages: [
    { title: "Pages 1", href: "/" },
    { title: "Pages 2", href: "/" },
    { title: "Pages 3", href: "/" },
    { title: "Pages 4", href: "/" },
    { title: "Pages 5", href: "/" },
    { title: "Pages 6", href: "/" },
  ],
  MegaMenu: [],
  Blog: [
    { title: "Blog 1", href: "/" },
    { title: "Blog 2", href: "/" },
    { title: "Blog 3", href: "/" },
    { title: "Blog 4", href: "/" },
    { title: "Blog 5", href: "/" },
  ],
  ContactUs: [],
};

const megaMenuColumns = [
  [
    { title: "Software Agency", href: "/" },
    { title: "SaaS App Landing", href: "/" },
    { title: "Payments Solution", href: "/" },
    { title: "Startup / Software Company", href: "/" },
    { title: "Artificial Intelligence", href: "/" },
    { title: "NFT Service", href: "/" },
    { title: "Cyber Security", href: "/" },
    { title: "Hardware Service", href: "/" },
    { title: "ICO Landing", href: "/" },
    { title: "Personal Portfolio", href: "/" },
  ],
  [
    { title: "Service 01", href: "/" },
    { title: "Service 02", href: "/" },
    { title: "Service 03", href: "/" },
    { title: "Service 04", href: "/" },
    { title: "Service 05", href: "/" },
    { title: "Service Single", href: "/" },
  ],
  [
    { title: "Project 01", href: "/" },
    { title: "Project 02", href: "/" },
    { title: "Project 03", href: "/" },
    { title: "Case Study Details", href: "/" },
    { title: "Pricing 01", href: "/" },
    { title: "Pricing 02", href: "/" },
  ],
  [
    { title: "About Us", href: "/" },
    { title: "Team 01", href: "/" },
    { title: "Team 02", href: "/" },
    { title: "Team 03", href: "/" },
    { title: "Team Details", href: "/" },
  ],
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleMouseEnter = (menu) => {
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  const navItems = [
    "Home",
    "Service",
    "Pages",
    "Mega Menu",
    "Blog",
    "Contact Us",
  ];

  return (
    <header className="bg-white relative z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 md:h-24 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src={Logo}
              alt="AgileTech Logo"
              className="h-8 md:h-9 w-auto"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => {
              const key =
                item === "Mega Menu" ? "MegaMenu" : item.replace(/\s/g, "");
              const hasDropdown = menuItems[key]?.length > 0;
              const isMega = item === "Mega Menu";

              return (
                <div
                  key={item}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavLink
                    to={
                      item === "Home"
                        ? "/"
                        : item === "Contact Us"
                          ? "/contact"
                          : `/${item.toLowerCase().replace(/\s/g, "-")}`
                    }
                    className="text-gray-800 hover:text-[#246bfd] text-sm font-semibold transition-colors flex items-center gap-1"
                  >
                    {item}
                  </NavLink>

                  {/* Dropdown */}
                  {hasDropdown && openMenu === item && !isMega && (
                    <div
                      className="absolute left-0 top-full pt-6 w-60 z-50"
                      onMouseEnter={() => handleMouseEnter(item)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="bg-white overflow-hidden">
                        <ul className="space-y-1">
                          {menuItems[key].map((sub) => (
                            <li key={sub.title}>
                              <a
                                href={sub.href}
                                className="block px-5 py-3 text-sm font-medium text-gray-700 relative transition-all duration-300 hover:bg-blue-500 hover:text-white hover:pl-7 after:content-[''] after:absolute after:bottom-0 after:left-5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-6 hover:after:left-7"
                              >
                                {sub.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Mega Menu */}
                  {isMega && openMenu === "Mega Menu" && (
                    <div
                      className="absolute left-1/2 top-full pt-6 w-max -translate-x-1/2 z-40"
                      onMouseEnter={() => handleMouseEnter("Mega Menu")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="bg-white">
                        <div className="w-full px-8 py-8">
                          <div className="grid grid-cols-4 gap-x-10 gap-y-4">
                            {megaMenuColumns.map((column, colIndex) => (
                              <ul key={colIndex} className="space-y-3">
                                {column.map((sub) => (
                                  <li key={sub.title}>
                                    <a
                                      href={sub.href}
                                      className="block px-5 py-3 text-sm font-medium text-gray-700 relative transition-all duration-300 hover:bg-blue-500 hover:text-white hover:pl-7 after:content-[''] after:absolute after:bottom-0 after:left-5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-6 hover:after:left-7"
                                    >
                                      {sub.title}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="tel:+18085550111" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Need help?</p>
                <p className="font-semibold text-base text-[#101a29] hover:text-blue-600">
                  (808) 555-0111
                </p>
              </div>
            </a>

            <DiscoverMoreButton href="#">Discover More +</DiscoverMoreButton>
          </div>

          {/* Mobile menu toggle + search */}
          <div className="lg:hidden flex items-center gap-5">
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search"
              className="text-gray-700 hover:text-[#246bfd] transition-colors"
            >
              <Search size={22} />
            </button>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
              className="relative w-8 h-8 text-gray-700 hover:text-[#246bfd]"
            >
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${
                  isMobileOpen
                    ? "opacity-0 scale-75 pointer-events-none"
                    : "opacity-100 scale-100"
                }`}
              >
                <Menu size={28} />
              </span>

              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${
                  isMobileOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-75 pointer-events-none"
                }`}
              >
                <X size={28} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white">
          <div className="mx-auto max-w-7xl px-5">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item}
                  to={
                    item === "Home"
                      ? "/"
                      : item === "Contact Us"
                        ? "/contact"
                        : `/${item.toLowerCase().replace(/\s/g, "-")}`
                  }
                  className="block py-3 border-b border-gray-200 text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#246bfd] transition-colors"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Search overlay */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className={`relative w-full max-w-3xl transform transition-all duration-500 ease-out ${
              isSearchOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center overflow-hidden rounded-md bg-white shadow-2xl">
              <input
                type="text"
                placeholder="Search...."
                autoFocus
                className="flex-1 px-6 py-3 text-lg text-gray-800 placeholder-gray-400 outline-none"
              />

              <button className="flex items-center justify-center bg-[#246bfd] px-6 py-4 h-full transition-colors duration-300 hover:bg-blue-700">
                <Search size={24} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
