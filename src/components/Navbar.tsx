import { useEffect, useState } from "react";
import { Menu, X, Building2, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Properties", href: "#properties" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (name: string) => {
    setActiveLink(name);
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    setActiveLink("Contact");
    setIsMobileMenuOpen(false);

    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full border-b transition-all duration-300 ease-in-out ${
        isScrolled
          ? "border-gray-200/80 bg-white shadow-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`mx-auto flex max-w-[1360px] items-center justify-between px-5 transition-all duration-300 sm:px-8 lg:px-10 xl:px-12 ${
          isScrolled
            ? "h-[76px] lg:h-[86px]"
            : "h-[76px] lg:h-[88px]"
        }`}
      >
        {/* Logo and Brand */}
        <a
          href="#home"
          onClick={() => handleNavClick("Home")}
          className="flex shrink-0 items-center gap-3"
          aria-label="SGP Promoters Home"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-100 bg-white transition-all duration-300">
            <Building2
              size={25}
              strokeWidth={1.6}
              className="text-[#C7A65A]"
            />
          </div>

          <span
            className={`whitespace-nowrap text-base font-bold tracking-tight transition-colors duration-300 sm:text-[17px] ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            SGP Promoters
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.name)}
                className={`rounded-xl px-4 py-3 text-[15px] font-semibold transition-all duration-300 ${
                  isScrolled
                    ? isActive
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                    : isActive
                      ? "bg-blue-500/15 text-blue-400"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Desktop Contact Button */}
        <button
          type="button"
          onClick={handleContactClick}
          className="hidden shrink-0 items-center justify-center rounded-full bg-[#FFBE00] px-7 py-3 text-[15px] font-semibold text-gray-950 transition-all duration-300 hover:bg-[#F5B400] hover:shadow-md lg:inline-flex"
        >
          Contact Us
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-300 lg:hidden ${
            isScrolled
              ? "text-gray-900 hover:bg-gray-100"
              : "text-white hover:bg-white/10"
          }`}
        >
          {isMobileMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Navigation Dropdown */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen
            ? "max-h-[400px] border-t border-gray-200 opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        } ${
          isScrolled
            ? "bg-white"
            : "border-white/10 bg-[#14232F]/95 backdrop-blur-xl"
        }`}
        aria-hidden={!isMobileMenuOpen}
        inert={!isMobileMenuOpen}
      >
        <div className="mx-auto max-w-[1360px] space-y-1 px-5 py-3 sm:px-8">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name;

            return (
              <a
                key={link.name}
                href={link.href}
                tabIndex={isMobileMenuOpen ? 0 : -1}
                onClick={() => handleNavClick(link.name)}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-semibold transition-colors ${
                  isScrolled
                    ? isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                    : isActive
                      ? "bg-white/10 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.name}

                {isActive && (
                  <ChevronDown
                    size={16}
                    className="-rotate-90"
                  />
                )}
              </a>
            );
          })}

          <button
            type="button"
            onClick={handleContactClick}
            className="mt-2 w-full rounded-full bg-[#FFBE00] px-6 py-3.5 text-center font-semibold text-gray-950 transition-colors hover:bg-[#F5B400]"
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}



