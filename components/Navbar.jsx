import Link from "next/link";

const Navbar = () => (
  <nav className="bg-white shadow">
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex">
          <div className="flex-shrink-0 flex items-center font-extrabold">
            JAMStack Pokedex
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="/">
              <a className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Pokemon List
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="sm:hidden">
      <div className="pt-2 pb-3 space-y-1">
        <Link href="/">
          <a className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            Pokemon List
          </a>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
