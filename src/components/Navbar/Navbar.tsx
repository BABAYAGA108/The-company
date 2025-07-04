import logo from "../../assets/the company logo.jpeg";
import { SlMagnifier } from "react-icons/sl";
import Darkmode from "../Darkmode";

const menuItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Project", href: "#" },
  { label: "Contact", href: "#" },
];

const Navbar = () => {
  return (
    <nav className="bg-primary shadow-md py-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        {/* Logo and Company Name */}
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="w-14 h-14 flex items-center justify-center rounded overflow-hidden"
          >
            <img
              src={logo}
              alt="logo"
              className="object-contain w-12 h-12 rounded-bl-full"
            />
          </a>
          <span className="text-2xl font-bold sm:text-3xl">The Company</span>
        </div>

        {/* Search Bar - moved to be more centered on larger screens */}
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
              className="w-full sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-4 py-1 focus:outline-none focus:border-orange-400"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 font-semibold hover:text-orange-500 transition-colors duration-300"
            >
              <SlMagnifier />
            </button>
          </form>
        </div>

        {/* Navigation Links */}
        <ul className="hidden sm:flex items-center gap-6">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium"
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

        {/* Mobile Menu Button (optional) */}
        <button className="sm:hidden ml-4 text-gray-700">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
