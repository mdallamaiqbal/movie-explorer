import FAQSection from "./components/Faq";
import FeaturedMovies from "./components/FeaturedMovies";
import HeroBanner from "./components/HeroBanner";


const Home = () => {
    return (
        <div>
            <HeroBanner />
            <FeaturedMovies />
            <FAQSection />
        </div>
    );
};

export default Home;