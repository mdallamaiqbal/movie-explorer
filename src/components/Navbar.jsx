import { Link } from "react-router";


const Navbar = () => {
    return (
        <div className="bg-black shadow-sm">
            <div className="navbar max-w-6xl mx-auto ">
           <div className="navbar-start">
           <Link to="/" className="text-xl text-white md:text-2xl font-bold">🎬MovieExplorer</Link>
           </div>
  
          <div className="navbar-end">
            <Link to="/movies" className="text-white font-medium">Movies</Link>
          </div>
            </div>
        </div>
    );
};

export default Navbar;