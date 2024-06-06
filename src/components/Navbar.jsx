import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <a href="#" className="text-xl font-bold text-gray-800">
                  Cric-Update
                </a>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  to='/livescore'
                  className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 hover:border-indigo-500 text-sm font-medium"
                >
                  Live Scores
                </Link>
                <Link
                  to="/matchschedule"
                  className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 hover:border-indigo-500 text-sm font-medium"
                >
                  Schedule
                </Link>
                <Link
                  to="/pointstable"
                  className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 hover:border-indigo-500 text-sm font-medium"
                >
                  Point Table
                </Link>
                <Link
                  to="/statistics"
                  className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 hover:border-indigo-500 text-sm font-medium"
                >
                  Statistics
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700 focus:outline-none">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;