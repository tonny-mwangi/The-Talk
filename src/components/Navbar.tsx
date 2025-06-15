
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Search, Instagram, Twitter, Menu } from "lucide-react";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";

// Navigation links config
const navLinks = [
  { name: "Home", to: "/" },
  { name: "Blogs", to: "/blogs" },
  { name: "About", to: "/about" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const getActivePath = () => {
    if (["/travel", "/cars", "/aviation"].includes(pathname)) {
      return "/blogs";
    }
    return pathname;
  };
  const activePath = getActivePath();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim() === "") return;
    navigate(`/search?q=${encodeURIComponent(search.trim())}`);
    setSearch("");
    setOpen(false); // close mobile drawer on search
  };

  return (
    <>
      <nav className="flex items-center justify-between py-6 px-4 border-b bg-white backdrop-blur-lg sticky top-0 z-30 w-full">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-primary font-playfair flex-shrink-0"
        >
          The Talk
        </Link>
        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-6 flex-1 justify-between">
          {/* SEARCH BAR - desktop */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center gap-2 mr-6"
          >
            <input
              type="text"
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-full border border-gray-200 px-4 py-1 w-48 text-sm bg-gray-50 focus:outline-none focus:ring-primary focus:border-primary"
            />
            <button
              type="submit"
              className="p-2 text-primary hover:bg-gray-100 rounded-full"
            >
              <Search size={18} />
            </button>
          </form>
          {/* NAV LINKS */}
          <div className="flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`story-link text-base font-medium hover:text-primary transition ${
                  activePath === link.to
                    ? "text-primary underline font-semibold"
                    : "text-gray-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* Social Icons */}
            <div className="flex gap-1 items-center ml-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full text-primary hover:bg-gray-100 transition-colors"
                style={{ fontWeight: 700 }}
              >
                <Instagram size={22} strokeWidth={2.5} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="p-2 rounded-full text-primary hover:bg-gray-100 transition-colors"
                style={{ fontWeight: 700 }}
              >
                <Twitter size={22} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
        {/* MOBILE NAVIGATION */}
        <div className="flex md:hidden items-center">
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <button
                aria-label="Open menu"
                className="p-2 rounded-full text-primary hover:bg-gray-100 transition-colors focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Menu size={28} />
              </button>
            </DrawerTrigger>
            <DrawerContent className="px-4 pb-6 pt-2 w-full max-w-[420px] rounded-t-lg flex flex-col gap-2">
              {/* Logo */}
              <Link
                to="/"
                className="text-xl font-bold tracking-tight text-primary font-playfair mb-3"
                onClick={() => setOpen(false)}
              >
                The Talk
              </Link>
              <form onSubmit={handleSearchSubmit} className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="rounded-full border border-gray-200 px-4 py-1 w-full text-sm bg-gray-50 focus:outline-none focus:ring-primary focus:border-primary"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="p-2 text-primary hover:bg-gray-100 rounded-full flex-shrink-0"
                >
                  <Search size={18} />
                </button>
              </form>
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`text-lg font-medium py-2 px-2 rounded-md ${
                      activePath === link.to
                        ? "bg-primary/10 text-primary"
                        : "text-gray-900 hover:bg-gray-50"
                    } transition`}
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              {/* Social Icons at bottom */}
              <div className="flex gap-3 mt-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 rounded-full text-primary bg-gray-100 hover:bg-gray-200 transition"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="p-2 rounded-full text-primary bg-gray-100 hover:bg-gray-200 transition"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

