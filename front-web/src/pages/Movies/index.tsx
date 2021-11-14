import { Movie, MoviesResponse } from "core/types/Movie";
import { makePrivateRequest } from "core/utils/request";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./components/MovieCard";
import MovieCategories from "./components/MovieCategories";
import './styles.scss';

const Movies = () => {
    
    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        const params = {
            page: activePage,
            linesPerPage: 5
        }
        makePrivateRequest({ url: '/movies', params })
        .then(response => setMoviesResponse(response.data));
    },[activePage]);

    return (
        <div className="movies-base ">
            <div className="categories-align">
                <MovieCategories />
            </div>
            <div className="cards-align">
                <div className="d-flex ">
                    {moviesResponse?.content.map(movie => (
                        <Link to={`/movies/${movie.id}`} key={movie.id}>
                            <MovieCard movie={movie} />
                        </Link>
                    ))}


                </div>
            </div>
        </div>
    );
}

export default Movies;