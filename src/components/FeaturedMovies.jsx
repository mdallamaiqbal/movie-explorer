import { useState, useEffect } from "react";
import { Link } from "react-router";
import MovieCard from "./MovieCard";

const FeaturedMovies = () => {
    const [featuredMovies, setFeaturedMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.tvmaze.com/shows")
            .then(res => res.json())
            .then(data => {
                setFeaturedMovies(data.slice(0, 8));
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching featured movies:", err);
                setLoading(false);
            });
    }, []);

    return (
        <section className="max-w-7xl mx-auto my-5 bg-black py-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center mb-10 border-b border-gray-800 pb-4">
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-8 bg-red-600 rounded-full"></span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
                            Trending Movies
                        </h2>
                    </div>
                    
                    <Link
                        to="/movies" 
                        className="bg-gray-900 hover:bg-red-600 text-gray-300 hover:text-white px-4 py-2 rounded-full font-medium text-sm md:text-base flex items-center gap-2 border border-gray-800 transition-all duration-300 shadow-md"
                    >
                        View All <span>→</span>
                    </Link>
                </div>
                {loading ? (
                    <div className="flex justify-center items-center py-24">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {featuredMovies.map(movie => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default FeaturedMovies;