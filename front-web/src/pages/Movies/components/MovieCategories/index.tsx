import { Route, Switch } from 'react-router-dom';
import './styles.scss';

const MovieCategories = () => (
    <div className="movie-categories ">
        <select
            value="Categorias"
            className="select-style text-style"
            name="category">
                <Switch>
                    <Route path="/movies?genreId=1">
                        <option value="1">Science Fiction</option>
                    </Route>
                    <Route path="/movies?genreId=2">
                        <option value="2">Action</option>
                    </Route>
                    <Route path="/movies?genreId=3">
                        <option value="3">Fantasy</option>
                    </Route>
                </Switch>
        </select>
    </div>
);

export default MovieCategories;