import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './core/components/Navbar';

const Routes = () => (
        <BrowserRouter>
                <Navbar />
                <Switch>
                        <Route path="/" exact>
                                <Home />
                        </Route>
                </Switch>
        </BrowserRouter>
);

export default Routes;