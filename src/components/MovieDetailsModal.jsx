const MovieDetailsModal = ({ movie, onClose }) => {
    if (!movie) return null;

    const { name, image, rating, premiered, genres, summary, network, webChannel } = movie;
    const broadcaster = network?.name || webChannel?.name || "N/A";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div className="bg-gray-900 border border-gray-700 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative text-white animate-fadeIn max-h-[90vh] flex flex-col">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-gray-800 hover:bg-red-600 text-gray-300 hover:text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg transition duration-200 z-10"
                >
                    ✕
                </button>
                <div className="overflow-y-auto p-6 space-y-6">
                    <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gray-800 flex justify-center">
                        <img 
                            src={image?.original || image?.medium || "https://via.placeholder.com/600x400?text=No+Image"} 
                            alt={name} 
                            className="h-full object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">{name}</h2>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                            <span className="bg-gray-800 px-3 py-1 rounded-full">⭐ Rating: {rating?.average || "5.5"}</span>
                            <span className="bg-gray-800 px-3 py-1 rounded-full">📅 Release: {premiered || "N/A"}</span>
                            <span className="bg-gray-800 px-3 py-1 rounded-full">📺 Network: {broadcaster}</span>
                        </div>

                        {genres && genres.length > 0 && (
                            <div className="mb-4">
                                <span className="text-gray-400 text-sm font-semibold">Genres: </span>
                                <span className="text-red-400 text-sm font-medium">{genres.join(", ")}</span>
                            </div>
                        )}

                        <div className="space-y-2">
                            <h4 className="text-lg font-semibold text-gray-200">Overview:</h4>
                            <div 
                                className="text-gray-300 text-sm leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: summary || "<p>No description available.</p>" }}
                            />
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-gray-950 border-t border-gray-800 flex justify-end">
                    <button 
                        onClick={onClose}
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition duration-200"
                    >
                        Close
                    </button>
                </div>

            </div>
        </div>
    );
};

export default MovieDetailsModal;