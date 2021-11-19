import MovieCategories from "./components/MovieCategories";
import './styles.scss';

const Movies = () => {

    return (
        <div className="movies-base ">
            <div className="categories-align">
                <MovieCategories />
            </div>

        </div>
    );
}

export default Movies;