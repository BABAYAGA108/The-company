import logo from '../../assets/the company logo.jpeg'
const Navbar = () => {
  return (
    <nav className='bg-primary shadow-md py-4 sm:py-0'>
      <div className='container flex justify-between items-center'>
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
          <span className="text-2xl font-bold sm:text-3xl flex gap-2 ">The Company</span>
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
          </form>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-700 hover:text-orange-500">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;