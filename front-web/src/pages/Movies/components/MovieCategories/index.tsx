import { MoviesResponse } from 'core/types/Movie';
import { makePrivateRequest } from 'core/utils/request';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard';
import Pagination from 'core/components/Pagination';
import './styles.scss';

const MovieCategories = () => {

    const [genreNumber, setGenreNumber] = useState('1');
    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        const params = {
            page: activePage,
            linesPerPage: 4
        }
        makePrivateRequest({ url: `/movies?genreId=${genreNumber}`, params })
        .then(response => setMoviesResponse(response.data));
    },[activePage || genreNumber]);

    const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setActivePage(0);
        setGenreNumber(value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <>
            <form onChange={handleSubmit}>
                <div className="movie-categories ">
                    <select className="select-style text-style"
                        onChange={handleOnChange}>
                            <option selected value="1">Science Fiction</option>
                            <option value="2">Action</option>
                            <option value="3">Fantasy</option>
                    </select>
                </div>
            </form>
            <div className="cards-align">
                <div className="d-flex ">
                    {moviesResponse?.content.map(movie => (
                        <Link to={`/movies/${movie.id}`} key={movie.id}>
                            <MovieCard movie={movie} />
                        </Link>
                    ))}
                </div>
                <div className="pagination-contet">
                    {moviesResponse && (
                        <Pagination 
                        totalPages={moviesResponse.totalPages}
                        activePage={activePage}
                        onChange={page => setActivePage(page)
                        }
                        />
                    )}
                </div>
            </div>
            
        </>
    );
}

export default MovieCategories;