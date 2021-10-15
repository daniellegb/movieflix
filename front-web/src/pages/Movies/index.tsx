import MovieCard from "./components/MovieCard";
import MovieCategories from "./components/MovieCategories";
import './styles.scss';

const Movies = () => (
    <div className="movies-base ">
        <div className="categories-align">
            <MovieCategories />
        </div>
        <div className="cards-align">
            <div className="d-flex ">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </div>
    </div>
);

export default Movies;