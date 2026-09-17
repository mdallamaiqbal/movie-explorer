const MovieCard = ({ movie, onDetailsClick }) => {
    const { name, image, rating, premiered } = movie;

    return (
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 flex flex-col justify-between transition-transform duration-300 hover:scale-105">
            <div>
                <img 
                    src={image?.medium || "https://via.placeholder.com/210x295?text=No+Image"} 
                    alt={name} 
                    className="w-full h-72 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-white font-bold text-lg truncate mb-2">{name}</h3>
                    <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                        <span>⭐ {rating?.average || "5.5"}</span>
                        <span>📅 {premiered ? premiered.slice(0, 4) : "N/A"}</span>
                    </div>
                </div>
            </div>

            <div className="p-4 pt-0">
                <button 
                    onClick={onDetailsClick}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition duration-200"
                >
                    See Details
                </button>
            </div>
        </div>
    );
};

export default MovieCard;