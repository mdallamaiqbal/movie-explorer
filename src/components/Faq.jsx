const FAQSection = () => {
    return (
        <section className=" mb-5 text-white">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-red-600 font-semibold tracking-wider uppercase text-sm">Got Questions?</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-400 mt-2 text-sm md:text-base">
                        Everything you need to know about MovieExplorer and our services.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="collapse collapse-plus bg-gray-900 border border-gray-800 rounded-xl">
                        <input type="radio" name="faq-accordion" defaultChecked /> 
                        <div className="collapse-title text-lg font-semibold text-gray-200">
                            What is MovieExplorer?
                        </div>
                        <div className="collapse-content text-gray-400 text-sm leading-relaxed">
                            <p>MovieExplorer is a modern web application where you can discover popular movies, search your favorite shows, explore detailed information like ratings, release dates, genres, and summaries from around the world.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-gray-900 border border-gray-800 rounded-xl">
                        <input type="radio" name="faq-accordion" /> 
                        <div className="collapse-title text-lg font-semibold text-gray-200">
                            Is MovieExplorer free to use?
                        </div>
                        <div className="collapse-content text-gray-400 text-sm leading-relaxed">
                            <p>Yes, absolutely! MovieExplorer is 100% free to use for browsing, searching, and exploring movie details.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-gray-900 border border-gray-800 rounded-xl">
                        <input type="radio" name="faq-accordion" /> 
                        <div className="collapse-title text-lg font-semibold text-gray-200">
                            Where does the movie data come from?
                        </div>
                        <div className="collapse-content text-gray-400 text-sm leading-relaxed">
                            <p>All movie and TV show data, posters, and details are fetched in real-time using the official TVMaze API.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-gray-900 border border-gray-800 rounded-xl">
                        <input type="radio" name="faq-accordion" /> 
                        <div className="collapse-title text-lg font-semibold text-gray-200">
                            How can I search for a specific movie?
                        </div>
                        <div className="collapse-content text-gray-400 text-sm leading-relaxed">
                            <p>You can go to the "Movies" page from the navigation bar and use the search bar at the top to instantly find movies by their name.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;