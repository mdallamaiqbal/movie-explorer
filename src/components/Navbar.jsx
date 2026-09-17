import { Link } from "react-router";


const Navbar = () => {
    return (
        <div className="bg-gray-900 shadow-md border-b border-gray-800">
            <div className="navbar max-w-6xl mx-auto ">
           <div className="navbar-start">
           <Link to="/" className="text-xl text-white md:text-2xl font-bold">🎬MovieExplorer</Link>
           </div>
  
          <div className="navbar-end">
            <Link to="/movies" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition duration-200 shadow">Movies</Link>
          </div>
            </div>
        </div>
    );
};

export default Navbar;