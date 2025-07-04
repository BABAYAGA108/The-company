const Navbar = () => {
  return (
    <nav>
      <div>
        <div className="flex items-center gap-2">
          <a href="#"><img src="" alt="logo" /></a>
          <span className="text-2xl font-bold ">
          The Company
          </span>
        </div>
        <div>
          <form className="group relative" role="search" aria-label="Site Search ">
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
          <a href="#" className="text-gray-700 hover:text-orange-500">Home</a>
          <a href="#" className="text-gray-700 hover:text-orange-500">About</a>
          <a href="#" className="text-gray-700 hover:text-orange-500">Services</a>
          <a href="#" className="text-gray-700 hover:text-orange-500">Contact</a>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;