const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          <a href="/">Logo</a>
        </div>
        <div>
          <form className="group relative" role="search" aria-label="Site Search">
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
          <ul className="">
            <li> Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;