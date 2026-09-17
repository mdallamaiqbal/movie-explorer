import { Link } from "react-router";


const HeroBanner = () => {
    return (
        <div 
            className="hero min-h-[45vh] bg-cover bg-center relative"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1920&auto=format&fit=crop')`
            }}
        >
            <div className="hero-content text-center text-neutral-content px-4">
                <div className="max-w-xl">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-wider text-white mb-6 uppercase">
                        Discover Movies
                    </h1>
                    <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
                        Explore and discover your favorite movies from around the world. Dive into endless entertainment today.
                    </p>
                    <Link
                        to="/movies" 
                        className="btn bg-red-600 hover:bg-red-700 text-white border-none px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    >
                        Explore Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;