import logo from '../../assets/the company logo.jpeg'
import { SlMagnifier } from "react-icons/sl";
import Darkmode from '../Darkmode';
const menuItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Project", href: "#" },
  { label: "Contact", href: "#" },
];

const Navbar = () => {
  return (
    <nav className="bg-primary shadow-md py-4 sm:py-0">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="w-14 h-14 flex items-center justify-center rounded overflow-hidden no_bg.png"
          >
            <img
              src={logo}
              alt="logo"
              className="object-contain w-12 h-12 rounded-bl-full"
            />
          </a>
          <span className="text-2xl font-bold sm:text-3xl flex gap-2 ">
            The Company
          </span>
        </div>
        <div>
          <form
            className="group relative"
            role="search"
            aria-label="Site Search "
          >
            <label htmlFor="navbar-search" className="sr-only">
              Search
            </label>
            <input
              id="navbar-search"
              type="text"
              placeholder="Search..."
              className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-orange-400"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 font-semibold hover:text-orange-500 transition-colors duration-300"
            >
              <SlMagnifier />
            </button>
          </form>
        </div>
        <ul>
          {menuItems.map((item) => (
            <li className="hidden sm:block" key={item.label}>
              <a
                href={item.href}
                className="text-gray-700 hover:text-orange-500 transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        
        <div>
          <Darkmode />
        </div>
      </div>
    </nav>
  );
}


export default Navbar;