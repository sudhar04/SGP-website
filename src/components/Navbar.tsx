import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import companyLogo from "../assets/SGP logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Properties", path: "/properties" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  // Track scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  // Close mobile menu and reset scroll on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);

    if (!isHomePage) {
      setIsScrolled(true);
    } else {
      setIsScrolled(window.scrollY > 40);
    }
  }, [location.pathname, isHomePage]);

  
  const handleContactClick = () => {
    setIsMobileMenuOpen(false);

    if (location.pathname === "/") {
      const contactSection = document.getElementById("contact");

      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        navigate("/contact");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate("/contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };


  // Transparent only at the top of the homepage
  const transparentNavbar = isHomePage && !isScrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        transparentNavbar
          ? "border-transparent bg-transparent"
          : "border-gray-200/80 bg-white shadow-sm"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-[1360px] items-center justify-between px-5 transition-all duration-300 sm:px-8 lg:px-10 xl:px-12 ${
          isScrolled
            ? "h-[76px] lg:h-[86px]"
            : "h-[76px] lg:h-[88px]"
        }`}
      >
        
        {/* Logo and Brand */}
        <Link
          to="/"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="SGP Promoters Home"
          className="flex shrink-0 items-center gap-3"
        >
          {/* Company Logo */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-white transition-transform duration-300 hover:scale-105">
            <img
              src={companyLogo}
              alt="SGP Promoters Logo"
              className="h-full w-full object-contain p-1"
            />
          </div>

          {/* Responsive Brand Names */}

          <div className="flex min-w-0 flex-col items-start justify-center leading-tight">
            <span
              className={`whitespace-nowrap text-sm font-bold tracking-tight sm:text-base lg:text-[17px] ${
                transparentNavbar ? "text-white" : "text-gray-900"
              }`}
            >
              SGP Promoters
            </span>

            <span
            className={`my-0.5 w-full text-center text-xs font-bold leading-none transition-colors duration-300 sm:text-sm ${
              transparentNavbar ? "text-white" : "text-black"
            }`}
          >
            &
          </span>

            <span
              className={`whitespace-nowrap text-sm font-bold tracking-tight sm:text-base lg:text-[17px] ${
                transparentNavbar ? "text-white" : "text-gray-900"
              }`}
            >
              Shine Fin Services
            </span>
          </div>

        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-xl px-4 py-3 text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                  transparentNavbar
                    ? isActive
                      ? "bg-blue-500/20 text-blue-300"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                    : isActive
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Contact Button */}
        <button
          type="button"
          onClick={() => navigate("/contact")}
          className="hidden shrink-0 items-center justify-center rounded-full bg-[#FFBE00] px-7 py-3 text-[15px] font-semibold text-gray-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F5B400] hover:shadow-lg active:scale-95 lg:inline-flex"
        >
          Contact Us
        </button>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() =>
            setIsMobileMenuOpen((prev) => !prev)
          }
          aria-label={
            isMobileMenuOpen ? "Close menu" : "Open menu"
          }
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-300 lg:hidden ${
            transparentNavbar
              ? "text-white hover:bg-white/10"
              : "text-gray-900 hover:bg-gray-100"
          }`}
        >
          {isMobileMenuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen
            ? "max-h-[400px] border-t border-gray-200 opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        } ${
          transparentNavbar
            ? "border-white/10 bg-[#14232F]/95 backdrop-blur-xl"
            : "bg-white"
        }`}
        aria-hidden={!isMobileMenuOpen}
        inert={!isMobileMenuOpen}
      >
        <div className="mx-auto max-w-[1360px] space-y-1 px-5 py-3 sm:px-8">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                tabIndex={isMobileMenuOpen ? 0 : -1}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-semibold transition-colors ${
                  transparentNavbar
                    ? isActive
                      ? "bg-white/10 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                    : isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}

                {isActive && (
                  <ChevronDown
                    size={16}
                    className="-rotate-90"
                  />
                )}
              </Link>
            );
          })}

          <button
            type="button"
            onClick={handleContactClick}
            className="mt-2 w-full rounded-full bg-[#FFBE00] px-6 py-3.5 text-center font-semibold text-gray-950 transition-all duration-300 hover:bg-[#F5B400] active:scale-[0.98]"
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}




