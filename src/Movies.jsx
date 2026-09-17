import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import MovieDetailsModal from "./components/MovieDetailsModal";


const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        setLoading(true);
        const url = searchQuery 
            ? `https://api.tvmaze.com/search/shows?q=${searchQuery}`
            : "https://api.tvmaze.com/shows";

        fetch(url)
            .then(res => res.json())
            .then(data => {
                const formattedMovies = searchQuery 
                    ? data.map(item => item.show) 
                    : data;
                setMovies(formattedMovies);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching movies:", err);
                setLoading(false);
            });
    }, [searchQuery]);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 relative">
            <div className="mb-8">
                <input 
                    type="text" 
                    placeholder="🔍 Search for a movie..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-600 shadow-md"
                />
            </div>

            {loading ? (
                <div className="text-center py-20 text-white text-xl">Loading movies...</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {movies.length > 0 ? (
                        movies.map(movie => (
                            <MovieCard 
                                key={movie.id} 
                                movie={movie} 
                                onDetailsClick={() => setSelectedMovie(movie)} 
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-400 py-10 text-lg">
                            No movies found matching your search.
                        </div>
                    )}
                </div>
            )}

            <MovieDetailsModal
                movie={selectedMovie} 
                onClose={() => setSelectedMovie(null)} 
            />
        </div>
    );
};

export default Movies;