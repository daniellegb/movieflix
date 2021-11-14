import {  GenresResponse } from 'core/types/Movie';
import { makePrivateRequest } from 'core/utils/request';
import { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './styles.scss';

const MovieCategories = () => {

    const [genresResponse, setGenresResponse] = useState<GenresResponse>();
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        const params = {
            page: activePage,
            linesPerPage: 3
        }
        makePrivateRequest({ url: '/genre', params })
        .then(response => setGenresResponse(response.data));
    },[activePage]);

    return (<div className="movie-categories ">
        <select
            value="Genres"
            className="select-style text-style"
            name="genre">
            <Switch>
                {genresResponse?.content.map(genre => (
                <Route path={`/movies?genreId=${genre.id}`}>
                <option value={genre.id}>{genre.name}</option>
                </Route>
                ))}
            </Switch>

                {/*<Switch>
                    <Route path="/movies?genreId=1">
                        <option value="1">Science Fiction</option>
                    </Route>
                    <Route path="/movies?genreId=2">
                        <option value="2">Action</option>
                    </Route>
                    <Route path="/movies?genreId=3">
                        <option value="3">Fantasy</option>
                    </Route>
                </Switch>*/}
        </select>
    </div>);
}

export default MovieCategories;