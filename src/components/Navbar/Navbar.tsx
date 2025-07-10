import { useState } from "react";
import logo from "../../assets/the company logo.jpeg";
import { SlMagnifier } from "react-icons/sl";
import { FiMenu, FiX } from "react-icons/fi";
import Darkmode from "../Darkmode";

const menuItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Project", href: "#" },
  { label: "Skills", href: "#" }, // Removed comma
  { label: "Contact", href: "#" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-primary dark:bg-gray-800 shadow-md py-4 relative">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        {/* Logo and Company Name */}
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="w-14 h-14 flex items-center justify-center rounded overflow-hidden"
          >
            <img
              src={logo}
              alt="Company logo"
              className="object-contain w-12 h-12 rounded-bl-full"
            />
          </a>
          <span className="text-2xl font-bold sm:text-3xl dark:text-white">
            The Company
          </span>
        </div>

        {/* Search Bar */}
        <div className="order-last sm:order-none w-full sm:w-auto mt-4 sm:mt-0">
          <form
            className="group relative max-w-md mx-auto"
            role="search"
            aria-label="Site Search"
          >
            <label htmlFor="navbar-search" className="sr-only">
              Search
            </label>
            <input
              id="navbar-search"
              type="text"
              placeholder="Search..."
              className="w-full sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 dark:border-gray-600 px-4 py-1 focus:outline-none focus:border-orange-400 dark:bg-gray-700 dark:text-white"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300 font-semibold hover:text-orange-500 transition-colors duration-300"
              aria-label="Search"
            >
              <SlMagnifier />
            </button>
          </form>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden sm:flex items-center gap-6">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-orange-500 transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <div className="ml-4">
          <Darkmode />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden ml-4 text-gray-700 dark:text-gray-200"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg rounded-b-lg p-4 z-50">
            <ul className="flex flex-col items-start gap-4">
              {menuItems.map((item) => (
                <li key={item.label} className="w-full">
                  <a
                    href={item.href}
                    className="block w-full text-gray-700 dark:text-gray-200 hover:text-orange-500 transition-colors duration-300 font-medium py-2"
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
