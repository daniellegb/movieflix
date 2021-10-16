import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './core/components/Navbar';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/Movies/components/MovieDetails';

const Routes = () => (
        <BrowserRouter>
                <Navbar />
                <Switch>
                        <Route path="/" exact>
                                <Home />
                        </Route>
                        <Route path="/movies" exact>
                                <Movies />
                        </Route>
                        <Route path="/movies/:movieId" exact>
                                <MovieDetails />
                        </Route>
                </Switch>
        </BrowserRouter>
);

export default Routes;